import { createServerSupabaseClient } from '../supabase/client';
import type { Database } from '../supabase/database.types';

const PAGE_SIZE = 10;

function sanitizeIlike(raw: string): string {
  return raw.replace(/\\/g, '\\\\').replace(/%/g, '\\%').replace(/_/g, '\\_');
}

export type BlokRow = Database['public']['Tables']['blok']['Row'];
export type MakamRow = Database['public']['Tables']['makam']['Row'];

function matchesMakamSearch(row: MakamRow, search: string): boolean {
  const key = search.trim().toLowerCase();
  if (!key) return true;
  const fields = [
    row.nama,
    row.nomor,
    row.nrp ?? '',
    row.pangkat ?? '',
    row.kesatuan ?? '',
    row.tanggal_lahir ?? '',
    row.tanggal_gugur ?? '',
  ];
  return fields.some((value) => String(value).toLowerCase().includes(key));
}

export async function getBloks(): Promise<BlokRow[]> {
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from('blok')
    .select('*')
    .order('nama', { ascending: true });

  if (error) throw new Error(error.message);
  return data ?? [];
}

// export async function getZiarahSummary(): Promise<{
//   tamuUmum30d: number;
//   rombongan30d: number;
// }> {
//   const supabase = createServerSupabaseClient();
//   const cutoff = new Date();
//   cutoff.setDate(cutoff.getDate() - 30);
//   const ymd = cutoff.toISOString().slice(0, 10);

//   const [umum, rombongan] = await Promise.all([
//     supabase
//       .from('tamu_umum')
//       .select('id', { count: 'exact', head: true })
//       .gte('tanggal', ymd),
//     supabase
//       .from('tamu_rombongan')
//       .select('id', { count: 'exact', head: true })
//       .gte('tanggal', ymd),
//   ]);

//   if (umum.error) throw new Error(umum.error.message);
//   if (rombongan.error) throw new Error(rombongan.error.message);

//   return {
//     tamuUmum30d: umum.count ?? 0,
//     rombongan30d: rombongan.count ?? 0,
//   };
// }

export async function getMakamPage(params: {
  blokId: string;
  page: number;
  search: string;
}): Promise<{ rows: MakamRow[]; total: number; page: number }> {
  const supabase = createServerSupabaseClient();
  const s = params.search;
  const { data, error } = await supabase
    .from('makam')
    .select('*')
    .eq('blok_id', params.blokId)
    .order('nomor', { ascending: true });

  if (error) throw new Error(error.message);

  const filtered = (data ?? []).filter((row) => matchesMakamSearch(row, s));
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const page = Math.min(Math.max(1, params.page), totalPages);
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;
  return { rows: filtered.slice(from, to + 1), total, page };
}

export function makamPageSize(): number {
  return PAGE_SIZE;
}

export function formatTanggal(value: string | null): string {
  if (!value || value.trim() === '') return '—';
  return value.trim();
}

const PAGE_SIZE_TAMU = 9;

export async function getTamuUmumPage(params: {
  page: number;
  search: string;
}): Promise<{ rows: Database["public"]["Tables"]["tamu_umum"]["Row"][]; total: number; page: number }> {
  const supabase = createServerSupabaseClient();
  const s = params.search.trim();

  let countQ = supabase
    .from("tamu_umum")
    .select("*", { count: "exact", head: true });

  if (s) {
    const safe = sanitizeIlike(s);
    countQ = countQ.or(`nama.ilike.%${safe}%,tujuan.ilike.%${safe}%`);
  }

  const { count, error: countErr } = await countQ;
  if (countErr) throw new Error(countErr.message);

  const total = count ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE_TAMU));
  const page = Math.min(Math.max(1, params.page), totalPages);
  const from = (page - 1) * PAGE_SIZE_TAMU;
  const to = from + PAGE_SIZE_TAMU - 1;

  let q = supabase.from("tamu_umum").select("*");

  if (s) {
    const safe = sanitizeIlike(s);
    q = q.or(`nama.ilike.%${safe}%,tujuan.ilike.%${safe}%`);
  }

  const { data, error } = await q
    .order("tanggal", { ascending: false })
    .range(from, to);

  if (error) throw new Error(error.message);

  return { rows: data ?? [], total, page };
}

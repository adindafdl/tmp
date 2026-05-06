import Link from 'next/link';
import { BackToHome } from '@/components/back-to-home';
import {
  getBloks,
  getMakamPage,
  makamPageSize,
  formatTanggal,
  type BlokRow,
} from '../../../lib/queries/public-data';

type SearchParams = Promise<{
  blok?: string | string[];
  page?: string | string[];
  q?: string | string[];
}>;

function first(v: string | string[] | undefined): string | undefined {
  if (Array.isArray(v)) return v[0];
  return v;
}

function TombstoneIcon({ variant }: { variant: 'red' | 'green' }) {
  const cls =
    variant === 'red' ? 'text-[#14532d]' : 'text-[#14532d]';
  return (
    <svg className={`h-10 w-10 ${cls}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3 5 7v3h2v9h10v-9h2V7l-7-4Zm0 2.2L16.5 8V18h-9V8L12 5.2Z" />
    </svg>
  );
}

export default async function DaftarMakamPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const blokId = first(sp.blok);
  const pageRaw = first(sp.page);
  const q = first(sp.q) ?? '';
  const page = Math.max(1, parseInt(pageRaw ?? '1', 10) || 1);

  let bloks: BlokRow[] = [];
  try {
    bloks = await getBloks();
  } catch {
    bloks = [];
  }

  let table:
    | {
        rows: Awaited<ReturnType<typeof getMakamPage>>['rows'];
        total: number;
        blokNama: string;
      }
    | null = null;

  let effectivePage = page;

  if (blokId) {
    try {
      const { rows, total, page: resolvedPage } = await getMakamPage({
        blokId,
        page,
        search: q,
      });
      effectivePage = resolvedPage;
      const b = bloks.find((x) => x.id === blokId);
      table = {
        rows,
        total,
        blokNama: b?.nama ?? 'Blok',
      };
    } catch {
      table = null;
    }
  }

  const pageSize = makamPageSize();
  const totalPages =
    table && table.total > 0 ? Math.ceil(table.total / pageSize) : 1;

  const buildHref = (p: number) => {
    const params = new URLSearchParams();
    params.set('blok', blokId!);
    if (p > 1) params.set('page', String(p));
    if (q.trim()) params.set('q', q.trim());
    return `/daftar-makam?${params.toString()}`;
  };

  return (
    <div className="bg-zinc-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-screen-2xl">
        <BackToHome className="mb-6" />
        <h1 className="text-2xl font-bold text-zinc-900">Daftar Makam &amp; Blok</h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600">
          Pilih blok untuk melihat daftar makam. Data diambil dari basis data resmi
          TMP.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bloks.length === 0 ? (
            <p className="col-span-full text-sm text-zinc-500">
              Data blok belum tersedia atau koneksi basis data gagal.
            </p>
          ) : (
            bloks.map((b, i) => (
              <Link
                key={b.id}
                href={`/daftar-makam?blok=${encodeURIComponent(b.id)}`}
                className={`flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md ring-1 transition hover:ring-[#14532d]/40 ${
                  blokId === b.id
                    ? 'ring-2 ring-[#14532d]'
                    : 'ring-zinc-200'
                }`}
              >
                <TombstoneIcon variant={i % 2 === 0 ? 'red' : 'green'} />
                <div>
                  <p className="text-lg font-bold text-zinc-900">{b.nama}</p>
                  <p className="text-sm text-zinc-600">
                    {b.terisi} makam terisi
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>

        {blokId && (
          <div className="mt-10 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-zinc-200 sm:p-8">
            <h2 className="text-xl font-bold text-zinc-900">
              {table?.blokNama ?? 'Blok'}
            </h2>

            <form
              action="/daftar-makam"
              method="get"
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <input type="hidden" name="blok" value={blokId} />
              <div className="relative flex-1">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3-3" strokeLinecap="round" />
                  </svg>
                </span>
                <input
                  name="q"
                  defaultValue={q}
                  placeholder="Cari nama, pangkat, kesatuan, NRP, atau nomor..."
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-3 pl-11 pr-4 text-sm outline-none ring-[#14532d] focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-[#14532d] px-6 py-3 text-sm font-semibold text-white hover:bg-[#166534]"
              >
                Cari
              </button>
            </form>

            {!table ? (
              <p className="mt-8 text-sm text-[#14532d]">
                Tidak dapat memuat data makam untuk blok ini.
              </p>
            ) : (
              <>
                <div className="mt-6 overflow-x-auto rounded-xl ring-1 ring-zinc-200">
                  <table className="min-w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#14532d] text-white">
                        <th className="px-3 py-3 font-semibold">No</th>
                        <th className="px-3 py-3 font-semibold">Nama Pahlawan</th>
                        <th className="px-3 py-3 font-semibold">Pangkat</th>
                        <th className="px-3 py-3 font-semibold min-w-40">
                          Tempat, Tgl. Lahir
                        </th>
                        <th className="px-3 py-3 font-semibold min-w-40">
                          Tempat, Tgl. Wafat
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 bg-white">
                      {table.rows.length === 0 ? (
                        <tr>
                          <td
                            colSpan={5}
                            className="px-3 py-8 text-center text-zinc-500"
                          >
                            Tidak ada data yang cocok.
                          </td>
                        </tr>
                      ) : (
                        table.rows.map((row, idx) => (
                          <tr
                            key={row.id}
                            className={idx % 2 === 1 ? 'bg-zinc-50/80' : ''}
                          >
                            <td className="px-3 py-3 text-zinc-700">
                              {(effectivePage - 1) * pageSize + idx + 1}
                            </td>
                            <td className="px-3 py-3 font-medium text-zinc-900">
                              {row.nama}
                            </td>
                            <td className="px-3 py-3 text-zinc-700">
                              {row.pangkat ?? '—'}
                            </td>
                            <td className="px-3 py-3 text-zinc-700">
                              {formatTanggal(row.tanggal_lahir)}
                            </td>
                            <td className="px-3 py-3 text-zinc-700">
                              {formatTanggal(row.tanggal_gugur)}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {table.total > pageSize && (
                  <nav
                    className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm"
                    aria-label="Pagination"
                  >
                    <PaginationLink
                      disabled={effectivePage <= 1}
                      href={buildHref(effectivePage - 1)}
                      label="Sebelumnya"
                    />
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (p) => (
                        <Link
                          key={p}
                          href={buildHref(p)}
                          className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-2 font-medium ${
                            p === effectivePage
                              ? 'bg-[#14532d] text-white'
                              : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
                          }`}
                        >
                          {p}
                        </Link>
                      )
                    )}
                    <PaginationLink
                      disabled={effectivePage >= totalPages}
                      href={buildHref(effectivePage + 1)}
                      label="Selanjutnya"
                    />
                  </nav>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function PaginationLink({
  href,
  label,
  disabled,
}: {
  href: string;
  label: string;
  disabled: boolean;
}) {
  if (disabled) {
    return (
      <span className="rounded-lg px-3 py-2 text-zinc-400">{label}</span>
    );
  }
  return (
    <Link
      href={href}
      className="rounded-lg bg-zinc-100 px-3 py-2 font-medium text-zinc-800 hover:bg-zinc-200"
    >
      {label}
    </Link>
  );
}

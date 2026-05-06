import Link from "next/link";
import { getTamuUmumPage } from '../../../lib/queries/public-data';
import { BackToHome } from '@/components/back-to-home';

type SearchParams = Promise<{
  page?: string | string[];
  q?: string | string[];
}>;

function first(v: string | string[] | undefined): string | undefined {
  if (Array.isArray(v)) return v[0];
  return v;
}

export default async function TamuPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Next.js app router passes `searchParams` as a Promise in some versions.
  const sp = await searchParams;
  const pageRaw = first(sp.page);
  const qRaw = first(sp.q);
  const page = Math.max(1, parseInt(pageRaw ?? "1", 10) || 1);
  const search = qRaw ?? "";

  const { rows, total, page: resolvedPage } = await getTamuUmumPage({
    page,
    search,
  });

  const totalPages = Math.max(1, Math.ceil(total / 9));

  const buildHref = (p: number) => {
    const params = new URLSearchParams();
    params.set("page", String(p));
    if (search.trim()) params.set("q", search.trim());
    return `?${params.toString()}`;
  };

  return (
    <div className="mx-auto w-full max-w-screen-2xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <BackToHome className="mb-2" />
      <h1 className="text-2xl font-bold text-zinc-900">Daftar Kunjungan</h1>

      {/* 🔍 SEARCH */}
      <form className="flex gap-2">
        <input
          type="text"
          name="q"
          defaultValue={search}
          placeholder="Cari nama / tujuan..."
          className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 outline-none ring-[#14532d] focus:ring-2"
        />
        <button className="rounded-lg bg-[#14532d] px-4 py-2 text-white transition hover:bg-[#166534] focus-visible:outline-none focus-visible:ring-0">
          Cari
        </button>
      </form>

      {/* 📊 LIST */}
      <div className="grid gap-6 md:grid-cols-3">
        {rows.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
          >
            <p className="font-semibold text-zinc-900">{item.nama}</p>
            <p className="text-sm text-zinc-700">{item.tujuan}</p>
            <p className="text-xs text-zinc-500">{item.tanggal}</p>
          </div>
        ))}
      </div>

      {/* 📄 PAGINATION */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => {
          const p = i + 1;
          return (
            <Link
              key={p}
              href={buildHref(p)}
              className={`rounded px-3 py-1 text-sm ${
                p === resolvedPage
                  ? "bg-[#14532d] text-white"
                  : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
              } focus-visible:outline-none focus-visible:ring-0`}
            >
              {p}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
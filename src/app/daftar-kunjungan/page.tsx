import Link from "next/link";
import { getTamuUmumPage } from '../../../lib/queries/public-data';
import { BackToHome } from '@/components/back-to-home';
import { ClickableImage } from '@/components/clickable-image';

type SearchParams = Promise<{
  page?: string | string[];
  q?: string | string[];
  view?: string | string[];
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
  const viewRaw = first(sp.view);
  const page = Math.max(1, parseInt(pageRaw ?? "1", 10) || 1);
  const search = qRaw ?? "";
  const viewMode = viewRaw === "card" ? "card" : "table";

  const { rows, total, page: resolvedPage } = await getTamuUmumPage({
    page,
    search,
  });

  const totalPages = Math.max(1, Math.ceil(total / 9));

  const buildHref = (p: number) => {
    const params = new URLSearchParams();
    params.set("page", String(p));
    if (search.trim()) params.set("q", search.trim());
    params.set("view", viewMode);
    return `?${params.toString()}`;
  };

  const buildViewHref = (view: "table" | "card") => {
    const params = new URLSearchParams();
    if (page > 1) params.set("page", String(page));
    if (search.trim()) params.set("q", search.trim());
    params.set("view", view);
    return `?${params.toString()}`;
  };

  return (
    <div className="mx-auto w-full max-w-screen-2xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <BackToHome className="mb-2" />
      <h1 className="text-2xl font-bold text-zinc-900">Daftar Kunjungan</h1>

      {/* 🔍 SEARCH */}
      <form className="flex flex-col gap-2 sm:flex-row">
        <input
          type="text"
          name="q"
          defaultValue={search}
          placeholder="Cari nama / tujuan..."
          className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 outline-none ring-[#14532d] focus:ring-2"
        />
        <button className="tmp-btn rounded-lg bg-[#14532d] px-4 py-2 text-white transition hover:bg-[#166534] focus-visible:outline-none focus-visible:ring-0">
          Cari
        </button>
      </form>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-zinc-700">Mode tampilan:</span>
        <Link
          href={buildViewHref("table")}
          className={`rounded-lg px-3 py-1.5 text-sm font-medium ${
            viewMode === "table"
              ? "bg-[#14532d] text-white"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
          }`}
        >
          Tabel
        </Link>
        <Link
          href={buildViewHref("card")}
          className={`rounded-lg px-3 py-1.5 text-sm font-medium ${
            viewMode === "card"
              ? "bg-[#14532d] text-white"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
          }`}
        >
          Card
        </Link>
      </div>

      {/* 📊 LIST */}
      {viewMode === "table" ? (
      <div className="tmp-surface overflow-x-auto rounded-2xl ring-1 ring-zinc-200">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="bg-[#14532d] text-white">
              <th className="px-3 py-3 font-semibold">Tanggal</th>
              <th className="px-3 py-3 font-semibold">Nama</th>
              <th className="px-3 py-3 font-semibold">Tujuan</th>
              <th className="px-3 py-3 font-semibold min-w-[120px]">Foto</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 bg-white/85">
            {rows.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-3 py-8 text-center text-zinc-500">
                  Data kunjungan belum tersedia.
                </td>
              </tr>
            ) : (
              rows.map((item, idx) => (
                <tr key={item.id} className={idx % 2 === 1 ? 'bg-zinc-50/80' : ''}>
                  <td className="px-3 py-3 text-zinc-700">{item.tanggal}</td>
                  <td className="px-3 py-3 font-medium text-zinc-900">{item.nama}</td>
                  <td className="px-3 py-3 text-zinc-700">{item.tujuan}</td>
                  <td className="px-3 py-3 text-zinc-700">
                    <ClickableImage
                      src={item.foto_url}
                      alt={`Foto kunjungan ${item.nama}`}
                      wrapperClassName="h-20 w-20"
                      dialogClassName="max-w-3xl"
                      dialogImageClassName="max-h-[80vh]"
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {rows.length === 0 ? (
            <p className="tmp-surface rounded-2xl p-6 text-sm text-zinc-500 ring-1 ring-zinc-200">
              Data kunjungan belum tersedia.
            </p>
          ) : (
            rows.map((item) => (
              <article key={item.id} className="tmp-card w-full max-w-sm p-4">
                <ClickableImage
                  src={item.foto_url}
                  alt={`Foto kunjungan ${item.nama}`}
                  wrapperClassName="aspect-[4/3] w-full rounded-xl"
                  dialogClassName="max-w-2xl"
                  dialogImageClassName="max-h-[68vh]"
                />
                <div className="mt-3 space-y-1.5 text-sm">
                  <p><span className="font-semibold text-zinc-900">Nama:</span> {item.nama}</p>
                  <p><span className="font-semibold text-zinc-900">Tanggal:</span> {item.tanggal}</p>
                  <p><span className="font-semibold text-zinc-900">Tujuan:</span> {item.tujuan}</p>
                </div>
              </article>
            ))
          )}
        </div>
      )}

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
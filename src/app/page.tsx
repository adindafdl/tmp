import Image from 'next/image';
import Link from 'next/link';
import { getZiarahSummary } from '../../lib/queries/public-data';

export default async function HomePage() {
  let ziarah = { tamuUmum30d: 0, rombongan30d: 0 };
  try {
    ziarah = await getZiarahSummary();
  } catch {
    /* tampilkan fallback jika DB belum siap */
  }

  const totalKunjungan = ziarah.tamuUmum30d + ziarah.rombongan30d;

  return (
    <div className="bg-white">
      <section className="relative min-h-[380px] overflow-hidden sm:min-h-[440px]">
        <Image
          src="/img/bg-image.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/75 to-white"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-14 pt-16 sm:pt-20">
          <h1 className="max-w-3xl text-2xl font-bold leading-tight text-zinc-900 sm:text-3xl md:text-4xl">
            Selamat Datang di Taman Makam Pahlawan Kusuma Bhakti
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-700 sm:text-base">
            Situs ini menyediakan informasi untuk masyarakat umum mengenai sejarah,
            lokasi makam pahlawan, petunjuk ziarah, dan tata tertib di area TMP
            Kusuma Bhakti. Mari jaga kehormatan dan ketenangan tempat peristirahatan
            para pahlawan bangsa.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/daftar-makam"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#b91c1c] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#991b1b]"
            >
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
              Cari Makam
            </Link>
            <Link
              href="/peta-tmp"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#b91c1c] bg-white px-5 py-3 text-sm font-semibold text-[#b91c1c] shadow-sm transition hover:bg-zinc-50"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 .553-.894L9 2l6 3 5.447-2.724A1 1 0 0 1 22 3.382v10.764a1 1 0 0 1-.553.894L15 20l-6-3z" />
              </svg>
              Lihat Peta TMP
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-zinc-200/80">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fef2f2] text-[#b91c1c]">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 2h12v2H6V2zm0 4h12v16H6V6zm2 2v12h8V8H8zm2 2h4v2h-4v-2zm0 4h4v2h-4v-2z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-zinc-900">Sejarah TMP</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Mengenal latar belakang dan makna Taman Makam Pahlawan Kusuma Bhakti
              sebagai monumen kebangsaan.
            </p>
            <Link
              href="/sejarah"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#b91c1c] hover:underline"
            >
              Selengkapnya <span aria-hidden>→</span>
            </Link>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-zinc-200/80">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecfdf3] text-[#14532d]">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-zinc-900">Info Ziarah</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Ringkasan kunjungan (30 hari terakhir):{' '}
              <strong>{totalKunjungan}</strong> entri tamu terdaftar di sistem
              ({ziarah.tamuUmum30d} umum, {ziarah.rombongan30d} rombongan). Lihat
              prosedur dan tata tertib sebelum berkunjung.
            </p>
            <Link
              href="/prosedur"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#14532d] hover:underline"
            >
              Selengkapnya <span aria-hidden>→</span>
            </Link>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-zinc-200/80">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fef2f2] text-[#b91c1c]">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 3h6v2H9V3zm0 4h6v2H9V7zm-4 4h14v10H5V11zm2 2v6h10v-6H7z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-zinc-900">
              Prosedur &amp; Tata Tertib
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Tata cara ziarah dan peraturan di area TMP agar kegiatan berjalan
              tertib dan hormat.
            </p>
            <Link
              href="/prosedur"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#b91c1c] hover:underline"
            >
              Selengkapnya <span aria-hidden>→</span>
            </Link>
          </article>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ecfdf3] text-[#14532d]">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
              </svg>
            </span>
            <div>
              <h2 className="text-lg font-bold text-zinc-900">Lokasi TMP</h2>
              <p className="mt-1 max-w-2xl text-sm text-zinc-600">
                Taman Makam Pahlawan Kusuma Bhakti — gunakan peta di bawah untuk
                petunjuk arah. Pastikan berpakaian sopan dan menjaga ketenangan
                saat berada di area pemakaman.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-zinc-200 shadow-md">
            <iframe
              title="Peta Taman Makam Pahlawan Kusuma Bhakti"
              src="https://www.google.com/maps?q=Taman+Makam+Pahlawan+Kusuma+Bhakti&output=embed"
              className="h-64 w-full border-0 sm:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

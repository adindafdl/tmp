import Image from 'next/image';
import Link from 'next/link';
import { getTamuUmumPage } from '../../lib/queries/public-data';

export default async function HomePage() {
  let totalKunjungan = 0;
  try {
    // Ambil total entri agar kartu ini nyambung ke halaman `daftar-kunjungan`.
    const res = await getTamuUmumPage({ page: 1, search: "" });
    totalKunjungan = res.total;
  } catch {
    /* tampilkan fallback jika DB belum siap */
  }

  return (
    <div>
      <section className="relative min-h-[320px] overflow-hidden sm:min-h-[380px]">
        <Image
          src="/img/bg-image.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-white/25 via-white/75 to-white"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-4 pb-8 pt-14 sm:px-6 sm:pt-16 lg:px-8">
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
            <div className="flex flex-col gap-4">
              <h1 className="max-w-3xl text-2xl font-bold leading-[1.15] text-zinc-900 sm:text-3xl md:text-4xl">
                <span className="mb-1 block italic">Selamat Datang</span>
                <span className="block">di Taman Makam Pahlawan Kusuma Bhakti</span>
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-700 sm:text-base">
                Situs ini menyediakan informasi untuk masyarakat umum mengenai sejarah,
                lokasi makam pahlawan, petunjuk ziarah, dan tata tertib di area TMP
                Kusuma Bhakti. Mari jaga kehormatan dan ketenangan tempat
                peristirahatan para pahlawan bangsa.
              </p>
            </div>
            <div className="tmp-card relative hidden h-56 overflow-hidden lg:block xl:h-64">
              <Image
                src="/img/bg-image.jpg"
                alt="Monumen Taman Makam Pahlawan Kusuma Bhakti"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 420px, 360px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-2xl px-4 pb-12 pt-6 sm:px-6 sm:pt-7 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article className="tmp-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecfdf3] text-[#14532d]">
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
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#14532d] hover:underline focus-visible:outline-none focus-visible:ring-0"
            >
              Selengkapnya <span aria-hidden>→</span>
            </Link>
          </article>

          <article className="tmp-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecfdf3] text-[#14532d]">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-zinc-900">Daftar Kunjungan</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Ringkasan kunjungan: <strong>{totalKunjungan}</strong> entri tamu terdaftar di sistem.
            </p>
            <Link
              href="/daftar-kunjungan"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#14532d] hover:underline focus-visible:outline-none focus-visible:ring-0"
            >
              Lihat Daftar Kunjungan <span aria-hidden>→</span>
            </Link>
          </article>

          <article className="tmp-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecfdf3] text-[#14532d]">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3 5 7v3h2v9h10v-9h2V7l-7-4Zm0 2.2L16.5 8V18h-9V8L12 5.2Z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-zinc-900">Daftar Makam</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Telusuri data makam per blok untuk menemukan lokasi pahlawan secara
              lebih cepat.
            </p>
            <Link
              href="/daftar-makam"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#14532d] hover:underline focus-visible:outline-none focus-visible:ring-0"
            >
              Lihat Daftar Makam <span aria-hidden>→</span>
            </Link>
          </article>

          <article className="tmp-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecfdf3] text-[#14532d]">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 3h6v2H9V3zm0 4h6v2H9V7zm-4 4h14v10H5V11zm2 2v6h10v-6H7z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-zinc-900">
              Jenis Layanan &amp; Tata Tertib
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Tata cara ziarah dan peraturan di area TMP agar kegiatan berjalan
              tertib dan hormat.
            </p>
            <Link
              href="/prosedur"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#14532d] hover:underline focus-visible:outline-none focus-visible:ring-0"
            >
              Selengkapnya <span aria-hidden>→</span>
            </Link>
          </article>
        </div>
      </section>

      <section className="tmp-surface border-t border-zinc-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-screen-2xl">
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

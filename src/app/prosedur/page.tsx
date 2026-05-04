export default function ProsedurPage() {
  const langkah = [
    {
      judul: 'Kedatangan',
      teks: 'Datang pada jam kunjung yang wajar, parkir kendaraan di area yang diizinkan, dan mendekati pos informasi jika membutuhkan bantuan petugas.',
    },
    {
      judul: 'Pencatatan tamu',
      teks: 'Isi buku tamu atau laporkan kunjungan sesuai ketentuan pengelola agar arsip ziarah tetap lengkap dan tertib.',
    },
    {
      judul: 'Ziarah dan doa',
      teks: 'Berziarah dengan tenang, lakukan doa atau penghormatan singkat tanpa mengganggu pengunjung lain.',
    },
    {
      judul: 'Keberangkatan',
      teks: 'Pastikan tidak ada sampah yang tertinggal, keluar melalui jalan yang ditentukan, dan menjaga sopan santun hingga meninggalkan area TMP.',
    },
  ];

  const tataTertib = [
    'Berpakaian sopan dan rapi sesuai suasana pemakaman pahlawan.',
    'Menjaga ketenangan; hindari keributan, musik keras, atau perilaku tidak hormat.',
    'Dilarang merusak fasilitas, merusak tanaman, atau mengganggu tata letak makam.',
    'Buang sampah pada tempatnya; bawa pulang sampah jika tempat pembuangan penuh.',
    'Patuhi arahan petugas dan rambu yang berlaku di area TMP.',
    'Dokumentasi foto atau video hanya dilakukan dengan izin dan tidak mengganggu ziarah lain.',
  ];

  return (
    <div className="bg-white px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          Prosedur Ziarah &amp; Tata Tertib
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600">
          Panduan ringkas bagi pengunjung umum agar kegiatan ziarah berjalan tertib dan
          menghormati makam pahlawan.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <section aria-labelledby="prosedur-heading">
            <h2
              id="prosedur-heading"
              className="text-lg font-bold text-[#b91c1c]"
            >
              Prosedur Ziarah
            </h2>
            <ol className="mt-6 space-y-5">
              {langkah.map((item, i) => (
                <li key={item.judul} className="flex gap-4">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#b91c1c] text-sm font-bold text-white"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-zinc-900">{item.judul}</p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                      {item.teks}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <div
            className="hidden justify-center lg:flex"
            aria-hidden
          >
            <div className="rounded-2xl bg-zinc-100 p-8 ring-1 ring-zinc-200">
              <svg
                className="h-40 w-40 text-[#b91c1c]/80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2 4 7v3h2v9h10v-9h2V7l-8-5Zm0 2.2L16.5 8V18h-9V8L12 5.2Z" />
              </svg>
            </div>
          </div>
        </div>

        <section
          className="mt-14 border-t border-zinc-200 pt-12"
          aria-labelledby="tata-heading"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2
                id="tata-heading"
                className="text-lg font-bold text-[#14532d]"
              >
                Tata Tertib
              </h2>
              <ul className="mt-6 space-y-4">
                {tataTertib.map((rule) => (
                  <li key={rule} className="flex gap-3 text-sm leading-relaxed text-zinc-700">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#ecfdf3] text-[#14532d]"
                      aria-hidden
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                      </svg>
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="hidden justify-center lg:flex"
              aria-hidden
            >
              <div className="flex items-end gap-4 rounded-2xl bg-zinc-100 p-8 ring-1 ring-zinc-200">
                <svg
                  className="h-24 w-24 text-[#14532d]/90"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3 5 7v3h2v9h10v-9h2V7l-7-4Z" />
                </svg>
                <svg
                  className="h-20 w-20 text-[#b91c1c]/70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 2h12v2H6V2zm0 4h12v16H6V6zm2 2v12h8V8H8z" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

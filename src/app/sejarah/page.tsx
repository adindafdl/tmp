import { BackToHome } from '@/components/back-to-home';

export default function SejarahPage() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-screen-2xl">
        <BackToHome className="mb-8" />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start xl:grid-cols-[minmax(0,1fr)_420px]">
          <div className="tmp-surface rounded-2xl border border-zinc-200 p-5 shadow-sm sm:p-7">
            <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
              Sejarah TMP Kusuma Bhakti
            </h1>
            <div className="text-justify space-y-4 text-gray-700">
              <div className="prose prose-zinc mt-6 max-w-none space-y-4 text-sm leading-relaxed text-zinc-700 sm:text-base">
                <p>
                  Taman Makam Pahlawan (TMP) Kusuma Bhakti didirikan sebagai wujud penghormatan negara kepada para pahlawan yang telah berjuang mempertahankan kedaulatan dan keutuhan bangsa. Area ini bukan hanya tempat peringatan, tetapi juga menjadi sumber inspirasi bagi generasi muda. Secara arsitektur, TMP Kusuma Bhakti memiliki gerbang utama yang megah, monumen pahlawan sebagai pusat penghormatan, serta blok-blok makam yang tertata rapi berdasarkan kategori kesatuan maupun waktu gugurnya.
                </p>
                <p>
                  Di dalam kompleks TMP, tersusun ratusan makam yang merepresentasikan perjalanan sejarah perjuangan bangsa. Setiap blok dan petak dirancang dengan memperhatikan kerapian tata ruang serta suasana khidmat, agar para pengunjung dapat berziarah dengan tenang dan penuh hormat.
                </p>
                <p>
                  Pengelolaan informasi makam melalui sistem digital di situs ini bertujuan untuk membantu keluarga dan masyarakat dalam mencari lokasi peristirahatan terakhir para pahlawan, sekaligus menyebarluaskan nilai-nilai kepahlawanan kepada publik.
                </p>

                <h2 className="mt-6 text-base font-semibold text-zinc-900">Profil Umum dan Lokasi</h2>
                <p>
                  Taman Makam Pahlawan (TMP) Kusuma Bhakti merupakan tempat persemayaman terakhir para pejuang bangsa yang berlokasi di Kota Surakarta, Provinsi Jawa Tengah. Sebagai salah satu TMP di Indonesia, kawasan ini berfungsi sebagai monumen penghormatan negara atas jasa-jasa para pahlawan yang telah gugur demi kedaulatan NKRI.
                </p>

                <h2 className="mt-6 text-base font-semibold text-zinc-900">Statistik Makam Berdasarkan Kategori</h2>
                <p>Berdasarkan data terbaru, berikut rincian jumlah makam di area TMP Kusuma Bhakti:</p>
                
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    <strong>Berdasarkan Status Pahlawan:</strong>
                    <ul className="list-none ml-4">
                      <li>Pejuang: 260 makam</li>
                      <li>Tokoh Nasional/Daerah: 15 makam</li>
                      <li>Pahlawan Tidak Dikenal: 12 makam</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Berdasarkan Profesi (Militer &amp; Sipil):</strong>
                    <ul className="list-none ml-4">
                      <li>TNI AD: 1.052 makam</li>
                      <li>TNI AL: 21 makam</li>
                      <li>TNI AU: 42 makam</li>
                      <li>Polri: 58 makam</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Berdasarkan Jenis Kelamin:</strong>
                    <ul className="list-none ml-4">
                      <li>Laki-laki: 1.455 makam</li>
                      <li>Perempuan: 5 makam</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Berdasarkan Agama:</strong>
                    <ul className="list-none ml-4">
                      <li>Islam: 1.341 makam</li>
                      <li>Kristen &amp; Katolik: 117 makam</li>
                      <li>Buddha: 2 makam</li>
                      <li>Hindu: 0 makam</li>
                    </ul>
                  </li>
                </ul>

                <p>
                  TMP Kusuma Bhakti bukan sekadar angka statistik, melainkan simbol keberagaman perjuangan bangsa. Keberadaan makam Pahlawan Tidak Dikenal mengingatkan kita akan pengorbanan tanpa pamrih para pejuang yang gugur di medan laga tanpa sempat teridentifikasi.
                </p>
                <p>
                  Dominasi jumlah makam dari unsur TNI AD berkaitan erat dengan sejarah Surakarta sebagai salah satu basis pertahanan serta wilayah pertempuran penting semasa Revolusi Fisik, termasuk dalam peristiwa Serangan Umum Surakarta. Hadirnya pahlawan perempuan maupun pahlawan dari berbagai agama turut menunjukkan bahwa kemerdekaan Indonesia merupakan hasil kerja keras bersama seluruh komponen bangsa tanpa memandang perbedaan.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[#14532d]">
              Galeri TMP
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="tmp-card relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/img/bg-image.jpg')" }}
                />
                <div className="absolute inset-0 bg-black/25" />
                <p className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-800">
                  Monumen utama TMP
                </p>
              </div>
              <div className="tmp-card relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/img/front.jpeg')" }}
                />
                <div className="absolute inset-0 bg-black/35" />
                <p className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-800">
                  Area depan TMP
                </p>
              </div>
              <div className="tmp-card relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/img/makam.jpeg')" }}
                />
                <div className="absolute inset-0 bg-black/30" />
                <p className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-800">
                  Area Ziarah Pahlawan
                </p>
              </div>
              <div className="tmp-card relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/img/sr.jpeg')" }}
                />
                <div className="absolute inset-0 bg-black/30" />
                <p className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-800">
                  Gumpalan Tanah Brid. Jend. Slamet Riyadi.CS
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
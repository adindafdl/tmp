import { BackToHome } from '@/components/back-to-home';

export default function SejarahPage() {
  return (
    <div className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-screen-2xl">
        <BackToHome className="mb-8" />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start xl:grid-cols-[minmax(0,1fr)_420px]">
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
              Sejarah TMP Kusuma Bhakti
            </h1>
            <div className="text-justify space-y-4 text-gray-700">
              <div className="prose prose-zinc mt-8 max-w-none space-y-4 text-sm leading-relaxed text-zinc-700 sm:text-base">
                <p>
                  Taman Makam Pahlawan (TMP) Kusuma Bhakti didirikan sebagai wujud penghormatan
                  negara kepada para pahlawan yang telah berjuang mempertahankan kedaulatan dan
                  keutuhan bangsa. Area ini menjadi ruang peringatan sekaligus sumber inspirasi
                  bagi generasi muda. Secara arsitektur, TMP ini memiliki gerbang utama yang
                  megah, monumen pahlawan sebagai titik pusat penghormatan, dan blok makam yang
                  tertata berdasarkan kategori kesatuan atau waktu gugurnya.
                </p>
                <p>
                  Di dalam kompleks TMP, tersusun makam-makam yang menggambarkan perjalanan
                  sejarah perjuangan bangsa. Setiap blok dan petak dirancang untuk menjaga tata
                  ruang yang rapi serta suasana yang khidmat, sehingga pengunjung dapat berziarah
                  dengan tenang dan penuh hormat.
                </p>
                <p>
                  Pengelolaan informasi makam melalui sistem digital ini bertujuan membantu
                  keluarga dan masyarakat menemukan lokasi peristirahatan terakhir para pahlawan,
                  sekaligus menyebarkan nilai-nilai kepahlawanan kepada khalayak luas.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[#14532d]">
              Galeri TMP
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="relative h-44 overflow-hidden rounded-2xl shadow-md ring-1 ring-zinc-200">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/img/bg-image.jpg')" }}
                />
                <div className="absolute inset-0 bg-black/25" />
                <p className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-800">
                  Monumen utama TMP
                </p>
              </div>
              <div className="relative h-44 overflow-hidden rounded-2xl shadow-md ring-1 ring-zinc-200">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/img/bg-image.jpg')" }}
                />
                <div className="absolute inset-0 bg-black/35" />
                <p className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-800">
                  Area ziarah pahlawan
                </p>
              </div>
              <div className="relative h-44 overflow-hidden rounded-2xl shadow-md ring-1 ring-zinc-200">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/img/bg-image.jpg')" }}
                />
                <div className="absolute inset-0 bg-black/30" />
                <p className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-800">
                  Suasana lingkungan TMP
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

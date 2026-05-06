import { BackToHome } from '@/components/back-to-home';

export default function PelayananPage() {
  const prosedurPemakaman = [
    {
      kategori: "Untuk Anggota TNI/POLRI/Purnawirawan:",
      detail: "Anggota TNI/POLRI/Purnawirawan yang gugur atau meninggal dunia di tempat yang tidak ada Garnisun, permintaan pemakaman ditujukan kepada Komandan Satuan Teritorial setempat. Sedangkan daerah yang memiliki Garnisun, permohonan ditujukan kepada komandan Garnisun."
    },
    {
      kategori: "Untuk Warga Sipil:",
      detail: "Anggota keluarga yang mengajukan permohonan pemakaman kepada Instansi Sosial, kemudian Instansi Sosial melakukan koordinasi dengan Garnisun/Satuan Teritorial untuk melaksanakan upacara pemakaman."
    }
  ];

  const ziarahPerorangan = [
    'Peziarah melapor kepada petugas TMP Kusuma Bhakti Jurug.',
    'Mengisi buku tamu.',
    'Memberikan penghormatan di pintu gerbang dengan menghadap Monumen pada saat hendak memasuki maupun meninggalkan TMP Kusuma Bhakti.',
    'Menuju makam tujuan ziarah.',
  ];

  const ziarahKelompokUmum = [
    'Pimpinan kelompok/rombongan menyampaikan maksudnya secara tertulis selambat-lambatnya 1 (satu) minggu sebelum ziarah dilaksanakan.',
    'Permohonan disampaikan kepada Dinas Sosial Kota Surakarta Jl. Slamet Riyadi 368 Surakarta.',
  ];

  const jenisMacamZiarah = [
    { kode: 'a', judul: 'Ziarah Nasional', teks: 'Adalah ziarah yang secara umum diikuti oleh segenap golongan dan dilaksanakan dalam rangka Peringatan Hari Pahlawan 10 November yang penyelenggaraannya dikoordinasikan oleh Panitia.' },
    { kode: 'b', judul: 'Ziarah Khusus', teks: 'Adalah ziarah yang diselenggarakan dalam rangka kunjungan Tamu Negara yang dilaksanakan pada saat ada Tamu Negara.' },
    { kode: 'c', judul: 'Apel Kehormatan dan Renungan Suci (AKRS)', teks: 'AKRS dilaksanakan malam hari pukul 00.00 WIB yang diselenggarakan untuk memperingati Proklamasi Kemerdekaan Republik Indonesia. Pelaksanaannya diselenggarakan oleh panitia.' },
  ];

  return (
    <div className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-screen-2xl">
        <BackToHome className="mb-8" />
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-zinc-900">Jenis Pelayanan & Tata Tertib</h1>
          <p className="mt-2 text-zinc-600 text-justify">
            Informasi lengkap mengenai layanan pemakaman, ziarah, studi, dan tata tertib pelaksanaan kunjungan di TMP Kusuma Bhakti Jurug Surakarta.
          </p>
        </header>

        {/* ── A. PEMAKAMAN ── */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-red-700 border-b-2 border-red-700 pb-2 uppercase italic">
            A. Pemakaman
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-bold text-zinc-800 mb-3">1. Prosedur Pemakaman</h3>
              <ul className="space-y-4">
                {prosedurPemakaman.map((item, i) => (
                  <li key={i} className="text-sm text-zinc-700 text-justify leading-relaxed">
                    <span className="font-bold block mb-1">• {item.kategori}</span>
                    <span className="pl-4 block">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-zinc-800 mb-3">2. Pelaksanaan Pemakaman</h3>
              <ul className="space-y-2 text-sm text-zinc-700 text-justify list-disc pl-5">
                <li>Teknik pelaksanaan Upacara pemakaman di bawah koordinasi dan tanggung jawab Garnisun/Satuan Teritorial setempat.</li>
                <li>Dukungan sarana pemakaman dan tenaga pemakaman di bawah koordinasi dan tanggung jawab Instansi Sosial.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── B. PELAYANAN ZIARAH ── */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-800 pb-2 uppercase italic">
            B. Pelayanan Ziarah
          </h2>
          <p className="mt-4 text-sm text-zinc-700 italic">TMP Kusuma Bhakti Jurug terbuka bagi masyarakat umum.</p>
          
          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
              <h3 className="font-bold text-white bg-green-700 px-4 py-2 rounded-lg inline-block mb-4">
                1. Ziarah Perorangan
              </h3>
              <p className="text-sm text-zinc-700 text-justify mb-4 leading-relaxed">
                Adalah ziarah oleh keluarga dan anggota masyarakat yang dilaksanakan pada pukul <strong>06.00 s/d 18.00 WIB</strong>.
              </p>
              <ol className="space-y-3">
                {ziarahPerorangan.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-700 text-justify">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-700 text-white text-[10px] font-bold mt-0.5">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
              <h3 className="font-bold text-white bg-red-800 px-4 py-2 rounded-lg inline-block mb-4">
                2. Ziarah Kelompok atau Rombongan
              </h3>
              <p className="text-sm text-zinc-700 text-justify mb-4 leading-relaxed">
                Ziarah yang dilakukan oleh kelompok atau rombongan yang dipimpin oleh seorang pemimpin pada waktu yang telah ditentukan, dapat dilakukan dengan atau tanpa Upacara Militer.
              </p>
              
              <div className="space-y-6">
                <div className="p-4 bg-white rounded-lg border border-zinc-200">
                  <h4 className="font-bold text-xs text-red-800 mb-2 uppercase tracking-wide">Prosedur dengan Upacara Militer:</h4>
                  <ul className="space-y-2">
                    {ziarahKelompokUmum.map((item, i) => (
                      <li key={i} className="text-xs text-zinc-600 text-justify flex gap-2">
                        <span className="text-red-800 font-bold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-lg border border-zinc-200">
                  <h4 className="font-bold text-xs text-red-800 mb-2 uppercase tracking-wide">Prosedur tanpa Upacara Militer:</h4>
                  <ul className="space-y-2">
                    {ziarahKelompokUmum.map((item, i) => (
                      <li key={i} className="text-xs text-zinc-600 text-justify flex gap-2">
                        <span className="text-red-800 font-bold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Judul Macam Ziarah */}
          <div className="mt-12">
            <h3 className="text-lg font-bold text-zinc-800 mb-6">Macam-macam Ziarah Kelompok:</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {jenisMacamZiarah.map((item) => (
                <div key={item.kode} className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
                  <h4 className="font-bold text-sm text-zinc-800 mb-2">{item.kode.toUpperCase()}. {item.judul}</h4>
                  <p className="text-xs text-zinc-600 text-justify leading-relaxed">{item.teks}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── C. PELAYANAN STUDI ── */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2 uppercase italic">
            C. Pelayanan Studi
          </h2>
          <div className="mt-6 p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm relative overflow-hidden">
            <p className="text-sm text-zinc-800 text-justify leading-relaxed mb-10 italic font-medium">
              &quot;Disamping pemberian pelayanan pemakaman dan ziarah, maka TMP dalam hal tertentu dapat digunakan sebagai lembaga pelayanan studi&quot;.
            </p>
            
            <div className="grid gap-10 md:grid-cols-3">
              <div className="flex items-start gap-4">
                <div className="w-10 h-8 bg-blue-900 text-white flex items-center justify-center rounded-lg font-bold shrink-0">1</div>
                <p className="text-xs text-zinc-700 text-justify leading-relaxed">
                  Jenis pelayanan meliputi penyediaan data dan informasi tentang Nilai Kepahlawanan dari yang dimakamkan, penelitian, temu ilmiah, dan lain-lain.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-8 bg-blue-900 text-white flex items-center justify-center rounded-lg font-bold shrink-0">2</div>
                <p className="text-xs text-zinc-700 text-justify leading-relaxed">
                  Kegiatan studi perorangan maupun kelompok/rombongan memerlukan izin/perjanjian yang dilakukan melalui Dinas Sosial.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-8 bg-blue-900 text-white flex items-center justify-center rounded-lg font-bold shrink-0">3</div>
                <p className="text-xs text-zinc-700 text-justify leading-relaxed">
                  Kelengkapan fasilitas studi mencakup ketersediaan data informasi, perpustakaan, hingga balai pelestarian.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── TATA TERTIB ── */}
        <section className="mt-16 pt-10 border-t border-zinc-200">
           <div className="bg-zinc-900 text-white p-4 rounded-t-xl text-center">
              <h2 className="text-lg font-bold uppercase tracking-widest">Tata Tertib Pelaksanaan Ziarah</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-0 border-x border-b border-zinc-200 rounded-b-xl overflow-hidden">
              <div className="p-6 border-r border-zinc-100">
                <h5 className="font-bold text-green-700 mb-4 border-b pb-2 uppercase text-xs">A. Peziarah Wajib:</h5>
                <ul className="text-xs space-y-3 text-zinc-700">
                  <li className="flex gap-2 text-[15px]"><span>1.</span> <span className="text-[15px] text-justify">Berpakaian rapi dan bersikap sopan.</span></li>
                  <li className="flex gap-2 text-[15px]"><span>2.</span> <span className="text-[15px] text-justify">Menaati semua ketentuan yang berlaku.</span></li>
                </ul>
              </div>
              <div className="p-6 border-r border-zinc-100 bg-zinc-50/50">
                <h5 className="font-bold text-red-700 mb-4 border-b pb-2 uppercase text-xs">B. Peziarah Dilarang:</h5>
                <ul className="text-[15px] space-y-2 text-zinc-700 list-decimal pl-4">
                  <li className="text-justify">Menimbulkan kegaduhan.</li>
                  <li className="text-justify">Mengucapkan ikrar-ikrar atau pidato.</li>
                  <li className="text-justify">Membawa bendera nasional.</li>
                  <li className="text-justify">Membawa poster, selendang, atau bendera organisasi.</li>
                  <li className="text-justify">Menginjak kijing dan nisan makam.</li>
                  <li className="text-justify">Membuang sampah sembarangan.</li>
                  <li className="text-justify">Mengambil gambar atau video tanpa izin.</li>
                  <li className="text-justify">Makan, minum, dan merokok di area makam.</li>
                  <li className="text-justify">Memakai kacamata hitam di area makam.</li>
                  <li className="text-justify">Kegiatan yang bertentangan dengan norma yang berlaku.</li>
                </ul>
              </div>
              <div className="p-6">
                <h5 className="font-bold text-orange-800 mb-4 border-b pb-2 uppercase text-xs">C. Larangan di Makam:</h5>
                <ul className="text-[15px] space-y-2 text-zinc-700 list-decimal pl-4">
                  <li className="text-justify">Menambah atau mengubah kijing/nisan makam.</li>
                  <li className="text-justify">Menambah batu nisan atau tulisan dengan lambang tertentu.</li>
                  <li className="text-justify">Menaburkan bunga kecuali di atas batu granit.</li>
                  <li className="text-justify">Meletakkan vas, pot, kendi, atau benda lain di atas makam.</li>
                </ul>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
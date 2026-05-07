import Link from 'next/link';
import { BackToHome } from '@/components/back-to-home';

export default function PetaTmpPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-screen-2xl">
        <BackToHome className="mb-6" />
        <h1 className="text-2xl font-bold text-zinc-900">Peta TMP</h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600">
          Lokasi Taman Makam Pahlawan Kusuma Bhakti pada peta. Anda juga dapat melihat
          daftar makam per blok di halaman{' '}
          <Link href="/daftar-makam" className="font-semibold text-[#14532d] underline">
            Daftar Makam
          </Link>
          .
        </p>
        <div className="tmp-surface mt-8 overflow-hidden rounded-2xl shadow-lg ring-1 ring-zinc-200">
          <iframe
            title="Peta Taman Makam Pahlawan Kusuma Bhakti"
            src="https://www.google.com/maps?q=Taman+Makam+Pahlawan+Kusuma+Bhakti&output=embed"
            className="h-[min(70vh,520px)] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

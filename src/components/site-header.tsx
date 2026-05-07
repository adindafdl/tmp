import Link from 'next/link';
import { SiteNav } from '@/components/site-nav';

function LogoMark() {
  return (
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/25"
      aria-hidden
    >
      <svg
        className="h-6 w-6 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 3 4 8v2h2v9h4v-6h4v6h4v-9h2V8l-8-5Zm0 2.2 5.5 3.4V18h-1v-6H7.5v6h-1v-9.4L12 5.2Z" />
      </svg>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-20 rounded-b-[1.75rem] bg-[#14532d] text-white shadow-lg">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 px-4 pb-6 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 rounded-2xl bg-[#166534]/90 px-3 py-2 pr-4 ring-1 ring-white/10 transition hover:bg-[#166534]"
        >
          {/* Langsung gambar logo, tanpa background putih */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/tmp.png"
            alt="Logo TMP Kusuma Bhakti"
            className="h-11 w-11 object-contain"
          />
          <div className="min-w-0 leading-tight">
            <p className="text-sm font-bold sm:text-base">
              Taman Makam Pahlawan Kusuma Bhakti
            </p>
          </div>
    
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}

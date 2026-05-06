import Link from 'next/link';

export function BackToHome({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 rounded-full border border-[#14532d]/25 bg-white px-4 py-2 text-sm font-semibold text-[#14532d] shadow-sm transition hover:-translate-y-0.5 hover:border-[#14532d] hover:bg-[#ecfdf3] hover:shadow-md focus-visible:outline-none focus-visible:ring-0 ${className}`}
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#14532d] text-white transition group-hover:bg-[#166534]">
        <svg
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M15 18 9 12l6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      Kembali ke Beranda
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/sejarah', label: 'Sejarah' },
  { href: '/daftar-kunjungan', label: 'Daftar Kunjungan' },
  { href: '/daftar-makam', label: 'Daftar Makam' },
  { href: '/peta-tmp', label: 'Peta TMP' },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-white/95"
      aria-label="Navigasi utama"
    >
      {links.map(({ href, label }) => {
        const active = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className={
              active
                ? 'rounded-full bg-white/20 px-2.5 py-1 text-white focus-visible:outline-none focus-visible:ring-0'
                : 'rounded-full px-2.5 py-1 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-0'
            }
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

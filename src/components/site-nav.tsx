'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Beranda' },
  { href: '/sejarah', label: 'Sejarah' },
  { href: '/daftar-makam', label: 'Daftar Makam' },
  { href: '/peta-tmp', label: 'Peta TMP' },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-white/95"
      aria-label="Navigasi utama"
    >
      {links.map(({ href, label }) => {
        const active =
          href === '/'
            ? pathname === '/'
            : pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className={
              active
                ? 'rounded-full bg-white/20 px-3 py-1 text-white'
                : 'rounded-full px-3 py-1 hover:bg-white/10'
            }
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

import type { ReactNode } from 'react';

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/20"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-auto">
      <div
        className="relative h-6 w-full overflow-hidden bg-[#f4f4f5]"
        aria-hidden
      >
        <svg
          className="absolute bottom-0 left-0 h-8 w-full text-[#14532d]"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0 24c240 20 480-20 720 0s480 20 720 0v24H0V24z"
          />
        </svg>
      </div>
      <div className="bg-[#14532d] px-4 pb-10 pt-6 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
          <h1 className="font-normal text-white">
            <span className="mb-1 block text-lg italic leading-[0.2]">
              Part of Dinas Sosial Kota Surakarta</span>
            <span className="block text-sm font-normal leading-[2]">
              Ikuti Kami di Sosial Media</span>
          </h1>
            <div className="flex flex-wrap gap-3">
              <SocialIcon href="https://www.instagram.com/dinsos_surakarta" label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://wa.me/08112811919" label="WhatsApp">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.93 11.93 0 0 0 12.03 0C5.42 0 .03 5.39.03 12a11.9 11.9 0 0 0 1.63 6.03L0 24l6.17-1.62a11.95 11.95 0 0 0 5.86 1.5h.01C18.64 23.88 24 18.49 24 11.88a11.9 11.9 0 0 0-3.48-8.4zM12.04 21.85h-.01a9.9 9.9 0 0 1-5.03-1.37l-.36-.22-3.66.96.98-3.57-.24-.37a9.87 9.87 0 0 1-1.51-5.28C2.21 6.56 6.6 2.17 12.03 2.17c2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.88 6.95c0 5.43-4.4 9.84-9.83 9.84zm5.4-7.38c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.66.08-.3-.15-1.26-.46-2.4-1.48a8.93 8.93 0 0 1-1.67-2.08c-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.52s1.08 2.93 1.23 3.13c.15.2 2.12 3.25 5.13 4.55.72.3 1.28.49 1.72.62.72.23 1.38.2 1.9.12.58-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.tiktok.com/@dinsos.surakarta" label="TikTok">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v9.4a2.592 2.592 0 0 1-2.59 2.5 2.506 2.506 0 0 1-2.5-2.5A2.513 2.513 0 0 1 9.96 9.63a2.43 2.43 0 0 1 .72.11V6.79a5.226 5.226 0 0 0-.72-.04 5.006 5.006 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5l-.01-5.65a7.203 7.203 0 0 0 4.65 1.82V5.47a4.319 4.319 0 0 1-1.04-.65z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://youtube.com/@dinassosialkotasurakarta6171?si=hqgKRfGZq4aWeImx" label="YouTube">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.2.82.27 2.05.27 2.83 0 .78-.07 2.01-.27 2.83-.15.62-.55 1.13-1.11 1.45C18.86 15 12 15 12 15s-6.86 0-8.44-.55c-.56-.32-.96-.83-1.11-1.45C2.15 12.01 2.08 10.78 2.08 10c0-.78.07-2.01.27-2.83.15-.62.55-1.13 1.11-1.45C5.14 5 12 5 12 5s6.86 0 8.44.55c.56.32.96.83 1.11 1.45z" />
                </svg>
              </SocialIcon>
            </div>
            <p className="mt-6 text-xs text-white/70">
              © {new Date().getFullYear()} TMP Kusuma Bhakti. Hak cipta dilindungi
              undang-undang.
            </p> 
          </div>
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center self-end rounded-full bg-white/10 ring-2 ring-white/25 sm:self-start"
            aria-hidden
          >
            <svg
              className="h-10 w-10 text-white/90"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2 4 7v10l8 5 8-5V7l-8-5Zm0 2.18 6 3.75v7.87l-6 3.75-6-3.75V7.93l6-3.75Z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

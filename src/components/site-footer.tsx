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
            <p className="mb-3 text-sm font-semibold text-white/90">
              Ikuti kami
            </p>
            <div className="flex flex-wrap gap-3">
              <SocialIcon href="#" label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="TikTok">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v9.4a2.592 2.592 0 0 1-2.59 2.5 2.506 2.506 0 0 1-2.5-2.5A2.513 2.513 0 0 1 9.96 9.63a2.43 2.43 0 0 1 .72.11V6.79a5.226 5.226 0 0 0-.72-.04 5.006 5.006 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5l-.01-5.65a7.203 7.203 0 0 0 4.65 1.82V5.47a4.319 4.319 0 0 1-1.04-.65z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" label="YouTube">
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

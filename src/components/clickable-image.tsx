'use client';

import { useEffect, useId, useState } from 'react';

export function ClickableImage({
  src,
  alt,
  wrapperClassName = '',
}: {
  src: string;
  alt: string;
  wrapperClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex cursor-zoom-in rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14532d]/40"
        aria-label={`Lihat ${alt}`}
      >
        <span
          className={`block overflow-hidden rounded-lg ring-1 ring-zinc-200 ${wrapperClassName}`}
        >
          <img
            src={src}
            alt={alt}
            className="block h-full w-full object-cover transition group-hover:scale-[1.02]"
            loading="lazy"
          />
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-zinc-200">
            <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3">
              <p id={titleId} className="text-sm font-semibold text-zinc-900">
                Foto Kunjungan
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-1 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14532d]/40"
                aria-label="Tutup"
              >
                ✕
              </button>
            </div>

            <div className="bg-zinc-950/5 p-4 sm:p-6">
              <img
                src={src}
                alt={alt}
                className="mx-auto max-h-[75vh] w-auto max-w-full rounded-xl object-contain ring-1 ring-zinc-200"
              />
            </div>

            <div className="flex items-center justify-between border-t border-zinc-200 px-4 py-3">
              <p className="text-xs text-zinc-500">Klik area luar untuk menutup</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="tmp-btn rounded-xl bg-[#14532d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#166534] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14532d]/40"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


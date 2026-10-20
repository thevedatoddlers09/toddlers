'use client';

import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { albums } from '../../lib/galleryData';

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const overlayRef = useRef(null);
  const imageWrapRef = useRef(null);
  const touchStartX = useRef(null);
  const item = items[index];

  const goPrev = useCallback(() => {
    if (!items.length) return;
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  const goNext = useCallback(() => {
    if (!items.length) return;
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, goPrev, goNext]);

  useEffect(() => {
    if (!overlayRef.current) return;
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.25, ease: 'power2.out' }
    );
  }, []);

  useEffect(() => {
    if (!imageWrapRef.current) return;
    gsap.fromTo(
      imageWrapRef.current,
      { scale: 0.94, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' }
    );
  }, [index]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 50) return;
    if (delta > 0) goPrev();
    else goNext();
  };

  if (!item) return null;

  const albumLabel = albums[item.album]?.label;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[2000] flex flex-col bg-veda-primary-dark/95 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <div
        className="flex items-center justify-between gap-3 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2 sm:px-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0 flex-1">
          {albumLabel && (
            <p className="truncate text-[10px] font-bold uppercase tracking-widest text-veda-accent sm:text-xs">
              {albumLabel}
            </p>
          )}
          <p className="truncate font-poppins text-sm font-semibold text-white sm:text-base">
            {item.title}
          </p>
        </div>
        <p className="shrink-0 text-xs text-white/60 sm:text-sm">
          {index + 1} / {items.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center px-2 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-12"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous photo"
          className="absolute left-1 z-10 hidden h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex md:left-4"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div
          ref={imageWrapRef}
          className="relative flex max-h-[min(78vh,820px)] w-full max-w-5xl items-center justify-center"
        >
          {item.type === 'video' ? (
            <video
              src={item.src}
              controls
              className="max-h-[min(78vh,820px)] w-auto max-w-full rounded-lg"
            />
          ) : (
            <img
              src={item.src}
              alt={item.alt || item.title}
              className="max-h-[min(78vh,820px)] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              style={item.rotate ? { transform: `rotate(${item.rotate}deg)` } : undefined}
            />
          )}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next photo"
          className="absolute right-1 z-10 hidden h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex md:right-4"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile prev/next */}
      <div
        className="flex justify-center gap-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={goPrev}
          className="flex min-h-[44px] min-w-[100px] items-center justify-center gap-1 rounded-full bg-white/10 px-4 text-sm font-semibold text-white"
        >
          <ChevronLeft className="h-4 w-4" /> Prev
        </button>
        <button
          type="button"
          onClick={goNext}
          className="flex min-h-[44px] min-w-[100px] items-center justify-center gap-1 rounded-full bg-white/10 px-4 text-sm font-semibold text-white"
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

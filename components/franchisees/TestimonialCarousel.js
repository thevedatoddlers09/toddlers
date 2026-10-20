'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

function initials(name = '') {
  return name
    .split(/[&,\s]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

function TestimonialCard({ item }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-veda-border bg-white shadow-soft sm:rounded-2xl">
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-2 sm:mb-4 sm:gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-veda-background-muted text-veda-primary ring-1 ring-veda-border sm:h-11 sm:w-11 sm:rounded-xl">
            <Quote className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          </span>
          <span className="rounded-full bg-veda-background-soft px-2 py-0.5 font-opensans text-[9px] font-semibold uppercase tracking-wider text-veda-text-muted sm:px-2.5 sm:py-1 sm:text-[10px]">
            Parent
          </span>
        </div>

        <blockquote className="flex-1 font-opensans text-[13px] leading-relaxed text-veda-text-DEFAULT sm:text-[0.95rem]">
          &ldquo;{item.quote}&rdquo;
        </blockquote>

        <div className="mt-4 flex items-center gap-2.5 rounded-lg bg-veda-background-soft px-2.5 py-2.5 sm:mt-6 sm:gap-3 sm:rounded-xl sm:px-3 sm:py-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-veda-primary font-poppins text-[10px] font-bold text-veda-accent ring-2 ring-white sm:h-10 sm:w-10 sm:text-xs">
            {initials(item.parentName)}
          </div>
          <div className="min-w-0">
            <p className="truncate font-poppins text-xs font-semibold text-veda-text-heading sm:text-sm">
              {item.parentName}
            </p>
            <p className="truncate font-opensans text-[11px] text-veda-text-muted sm:text-xs">
              {item.childNote}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialCarousel({ testimonials = [] }) {
  const scrollerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setVisible(1);
      else if (w < 1024) setVisible(2);
      else setVisible(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visible);

  const getStep = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return 0;
    const card = el.querySelector('[data-testimonial-card]');
    if (!card) return 0;
    const styles = window.getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap) || 16;
    return card.getBoundingClientRect().width + gap;
  }, []);

  const scrollToIndex = useCallback(
    (nextIndex) => {
      const el = scrollerRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(nextIndex, maxIndex));
      const step = getStep();
      el.scrollTo({ left: clamped * step, behavior: 'smooth' });
      setIndex(clamped);
    },
    [getStep, maxIndex]
  );

  const go = useCallback(
    (dir) => {
      if (maxIndex < 1) return;
      let next = index + dir;
      if (next < 0) next = maxIndex;
      if (next > maxIndex) next = 0;
      scrollToIndex(next);
    },
    [index, maxIndex, scrollToIndex]
  );

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return undefined;

    const onScroll = () => {
      const step = getStep();
      if (!step) return;
      const next = Math.round(el.scrollLeft / step);
      setIndex(Math.max(0, Math.min(next, maxIndex)));
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [getStep, maxIndex]);

  useEffect(() => {
    if (maxIndex < 1) return undefined;
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [maxIndex, go]);

  useEffect(() => {
    scrollToIndex(Math.min(index, maxIndex));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, maxIndex]);

  if (!testimonials.length) return null;

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-4 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((item) => (
          <div
            key={item.parentName}
            data-testimonial-card
            className="w-full shrink-0 snap-start md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
          >
            <TestimonialCard item={item} />
          </div>
        ))}
      </div>

      {maxIndex > 0 && (
        <div className="mt-4 flex items-center justify-center gap-2 sm:mt-6 sm:gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-veda-border bg-white text-veda-primary transition-colors hover:border-veda-primary hover:bg-veda-primary hover:text-white sm:h-10 sm:w-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} className="sm:h-[18px] sm:w-[18px]" />
          </button>

          <div className="flex items-center gap-1.5" role="tablist" aria-label="Testimonial slides">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                onClick={() => scrollToIndex(i)}
                className={`h-1.5 rounded-full transition-all sm:h-2 ${
                  i === index
                    ? 'w-5 bg-veda-primary sm:w-6'
                    : 'w-1.5 bg-veda-border hover:bg-veda-secondary-dark sm:w-2'
                }`}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-veda-border bg-white text-veda-primary transition-colors hover:border-veda-primary hover:bg-veda-primary hover:text-white sm:h-10 sm:w-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} className="sm:h-[18px] sm:w-[18px]" />
          </button>
        </div>
      )}
    </div>
  );
}

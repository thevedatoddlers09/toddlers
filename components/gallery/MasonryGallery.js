'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { albums } from '../../lib/galleryData';
import GallerySkeleton from './GallerySkeleton';

const ASPECT_CYCLE = ['aspect-[4/5]', 'aspect-square', 'aspect-[3/4]', 'aspect-[5/4]'];

function useColumnCount() {
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setColumns(4);
      else if (w >= 640) setColumns(3);
      else setColumns(2);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return columns;
}

export default function MasonryGallery({ items, onItemClick }) {
  const gridRef = useRef(null);
  const columns = useColumnCount();
  const [isLoading, setIsLoading] = useState(true);
  const loadToken = useRef(0);

  // Reset skeleton whenever the item set changes
  useEffect(() => {
    if (!items.length) {
      setIsLoading(false);
      return;
    }

    const token = ++loadToken.current;
    setIsLoading(true);

    const minDelay = new Promise((resolve) => setTimeout(resolve, 450 + columns * 140));
    const maxDelay = new Promise((resolve) => setTimeout(resolve, 2200));

    const preload = Promise.all(
      items.slice(0, Math.min(items.length, columns * 3)).map(
        (item) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = item.src;
          })
      )
    );

    Promise.race([Promise.all([minDelay, preload]), maxDelay]).then(() => {
      if (loadToken.current === token) setIsLoading(false);
    });
  }, [items, columns]);

  useEffect(() => {
    if (isLoading || !gridRef.current || items.length === 0) return;

    const cards = Array.from(gridRef.current.querySelectorAll('.gallery-masonry-card'));
    const perCol = Math.max(1, Math.ceil(cards.length / columns));

    cards.forEach((card, i) => {
      const col = Math.floor(i / perCol);
      const row = i % perCol;
      gsap.fromTo(
        card,
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.42,
          delay: col * 0.14 + row * 0.03,
          ease: 'power2.out',
          overwrite: true,
        }
      );
    });
  }, [isLoading, items, columns]);

  if (!items.length) return null;

  if (isLoading) {
    return <GallerySkeleton columns={columns} />;
  }

  return (
    <div
      ref={gridRef}
      className="gallery-masonry columns-2 gap-2.5 sm:columns-3 sm:gap-3.5 lg:columns-4 lg:gap-4"
    >
      {items.map((item, index) => {
        const albumLabel = albums[item.album]?.label;
        const aspect = ASPECT_CYCLE[index % ASPECT_CYCLE.length];

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onItemClick(index)}
            className="gallery-masonry-card group mb-2.5 w-full break-inside-avoid text-left sm:mb-3.5 lg:mb-4"
          >
            <div
              className={`relative overflow-hidden rounded-xl bg-veda-background-muted shadow-soft ring-1 ring-veda-border/60 transition-all duration-300 sm:rounded-2xl md:hover:-translate-y-1 md:hover:shadow-softer ${aspect}`}
            >
              <img
                src={item.src}
                alt={item.alt || item.title}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 md:group-hover:scale-105"
                style={item.rotate ? { transform: `rotate(${item.rotate}deg)` } : undefined}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-veda-primary-dark/50 via-transparent to-transparent" />
              {albumLabel && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-2 sm:p-3">
                  <span className="inline-block rounded-md bg-veda-accent/95 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-veda-primary-dark sm:text-[10px]">
                    {albumLabel}
                  </span>
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

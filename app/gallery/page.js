'use client';

import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import gsap from 'gsap';
import {
  centres,
  filterGalleryItems,
  getCentreById,
} from '../../lib/galleryData';
import CentrePicker from '../../components/gallery/CentrePicker';
import ThemeFilters from '../../components/gallery/ThemeFilters';
import MasonryGallery from '../../components/gallery/MasonryGallery';
import Lightbox from '../../components/gallery/Lightbox';
import GalleryEmpty from '../../components/gallery/GalleryEmpty';

const VALID_THEMES = new Set(['all', 'celebrations', 'events', 'daily', 'learning']);
const VALID_CENTRES = new Set(centres.map((c) => c.id));

function GalleryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mainRef = useRef(null);

  const centreFromUrl = searchParams.get('centre');
  const themeFromUrl = searchParams.get('theme');
  const albumFromUrl = searchParams.get('album');

  const [centreId, setCentreId] = useState(
    centreFromUrl && VALID_CENTRES.has(centreFromUrl) ? centreFromUrl : 'sector-105'
  );
  const [themeId, setThemeId] = useState(
    themeFromUrl && VALID_THEMES.has(themeFromUrl) ? themeFromUrl : 'all'
  );
  const [albumId, setAlbumId] = useState(albumFromUrl || null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const centre = getCentreById(centreId);
  const centreLive = centre?.live;

  const syncUrl = useCallback(
    (nextCentre, nextTheme, nextAlbum) => {
      const params = new URLSearchParams();
      params.set('centre', nextCentre);
      if (nextTheme && nextTheme !== 'all') params.set('theme', nextTheme);
      if (nextAlbum) params.set('album', nextAlbum);
      router.replace(`/gallery?${params.toString()}`, { scroll: false });
    },
    [router]
  );

  useEffect(() => {
    const nextCentre =
      centreFromUrl && VALID_CENTRES.has(centreFromUrl) ? centreFromUrl : 'sector-105';
    const nextTheme =
      themeFromUrl && VALID_THEMES.has(themeFromUrl) ? themeFromUrl : 'all';
    const nextAlbum = albumFromUrl || null;

    if (nextCentre !== centreId) setCentreId(nextCentre);
    if (nextTheme !== themeId) setThemeId(nextTheme);
    if (nextAlbum !== albumId) setAlbumId(nextAlbum);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sync from URL only when searchParams change
  }, [centreFromUrl, themeFromUrl, albumFromUrl]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-hero-content',
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.gallery-centre-strip',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, delay: 0.25, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.gallery-theme-chip',
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.04, delay: 0.4, ease: 'power2.out' }
      );
    }, mainRef);
    return () => ctx.revert();
  }, []);

  const items = useMemo(() => {
    if (!centreLive) return [];
    return filterGalleryItems({ centreId, themeId, albumId });
  }, [centreId, themeId, albumId, centreLive]);

  const handleCentreChange = (id) => {
    setCentreId(id);
    setAlbumId(null);
    setLightboxIndex(null);
    syncUrl(id, themeId, null);
  };

  const handleThemeChange = (id) => {
    setThemeId(id);
    setAlbumId(null);
    setLightboxIndex(null);
    syncUrl(centreId, id, null);
  };

  const handleAlbumChange = (id) => {
    setAlbumId(id);
    setLightboxIndex(null);
    syncUrl(centreId, themeId, id);
  };

  const showCentreEmpty = !centreLive;
  const showNoResults = centreLive && items.length === 0;

  return (
    <main ref={mainRef} className="min-h-screen bg-veda-background-soft">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/gallery-1.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-veda-primary-dark/85 via-veda-primary/80 to-veda-background-soft" />
        <div
          className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-veda-accent/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-1/3 h-48 w-48 rounded-full bg-veda-playful-peach/25 blur-3xl"
          aria-hidden="true"
        />

        <div className="gallery-hero-content relative z-10 mx-auto max-w-[1400px] px-4 pb-6 pt-12 text-center sm:px-[3%] sm:pb-12 sm:pt-20 md:pt-24">
          <h1 className="font-poppins text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Gallery
          </h1>
          <p className="mx-auto mt-2 max-w-xl px-1 text-xs leading-relaxed text-veda-secondary-light sm:mt-4 sm:text-base md:text-lg">
            Celebrations, events, daily activities, and classroom learning — explore by centre.
          </p>
        </div>
      </section>

      {/* Sticky filters — sits under sticky Navbar (~64–72px) */}
      <div className="sticky top-[60px] z-[50] border-b border-veda-border/80 bg-veda-background-soft/95 px-2.5 py-2 backdrop-blur-md sm:top-[72px] sm:px-[3%] sm:py-4">
        <div className="mx-auto max-w-[1400px] space-y-2 sm:space-y-4">
          <CentrePicker activeCentre={centreId} onChange={handleCentreChange} />
          {centreLive && (
            <ThemeFilters
              activeTheme={themeId}
              activeAlbum={albumId}
              onThemeChange={handleThemeChange}
              onAlbumChange={handleAlbumChange}
            />
          )}
        </div>
      </div>

      {/* Grid */}
      <section className="px-3 py-5 sm:px-[3%] sm:py-10 md:py-12">
        <div className="mx-auto max-w-[1400px]">
          {centreLive && items.length > 0 && (
            <p className="mb-3 text-xs text-veda-text-muted sm:mb-5 sm:text-sm">
              <span className="font-semibold text-veda-primary">{items.length}</span>
              {' '}moment{items.length === 1 ? '' : 's'} at {centre.name}
            </p>
          )}

          {showCentreEmpty && (
            <GalleryEmpty
              centreName={centre.name}
              onGoToLiveCentre={() => handleCentreChange('sector-105')}
            />
          )}

          {showNoResults && (
            <div className="rounded-2xl border border-veda-border bg-white px-6 py-14 text-center">
              <p className="font-poppins text-lg font-semibold text-veda-primary">No photos in this filter</p>
              <p className="mt-2 text-sm text-veda-text-muted">Try another theme or album.</p>
              <button
                type="button"
                onClick={() => handleThemeChange('all')}
                className="mt-5 min-h-[44px] rounded-full bg-veda-primary px-6 text-sm font-bold text-white"
              >
                Show all photos
              </button>
            </div>
          )}

          {centreLive && items.length > 0 && (
            <MasonryGallery items={items} onItemClick={setLightboxIndex} />
          )}
        </div>
      </section>

      {lightboxIndex != null && items[lightboxIndex] && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </main>
  );
}

export default function GalleryPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-veda-background-soft">
          <p className="font-poppins text-veda-primary">Loading gallery…</p>
        </main>
      }
    >
      <GalleryContent />
    </Suspense>
  );
}

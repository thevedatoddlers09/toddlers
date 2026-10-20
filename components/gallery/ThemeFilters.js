'use client';

import { themes, getAlbumsForTheme } from '../../lib/galleryData';

export default function ThemeFilters({ activeTheme, activeAlbum, onThemeChange, onAlbumChange }) {
  const albumOptions = getAlbumsForTheme(activeTheme);

  return (
    <div className="space-y-2 sm:space-y-3">
      <div
        className="flex gap-1.5 overflow-x-auto pb-0.5 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-2"
        role="tablist"
        aria-label="Gallery themes"
      >
        {themes.map((theme) => {
          const active = activeTheme === theme.id;
          return (
            <button
              key={theme.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onThemeChange(theme.id)}
              className={`gallery-theme-chip snap-start shrink-0 min-h-[32px] rounded-full border px-2.5 py-1 text-[11px] font-bold transition-all duration-300 whitespace-nowrap sm:min-h-[42px] sm:border-2 sm:px-4 sm:py-2 sm:text-sm ${
                active
                  ? 'border-veda-primary bg-veda-primary text-white shadow-sm sm:shadow-md'
                  : 'border-veda-border bg-white/90 text-veda-text-muted backdrop-blur-sm hover:border-veda-primary hover:text-veda-primary'
              }`}
            >
              {theme.label}
            </button>
          );
        })}
      </div>

      {albumOptions.length > 0 && (
        <div
          className="flex gap-1.5 overflow-x-auto pb-0.5 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-2"
          role="tablist"
          aria-label="Albums"
        >
          <button
            type="button"
            onClick={() => onAlbumChange(null)}
            className={`snap-start shrink-0 min-h-[28px] rounded-full border px-2 py-1 text-[10px] font-semibold transition-all duration-200 whitespace-nowrap sm:min-h-[36px] sm:px-3.5 sm:py-1.5 sm:text-xs md:text-sm ${
              !activeAlbum
                ? 'border-veda-accent bg-veda-accent/15 text-veda-primary'
                : 'border-transparent bg-veda-background-muted text-veda-text-muted hover:border-veda-border'
            }`}
          >
            All albums
          </button>
          {albumOptions.map((album) => {
            const active = activeAlbum === album.id;
            return (
              <button
                key={album.id}
                type="button"
                onClick={() => onAlbumChange(album.id)}
                className={`snap-start shrink-0 min-h-[28px] rounded-full border px-2 py-1 text-[10px] font-semibold transition-all duration-200 whitespace-nowrap sm:min-h-[36px] sm:px-3.5 sm:py-1.5 sm:text-xs md:text-sm ${
                  active
                    ? 'border-veda-accent bg-veda-accent/15 text-veda-primary'
                    : 'border-transparent bg-veda-background-muted text-veda-text-muted hover:border-veda-border'
                }`}
              >
                {album.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

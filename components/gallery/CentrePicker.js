'use client';

import { centres } from '../../lib/galleryData';

export default function CentrePicker({ activeCentre, onChange }) {
  return (
    <div className="gallery-centre-strip -mx-3 px-3 sm:mx-0 sm:px-0">
      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-veda-text-muted sm:mb-2.5 sm:text-xs">
        Choose a centre
      </p>
      <div
        className="flex gap-1.5 overflow-x-auto pb-0.5 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-2"
        role="tablist"
        aria-label="Centres"
      >
        {centres.map((centre) => {
          const active = activeCentre === centre.id;
          return (
            <button
              key={centre.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(centre.id)}
              className={`snap-start shrink-0 min-h-[34px] rounded-full border px-2.5 py-1.5 text-[11px] font-semibold transition-all duration-300 whitespace-nowrap sm:min-h-[42px] sm:border-2 sm:px-4 sm:py-2 sm:text-sm ${
                active
                  ? 'border-veda-accent bg-veda-primary text-white shadow-sm sm:shadow-md'
                  : 'border-veda-border bg-white text-veda-text-muted hover:border-veda-primary/40 hover:text-veda-primary'
              }`}
            >
              <span className="font-poppins">{centre.name}</span>
              <span
                className={`ml-1 text-[10px] font-normal sm:ml-1.5 sm:text-xs ${
                  active ? 'text-veda-accent' : 'text-veda-text-muted/70'
                }`}
              >
                {centre.city}
              </span>
              {!centre.live && (
                <span
                  className={`ml-1 text-[9px] uppercase tracking-wide sm:ml-1.5 sm:text-[10px] ${
                    active ? 'text-white/70' : 'text-veda-text-muted/50'
                  }`}
                >
                  Soon
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

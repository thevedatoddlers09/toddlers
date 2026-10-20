'use client';

import Link from 'next/link';
import { Camera, MapPin } from 'lucide-react';

export default function GalleryEmpty({ centreName, onGoToLiveCentre }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-veda-border bg-gradient-to-br from-veda-background-muted via-white to-veda-secondary/30 px-5 py-12 text-center sm:rounded-3xl sm:px-10 sm:py-16">
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-veda-accent/10 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-6 bottom-0 h-32 w-32 rounded-full bg-veda-playful-peach/20 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-md">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-veda-primary text-veda-accent shadow-lg sm:h-16 sm:w-16">
          <Camera className="h-7 w-7" strokeWidth={1.75} />
        </div>

        <h3 className="font-poppins text-xl font-bold text-veda-primary sm:text-2xl">
          {`${centreName || 'This centre'} gallery is on the way`}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-veda-text-muted sm:text-base">
          Photos from this centre will appear here as we open and grow. Explore Sector 105 for joyful moments happening now.
        </p>

        <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          {onGoToLiveCentre && (
            <button
              type="button"
              onClick={onGoToLiveCentre}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-veda-primary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-veda-primary-dark"
            >
              <MapPin className="h-4 w-4 text-veda-accent" />
              View Sector 105
            </button>
          )}
          <Link
            href="/admissions"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-veda-primary px-6 py-2.5 text-sm font-bold text-veda-primary transition-colors hover:bg-veda-primary hover:text-white"
          >
            Enquire admissions
          </Link>
        </div>
      </div>
    </div>
  );
}

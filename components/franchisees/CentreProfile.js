'use client';

import Link from 'next/link';
import { MapPin, Images, ArrowRight, Sparkles } from 'lucide-react';
import Button from '@/components/Button';
import TestimonialCarousel from '@/components/franchisees/TestimonialCarousel';
import { galleryHref } from '@/lib/franchiseeProfiles';

const activityStyles = [
  'border-veda-accent/40 bg-veda-accent/10 text-veda-primary-dark hover:border-veda-accent hover:bg-veda-accent/20',
  'border-veda-secondary-dark/30 bg-veda-secondary/30 text-veda-primary hover:border-veda-primary/40 hover:bg-veda-secondary/50',
  'border-veda-playful-green/50 bg-veda-playful-green/15 text-green-900 hover:border-veda-playful-green hover:bg-veda-playful-green/25',
  'border-veda-playful-peach/50 bg-veda-playful-peach/15 text-rose-900 hover:border-veda-playful-peach hover:bg-veda-playful-peach/25',
  'border-veda-playful-blue/50 bg-veda-playful-blue/20 text-sky-900 hover:border-veda-playful-blue hover:bg-veda-playful-blue/35',
  'border-veda-primary/20 bg-veda-background-muted text-veda-primary hover:border-veda-primary/40 hover:bg-white',
];

function SectionLabel({ children }) {
  return (
    <div className="mb-3 flex items-start gap-2 sm:mb-4 sm:items-center sm:gap-3">
      <span className="mt-0.5 h-6 w-0.5 shrink-0 rounded-full bg-gradient-to-b from-veda-accent to-veda-primary sm:mt-0 sm:h-8 sm:w-1" />
      <div>{children}</div>
    </div>
  );
}

export default function CentreProfile({ profile }) {
  if (!profile) return null;

  return (
    <article
      id={profile.slug}
      className="anim-centre-profile relative scroll-mt-24 overflow-hidden rounded-2xl border border-veda-border/80 bg-white shadow-softer sm:scroll-mt-28 sm:rounded-3xl"
    >
      <div className="p-3.5 sm:p-8 md:p-10">
        <div className="grid grid-cols-1 items-start gap-5 sm:gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
          {/* Director portrait */}
          <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[300px] lg:mx-0">
            <div className="pointer-events-none absolute -inset-1.5 rounded-[1.25rem] bg-gradient-to-br from-veda-accent/40 via-veda-secondary/30 to-transparent opacity-80 blur-sm sm:-inset-2 sm:rounded-[1.35rem]" />
            <div className="relative overflow-hidden rounded-xl shadow-lg ring-1 ring-veda-border/60 sm:rounded-2xl">
              <div className="relative h-[280px] overflow-hidden sm:h-[400px]">
                <img
                  src={profile.director.image}
                  alt={`${profile.director.name}, ${profile.director.role}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-veda-primary-dark via-veda-primary-dark/70 to-transparent pt-16 pb-3 sm:pt-24 sm:pb-4">
                  <div className="px-3 text-center sm:px-4">
                    <h3 className="font-poppins text-lg font-bold text-white drop-shadow-lg sm:text-xl">
                      {profile.director.name}
                    </h3>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-veda-accent sm:text-xs sm:tracking-[0.15em]">
                      {profile.director.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Centre story */}
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-1.5 sm:mb-4 sm:gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-veda-playful-green/25 to-veda-playful-green/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-green-800 ring-1 ring-veda-playful-green/50 sm:gap-1.5 sm:px-3.5 sm:py-1.5 sm:text-xs">
                <Sparkles size={10} className="sm:h-3 sm:w-3" />
                Operational
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-veda-background-muted px-2.5 py-1 font-opensans text-xs text-veda-text-muted sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-sm">
                <MapPin size={12} className="text-veda-accent sm:h-3.5 sm:w-3.5" />
                {profile.city}
              </span>
            </div>

            <h2 className="font-poppins text-xl font-bold tracking-tight text-veda-text-heading sm:text-3xl md:text-4xl">
              {profile.name}
            </h2>
            {profile.tagline && (
              <p className="mt-1.5 font-opensans text-sm text-veda-primary/90 sm:mt-2 sm:text-lg">
                {profile.tagline}
              </p>
            )}

            <div className="relative mt-4 overflow-hidden rounded-xl border border-veda-accent/25 bg-gradient-to-br from-veda-background-soft via-white to-veda-accent/5 px-3.5 py-3.5 sm:mt-7 sm:rounded-2xl sm:px-6 sm:py-5">
              <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-veda-accent/15 blur-2xl" />
              <p className="relative mb-1.5 text-[10px] font-bold uppercase tracking-wider text-veda-primary sm:mb-2 sm:text-xs sm:tracking-widest">
                A note from our Centre Director
              </p>
              <p className="relative font-opensans text-[13px] leading-relaxed text-veda-text-DEFAULT sm:text-[1.05rem]">
                {profile.director.message}
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
              <Button
                variant="primary"
                shape="pill"
                href="/contact"
                className="w-full bg-veda-primary px-5 py-2.5 text-sm text-white shadow-md hover:bg-veda-primary-dark hover:shadow-lg sm:w-auto sm:px-6 sm:py-3"
              >
                Tour this centre
              </Button>
              <Button
                variant="outline"
                shape="pill"
                href={galleryHref(profile)}
                className="w-full !border-2 !border-veda-primary bg-white px-5 py-2.5 text-sm !text-veda-primary hover:!-translate-y-0.5 hover:!bg-veda-primary hover:!text-white hover:shadow-md sm:w-auto sm:px-6 sm:py-3"
              >
                <Images size={14} className="mr-1.5 sm:mr-2 sm:h-4 sm:w-4" />
                View gallery
              </Button>
            </div>
          </div>
        </div>

        {/* Centre photographs */}
        <section className="mt-8 border-t border-veda-border/70 pt-6 sm:mt-14 sm:pt-10">
          <SectionLabel>
            <h3 className="font-poppins text-base font-bold text-veda-text-heading sm:text-xl">
              Life at the centre
            </h3>
            <p className="mt-0.5 font-opensans text-xs text-veda-text-muted sm:text-sm">
              A glimpse of our spaces, celebrations, and everyday joy
            </p>
          </SectionLabel>
          <div className="-mx-0.5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-0.5 pb-2 [scrollbar-width:thin] sm:gap-3.5 sm:pb-3">
            {profile.photos.map((photo, i) => (
              <figure
                key={photo.src}
                className="group relative w-[72%] shrink-0 snap-start overflow-hidden rounded-xl shadow-md ring-1 ring-veda-border/50 sm:w-[44%] sm:rounded-2xl md:w-[31%]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 bg-gradient-to-t from-veda-primary-dark/90 to-transparent px-2.5 pb-2.5 pt-8 font-opensans text-[11px] text-white/95 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:px-3 sm:pb-3 sm:pt-10 sm:text-xs">
                  {photo.alt}
                </figcaption>
                {i === 0 && (
                  <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-veda-primary shadow-sm backdrop-blur-sm sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
                    Featured
                  </span>
                )}
              </figure>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section className="mt-7 border-t border-veda-border/70 pt-6 sm:mt-12 sm:pt-10">
          <SectionLabel>
            <h3 className="font-poppins text-base font-bold text-veda-text-heading sm:text-xl">
              Favourite activities
            </h3>
            <p className="mt-0.5 font-opensans text-xs text-veda-text-muted sm:text-sm">
              Explore albums from this centre in our gallery
            </p>
          </SectionLabel>
          <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
            {profile.activities.map((activity, i) => (
              <Link
                key={activity.albumId}
                href={galleryHref(profile, activity)}
                className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1.5 font-opensans text-xs font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:gap-1.5 sm:px-4 sm:py-2.5 sm:text-sm ${activityStyles[i % activityStyles.length]}`}
              >
                {activity.label}
                <ArrowRight size={12} className="opacity-50 sm:h-3.5 sm:w-3.5" />
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-7 border-t border-veda-border/70 pt-6 sm:mt-12 sm:pt-10">
          <SectionLabel>
            <h3 className="font-poppins text-base font-bold text-veda-text-heading sm:text-xl">
              Voices from parents
            </h3>
            <p className="mt-0.5 font-opensans text-xs text-veda-text-muted sm:text-sm">
              Families sharing their experience at {profile.name}
            </p>
          </SectionLabel>
          <TestimonialCarousel testimonials={profile.testimonials} />
        </section>
      </div>
    </article>
  );
}

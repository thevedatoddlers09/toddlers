'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Handshake, MapPin } from 'lucide-react';
import Button from '@/components/Button';
import CentreProfile from '@/components/franchisees/CentreProfile';
import {
  getOperationalProfiles,
  getComingSoonCentres,
} from '@/lib/franchiseeProfiles';

export default function FranchiseesPage() {
  const mainRef = useRef(null);
  const operational = getOperationalProfiles();
  const comingSoon = getComingSoonCentres();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from('.anim-franchisees-hero', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.anim-jump-chip', {
        y: 16,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        delay: 0.2,
        ease: 'power2.out',
      });

      gsap.fromTo(
        '.anim-centre-profile',
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.anim-profiles-section',
            start: 'top 80%',
          },
        }
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="bg-veda-background-soft">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-8 sm:px-[5%] sm:py-14 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-veda-background-muted via-veda-background-soft to-veda-background-soft" />
        <div className="pointer-events-none absolute -left-20 top-8 hidden h-56 w-56 rounded-full bg-veda-accent/20 blur-3xl sm:block" />
        <div className="pointer-events-none absolute -right-16 bottom-0 hidden h-64 w-64 rounded-full bg-veda-secondary/50 blur-3xl sm:block" />

        <div className="anim-franchisees-hero relative z-10 mx-auto max-w-4xl text-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-veda-accent/40 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-veda-primary shadow-soft backdrop-blur-sm sm:mb-5 sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-widest">
            <Handshake size={12} className="text-veda-accent-dark sm:h-3.5 sm:w-3.5" />
            Existing Franchisee Profiles
          </span>
          <h1 className="font-poppins text-2xl font-bold tracking-tight text-veda-text-heading sm:text-4xl md:text-5xl">
            Our Centre{' '}
            <span className="relative inline-block">
              Partners
              <span className="absolute -bottom-0.5 left-0 h-1 w-full rounded-full bg-gradient-to-r from-veda-accent to-veda-accent/30 sm:-bottom-1 sm:h-1.5" />
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl px-1 font-opensans text-[13px] leading-relaxed text-veda-text-muted sm:mt-5 sm:text-lg">
            Meet the people and places already bringing The Veda Toddlers to life —
            centre stories, director notes, daily activities, and voices from parent families.
          </p>
        </div>

        {/* Centre chips */}
        <nav aria-label="Centres" className="anim-jump-chip relative z-10 mx-auto mt-6 max-w-3xl sm:mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
            {operational.map((centre) => (
              <li key={centre.id}>
                <a
                  href={`#${centre.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-veda-primary bg-veda-primary px-2.5 py-1.5 font-opensans text-xs font-medium text-white transition-opacity hover:opacity-90 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
                >
                  <MapPin size={12} className="shrink-0 opacity-90 sm:h-3.5 sm:w-3.5" />
                  {centre.name}
                  <span className="h-1 w-1 rounded-full bg-veda-accent" aria-hidden />
                  <span className="text-[10px] font-normal text-white/80 sm:text-xs">Live</span>
                </a>
              </li>
            ))}
            {comingSoon.map((centre) => (
              <li key={centre.id}>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-veda-border bg-white px-2.5 py-1.5 font-opensans text-xs text-veda-text-muted sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
                  {centre.name}
                  <span className="text-[10px] text-veda-text-muted/70 sm:text-xs">Soon</span>
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Profiles */}
      <section className="anim-profiles-section px-3 pb-10 sm:px-[5%] sm:pb-16 md:pb-20">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-6 sm:gap-10">
          {operational.map((profile) => (
            <CentreProfile key={profile.id} profile={profile} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-veda-primary px-4 py-8 text-white sm:px-[5%] sm:py-12 md:py-14">
        <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-veda-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 text-center sm:gap-6 md:flex-row md:text-left">
          <div>
            <h2 className="font-poppins text-lg font-bold text-white sm:text-2xl md:text-3xl">
              Inspired by our partners?
            </h2>
            <p className="mt-1.5 max-w-xl font-opensans text-xs leading-relaxed text-white/80 sm:mt-2 sm:text-base">
              Tour a live centre, or start a conversation about bringing Veda Toddlers to your city.
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
            <Button
              variant="primary"
              shape="pill"
              href="/contact"
              className="w-full bg-veda-accent px-5 py-2.5 text-sm font-bold text-veda-primary-dark shadow-lg hover:bg-veda-accent-dark hover:scale-[1.02] sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
            >
              Tour this centre
            </Button>
            <Button
              variant="outline"
              shape="pill"
              href="/franchise#enquire"
              className="w-full border-2 border-white/50 bg-transparent px-5 py-2.5 text-sm font-bold text-white hover:border-white hover:bg-white hover:text-veda-primary sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
            >
              Become a franchisee
            </Button>
          </div>
        </div>
      </section>

      <p className="bg-veda-background-soft px-4 py-4 text-center font-opensans text-[11px] leading-relaxed text-veda-text-muted sm:py-6 sm:text-sm">
        Looking for every location on a map?{' '}
        <Link href="/locations" className="font-semibold text-veda-primary underline-offset-2 hover:underline">
          Browse all centres
        </Link>
        .
      </p>
    </main>
  );
}

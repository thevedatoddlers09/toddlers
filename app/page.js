'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/Button';
import HeroCarousel from '@/components/HeroCarousel';
import AdmissionsPopup from '@/components/AdmissionsPopup';
import StatsCounter from '@/components/StatsCounter';
import {
  ShieldCheck,
  Heart,
  Shield,
  Hospital,
  ArrowRight,
  Check,
  Sun,
  Lightbulb,
  Gamepad2,
  Music,
  Globe,
  BookOpen,
  Utensils,
  Clock,
  Quote,
} from 'lucide-react';

const preschoolLevels = [
  { name: 'Seedling', age: '1–2 yrs' },
  { name: 'Sprouts', age: '2–3 yrs' },
  { name: 'Explorers', age: '3–4 yrs' },
  { name: 'Creators', age: '4–5 yrs' },
  { name: 'Leaders', age: '5–6 yrs' },
];

const daycareBenefits = [
  'Safe, nurturing nest',
  'Nutritious meals',
  'Flexible half & full day',
  'Age-appropriate activities',
];

const afterSchoolActivities = [
  'Art & Craft',
  'Dance',
  'Public Speaking',
  'Personality Development',
  'KIDSPRENEUR',
  'Tuition Support',
];

const philosophyPillars = [
  {
    title: 'Imagination-Led Learning',
    desc: 'Curiosity drives the classroom — stories, art, and role play that help children think freely and express creatively.',
    Icon: Lightbulb,
    card: 'from-veda-accent/10 via-white to-veda-accent/5',
    border: 'border-veda-accent/20',
    iconBg: 'from-veda-accent to-veda-accent-dark',
  },
  {
    title: 'Play + Project Approach',
    desc: 'Fun meets hands-on learning — projects that build curiosity, teamwork, and problem-solving by doing.',
    Icon: Gamepad2,
    card: 'from-veda-playful-green/15 via-white to-veda-playful-green/5',
    border: 'border-veda-playful-green/20',
    iconBg: 'from-veda-playful-green to-green-600',
  },
  {
    title: 'Joyful Energy',
    desc: 'Music, rhythm, and movement every day — because happiness and purposeful play unlock learning.',
    Icon: Music,
    card: 'from-veda-playful-peach/15 via-white to-rose-50',
    border: 'border-veda-playful-peach/20',
    iconBg: 'from-veda-playful-peach to-rose-400',
  },
  {
    title: 'Safe Nest',
    desc: 'A nurturing, secure space where children feel protected and confident enough to explore and grow.',
    Icon: Shield,
    card: 'from-veda-playful-blue/15 via-white to-blue-50',
    border: 'border-veda-playful-blue/25',
    iconBg: 'from-blue-400 to-indigo-500',
  },
  {
    title: 'Global + Indian Values',
    desc: 'Culture-rooted and globally open — respect, empathy, and character shaped by Indian values with a world view.',
    Icon: Globe,
    card: 'from-veda-secondary/40 via-white to-veda-secondary/20',
    border: 'border-veda-secondary',
    iconBg: 'from-veda-primary to-veda-primary-dark',
  },
];

const keyOfferings = [
  { title: 'KIDORA Curriculum', desc: 'Imagination-led, play-based learning designed for every stage from 8 months to 6 years.', Icon: BookOpen, gradient: 'from-veda-accent to-amber-500' },
  { title: 'Half & Full-Day Care', desc: 'Flexible daycare timings so working parents get reliable, warm care through the day.', Icon: Clock, gradient: 'from-veda-primary to-veda-primary-dark' },
  { title: 'Nutritious Meals', desc: 'Wholesome, age-appropriate meals prepared with care as part of the daycare day.', Icon: Utensils, gradient: 'from-veda-playful-green to-green-500' },
  { title: 'After-School Explorers', desc: 'Art, dance, public speaking, KIDSPRENEUR, and more beyond academics.', Icon: Music, gradient: 'from-veda-playful-blue to-blue-500' },
  { title: 'Safe Campus', desc: '24×7 CCTV, monitored entry/exit, and spaces designed for little learners.', Icon: ShieldCheck, gradient: 'from-veda-secondary-dark to-purple-600' },
  { title: 'Play, Transport & Health', desc: 'Indoor/outdoor play zones, managed transport, and trained first-aid support on campus.', Icon: Hospital, gradient: 'from-veda-playful-peach to-rose-400' },
];

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.anim-program-card', {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.anim-programs-section',
          start: 'top 75%',
        }
      });

      gsap.from('.anim-why-card', {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.anim-why-section',
          start: 'top 75%',
        }
      });

      gsap.fromTo('.anim-facility-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.anim-facilities-section',
            start: 'top 85%',
          }
        }
      );

      gsap.fromTo('.anim-branch-card',
        { y: 50, opacity: 0, scale: 0.85 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: '.anim-branches-section',
            start: 'top 90%',
          }
        }
      );

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef}>
      <AdmissionsPopup />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Welcome / Philosophy — LOCKED: do not change */}
      <section className="relative isolate overflow-hidden bg-veda-background-soft">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] bg-veda-secondary-light/50 lg:block" aria-hidden="true" />
        <div className="absolute -left-16 top-16 -z-10 h-40 w-40 rounded-full bg-veda-accent/20 blur-3xl sm:h-56 sm:w-56" aria-hidden="true" />
        <div className="absolute -right-10 bottom-20 -z-10 h-28 w-28 rounded-full bg-veda-playful-blue/25 blur-3xl lg:hidden" aria-hidden="true" />

        <div className="mx-auto grid max-w-[1440px] items-center gap-5 px-4 py-7 max-sm:gap-0 sm:gap-10 sm:px-8 sm:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-12 lg:py-20">
          <div className="relative z-10 order-1 max-w-2xl lg:order-1 lg:text-left">
            {/* Mobile badge row — refined cohesion under 640px */}
            <div className="mb-3.5 flex items-center gap-2.5 sm:mb-6 sm:block lg:block">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[1.1rem] bg-veda-secondary shadow-soft ring-2 ring-white/90 sm:hidden">
                <img
                  src="/about-children.jpg"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover object-[center_30%]"
                />
              </div>
              <div className="min-w-0 flex-1 sm:contents">
                <div className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-veda-secondary/80 bg-white px-2.5 py-1.5 text-[10px] font-semibold leading-none text-veda-primary shadow-soft sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
                  <Heart size={12} className="shrink-0 fill-veda-playful-peach/40 text-veda-primary sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                  <span className="truncate sm:whitespace-normal sm:leading-tight">Preschool, daycare & after-school care</span>
                </div>
              </div>
            </div>

            <h2 className="font-poppins text-[1.625rem] font-bold leading-[1.18] tracking-[-0.028em] text-veda-primary sm:text-4xl sm:leading-tight md:text-5xl lg:text-[4.25rem] lg:leading-[1.08] lg:tracking-[-0.035em]">
              A joyful beginning for every{' '}
              <span className="relative inline-block pb-0.5">
                little learner
                <svg className="absolute bottom-0 left-0 h-2 w-full text-veda-accent sm:-bottom-2 sm:h-3" viewBox="0 0 240 12" fill="none" aria-hidden="true">
                  <path d="M3 8.5C64 2.5 160 2 237 7" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="mt-2.5 max-w-xl text-[13.5px] leading-6 text-veda-text-DEFAULT sm:mt-6 sm:text-lg sm:leading-8 lg:mt-7 lg:text-xl">
              A warm, child-centred space where play, imagination, Indian values, and meaningful experiences help children grow with confidence.
            </p>

            {/* Mobile/tablet image — caption sits below on phones so faces stay visible */}
            <div className="mt-4 sm:mt-6 lg:hidden">
              <div className="relative overflow-hidden rounded-[1.25rem] bg-veda-secondary shadow-soft sm:rounded-3xl">
                <div className="relative h-[112px] w-full sm:h-[200px]">
                  <img
                    src="/about-children.jpg"
                    alt="Children learning and celebrating together at The Veda Toddlers"
                    className="absolute inset-0 h-full w-full object-cover object-[center_28%] sm:object-center"
                  />
                  {/* Tablet-only overlay caption (unchanged tablet treatment) */}
                  <div className="absolute inset-0 hidden bg-gradient-to-t from-veda-primary/35 via-transparent to-transparent sm:block" aria-hidden="true" />
                  <div className="absolute bottom-3 left-3 right-3 hidden items-center gap-2.5 rounded-xl bg-white/95 px-3 py-2 shadow-soft backdrop-blur sm:flex">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-veda-accent text-veda-primary-dark">
                      <Sun size={16} aria-hidden="true" />
                    </span>
                    <p className="text-sm font-semibold leading-5 text-veda-primary">
                      Learning with joyful energy, every day.
                    </p>
                  </div>
                </div>
              </div>
              {/* Phone-only caption under the image */}
              <div className="mt-2.5 flex items-center gap-2 rounded-2xl border border-veda-border/80 bg-white px-3 py-2 sm:hidden">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-veda-accent text-veda-primary-dark">
                  <Sun size={14} aria-hidden="true" />
                </span>
                <p className="text-[11px] font-semibold leading-4 text-veda-primary">
                  Learning with joyful energy, every day.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2 sm:mt-9 sm:flex-row sm:gap-3 lg:justify-start">
              <Button href="/admissions" variant="secondary" shape="pill" className="w-full gap-2 px-5 py-3 text-[13px] sm:w-auto sm:px-7 sm:py-3.5 sm:text-base">
                Book a School Visit
                <ArrowRight size={16} className="sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
              </Button>
              <Button href="/programs" variant="outline" shape="pill" className="w-full gap-2 border-veda-secondary bg-veda-secondary-light/40 px-5 py-3 text-[13px] text-veda-primary hover:bg-veda-secondary-light sm:w-auto sm:border-veda-primary sm:bg-white sm:px-7 sm:py-3.5 sm:text-base">
                Explore Our Programs
              </Button>
            </div>

            <div className="mt-3.5 flex flex-wrap gap-1.5 sm:mt-8 sm:gap-3 lg:gap-x-5">
              {['Play-based learning', '8 months to 6 years', 'Half & full-day care'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 rounded-full border border-veda-border/70 bg-white px-2.5 py-1 text-[10.5px] font-semibold leading-none text-veda-primary sm:gap-1.5 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm sm:leading-normal"
                >
                  <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-veda-playful-green/30 sm:h-5 sm:w-5">
                    <Check size={10} className="sm:h-[11px] sm:w-[11px]" aria-hidden="true" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Full image composition — desktop only */}
          <div className="relative order-2 mx-auto hidden w-full max-w-[680px] pb-10 lg:block lg:order-2">
            <div className="absolute -right-7 top-10 h-32 w-32 rounded-full border-[18px] border-veda-accent/35" aria-hidden="true" />
            <div className="relative ml-auto aspect-[4/3] w-[92%] overflow-hidden rounded-[3rem] bg-veda-secondary shadow-[0_28px_70px_rgba(62,42,79,0.18)]">
              <img
                src="/about-children.jpg"
                alt="Children learning and celebrating together at The Veda Toddlers"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 max-w-[240px] rounded-3xl border border-white/80 bg-white/95 p-5 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-veda-accent text-veda-primary-dark">
                  <Sun size={23} aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold leading-5 text-veda-primary">
                  Learning with joyful energy, every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From The Founder — editorial letter composition */}
      <section className="relative overflow-hidden bg-veda-background-soft py-12 sm:py-16 md:py-24">
        {/* Atmosphere (not a card grid) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 12% 20%, rgba(242,193,78,0.18), transparent 42%), radial-gradient(circle at 88% 70%, rgba(207,198,223,0.45), transparent 48%)',
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-8 top-10 hidden text-veda-secondary/50 md:block"
          aria-hidden="true"
        >
          <Quote size={180} strokeWidth={1} />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1200px] items-stretch gap-8 px-4 sm:gap-10 sm:px-[3%] lg:grid-cols-12 lg:gap-0 lg:px-[4%]">
          {/* Portrait column */}
          <div className="relative lg:col-span-5 lg:mb-6 lg:pr-8">
            <div className="relative mx-auto max-w-sm lg:mx-0 lg:max-w-none lg:pb-8">
              {/* Accent plane behind photo */}
              <div
                className="absolute -inset-x-3 -bottom-3 top-8 rounded-[1.75rem] bg-veda-primary sm:-inset-x-4 sm:-bottom-4 sm:top-10 sm:rounded-[2rem]"
                aria-hidden="true"
              />
              <div className="absolute -left-2 top-16 hidden h-[55%] w-1.5 rounded-full bg-veda-accent sm:block lg:-left-3" aria-hidden="true" />

              <div className="relative overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_rgba(42,27,56,0.22)] sm:rounded-[1.75rem]">
                <img
                  src="/principal.jpg"
                  alt="Mandeep Sharma — Founder & Director of The Veda Toddlers"
                  className="aspect-[4/5] w-full object-cover object-top sm:aspect-[3/4]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-veda-primary-dark/90 via-veda-primary-dark/40 to-transparent px-4 pb-4 pt-16 sm:px-5 sm:pb-5 lg:hidden">
                  <p className="font-poppins text-lg font-bold text-white">Mandeep Sharma</p>
                  <p className="text-xs font-semibold text-veda-accent sm:text-sm">Founder & Director</p>
                </div>
              </div>

              {/* Desktop name plate overlapping photo */}
              <div className="absolute -bottom-5 left-4 right-4 hidden rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm lg:left-6 lg:right-auto lg:block lg:min-w-[240px]">
                <p className="font-poppins text-lg font-bold text-veda-primary">Mandeep Sharma</p>
                <p className="mt-0.5 text-sm font-semibold text-veda-accent">Founder & Director</p>
                <p className="mt-1 text-xs text-veda-text-muted">The Veda Toddlers</p>
              </div>
            </div>
          </div>

          {/* Letter column */}
          <div className="flex flex-col justify-center lg:col-span-7 lg:border-l lg:border-veda-secondary/60 lg:pl-10 xl:pl-14">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-veda-primary/70 sm:mb-3 sm:text-xs">
              A note from leadership
            </p>
            <h2 className="mb-5 font-poppins text-2xl font-bold leading-[1.15] text-veda-primary sm:mb-6 sm:text-4xl md:text-[2.75rem]">
              From the{' '}
              <span className="relative inline-block text-veda-accent">
                Founder
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-veda-accent/40" aria-hidden="true" />
              </span>
              <span className="text-veda-primary"> & Director</span>
            </h2>

            <Quote
              className="mb-3 h-8 w-8 text-veda-accent sm:mb-4 sm:h-10 sm:w-10"
              strokeWidth={1.75}
              aria-hidden="true"
            />

            <div className="space-y-3.5 text-sm leading-relaxed text-veda-text-DEFAULT sm:space-y-4 sm:text-base md:text-lg md:leading-relaxed">
              <p className="font-medium text-veda-primary">
                Being the Founder & Director of The Veda Toddlers is a privilege. Our preschool offers a warm,
                nurturing, and future-ready environment where every child feels safe, supported, and encouraged
                to explore.
              </p>
              <p>
                We are dedicated to early childhood education, ensuring each child&apos;s first school experience
                is joyful, meaningful, and filled with discovery.
              </p>
              <p>
                Our focus is on building confidence, healthy habits, emotional well-being, social skills, and
                curiosity through play-based, hands-on learning. By nurturing creativity and individuality, we
                help children learn naturally and develop a strong foundation of essential skills.
              </p>
              <p>
                I am confident that you and your child will cherish your time at The Veda Toddlers as we work
                together to build a bright future.
              </p>
            </div>

            <div className="mt-7 flex items-center gap-4 sm:mt-9">
              <div className="h-px flex-1 bg-gradient-to-r from-veda-accent via-veda-secondary to-transparent" />
              <div className="text-right">
                <p className="font-poppins text-base font-bold text-veda-primary sm:text-lg">— Mandeep Sharma</p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-veda-accent sm:text-xs">
                  Founder & Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section — purple brand theme */}
      <section className="relative overflow-hidden bg-gradient-to-br from-veda-primary-dark via-veda-primary to-veda-primary-light py-12 px-4 sm:py-16 sm:px-[3%] md:py-20">
        <div className="pointer-events-none absolute -left-16 top-8 h-48 w-48 rounded-full bg-veda-secondary/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-veda-accent/15 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[12%] top-1/3 h-24 w-24 rounded-full border-[10px] border-veda-secondary/15" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <div className="mb-8 text-center sm:mb-10 md:mb-12">
            <span className="mb-3 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-veda-accent sm:mb-4 sm:px-4 sm:text-xs">
              Moments that matter
            </span>
            <h2 className="mb-2 font-poppins text-2xl font-bold text-white sm:mb-3 sm:text-4xl md:text-5xl">
              Our <span className="text-veda-accent">Gallery</span>
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-veda-secondary-light sm:text-base md:text-lg">
              Glimpses of joyful learning and happy moments at The Veda Toddlers
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 md:gap-5">
            {[
              { src: '/images/gallery-1.jpg', alt: 'Fun group activity with children at The Veda Toddlers', wideMobile: true },
              { src: '/images/gallery-2.jpg', alt: 'World Post Day celebration at The Veda Toddlers' },
              { src: '/images/gallery-4.jpg', alt: 'Yoga and meditation session at The Veda Toddlers' },
              { src: '/images/gallery-5.jpg', alt: 'Art and craft activity at The Veda Toddlers' },
              { src: '/images/gallery-6.jpg', alt: 'Fun pirate party celebration at The Veda Toddlers' },
              { src: '/images/gallery-3.jpg', alt: 'Happy students at The Veda Toddlers', wideMobile: true },
            ].map((photo) => (
              <div
                key={photo.src}
                className={`group ${photo.wideMobile ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <div className={`relative w-full overflow-hidden rounded-xl border border-white/15 bg-veda-primary-dark/40 shadow-[0_12px_32px_rgba(0,0,0,0.25)] ring-1 ring-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:rounded-2xl ${photo.wideMobile ? 'h-[160px] sm:h-[200px] md:h-[260px]' : 'h-[140px] sm:h-[200px] md:h-[260px]'}`}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-veda-primary-dark/50 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center sm:mt-8 md:mt-10">
            <Button
              variant="primary"
              shape="pill"
              href="/gallery"
              className="bg-veda-accent px-6 py-2.5 text-sm font-bold text-veda-primary-dark hover:bg-veda-accent-dark sm:px-8 sm:py-3 sm:text-base"
            >
              View All Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Philosophy — KIDORA pillars (same slot as former Why Choose Us) */}
      <section className="anim-why-section py-12 px-4 sm:py-16 sm:px-[3%] md:py-24 bg-veda-background-DEFAULT">
        <h2 className="text-center text-2xl font-bold mb-2 text-veda-text-heading font-poppins sm:text-3xl sm:mb-3 md:text-4xl md:mb-4">Our Philosophy</h2>
        <p className="text-center text-veda-text-muted text-sm mb-8 max-w-2xl mx-auto leading-relaxed sm:text-base sm:mb-10 md:text-lg md:mb-12">
          The KIDORA way — how we nurture confident, curious, and kind little learners
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 max-w-[1400px] mx-auto">
          {philosophyPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="anim-why-card w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-19.2px)]"
            >
              <div className={`relative bg-gradient-to-br ${pillar.card} rounded-xl p-4 h-full border ${pillar.border} shadow-soft hover:shadow-softer hover:-translate-y-2 transition-all duration-300 group overflow-hidden sm:rounded-2xl sm:p-5 md:p-6`}>
                <div className="relative z-10">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pillar.iconBg} text-white mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform sm:w-12 sm:h-12 sm:mb-4 md:w-14 md:h-14 md:rounded-2xl md:mb-5`}>
                    <pillar.Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold mb-1.5 text-veda-text-heading text-center font-poppins leading-snug sm:text-lg sm:mb-2 md:mb-3">{pillar.title}</h3>
                  <p className="text-veda-text-muted text-xs text-center leading-relaxed sm:text-sm">{pillar.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 sm:mt-8 md:mt-10">
          <Button variant="outline" shape="pill" href="/about" className="text-sm px-5 py-2.5 sm:text-base">
            Learn more about us
          </Button>
        </div>
      </section>

      <StatsCounter />

      {/* Our Programs — Preschool, Daycare, After-School */}
      <section className="anim-programs-section py-12 px-4 sm:py-16 sm:px-[3%] md:py-24 bg-veda-background-muted">
        <h2 className="text-center text-2xl font-bold mb-2 text-veda-text-heading font-poppins sm:text-3xl sm:mb-3 md:text-4xl md:mb-4">Our Programs</h2>
        <p className="text-center text-veda-text-muted text-sm mb-8 max-w-2xl mx-auto leading-relaxed sm:text-base sm:mb-10 md:text-lg md:mb-12">
          Preschool, daycare, and after-school — three clear paths for every stage of early growth
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-[1400px] mx-auto">
          {/* Pre-School */}
          <div className="anim-program-card w-full md:w-[calc(33.333%-22px)]">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-softer transition-all duration-300 group h-full flex flex-col sm:rounded-3xl">
              <div className="relative h-36 overflow-hidden sm:h-44 md:h-52">
                <img src="/images/preschool-group.png" alt="Pre-School" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-primary/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <span className="inline-block bg-veda-accent text-veda-primary-dark py-1 px-3 rounded-full text-[10px] font-bold shadow-lg sm:py-1.5 sm:px-4 sm:text-xs">1 - 6 Years</span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1 sm:p-5 md:p-6">
                <h3 className="text-xl text-veda-text-heading mb-1.5 font-bold font-poppins sm:text-2xl sm:mb-2">Pre-School</h3>
                <p className="text-veda-text-muted mb-3 text-sm leading-relaxed sm:mb-4 sm:text-base">
                  Activity-based learning that nurtures early development, social skills, and creativity through the KIDORA levels.
                </p>
                <div className="flex flex-wrap gap-1 mb-4 sm:gap-1.5 sm:mb-5">
                  {preschoolLevels.map((level) => (
                    <span
                      key={level.name}
                      className="inline-flex items-center rounded-full border border-veda-border/80 bg-veda-background-soft px-2 py-0.5 text-[10px] font-semibold text-veda-primary sm:px-2.5 sm:py-1 sm:text-[11px]"
                    >
                      {level.name}
                      <span className="ml-1 font-medium text-veda-text-muted">{level.age}</span>
                    </span>
                  ))}
                </div>
                <Button variant="outline" shape="rounded" fullWidth href="/programs" className="mt-auto text-sm py-2.5 group-hover:bg-veda-primary group-hover:text-white group-hover:border-veda-primary transition-all sm:text-base sm:py-3">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          {/* Daycare — Featured */}
          <div className="anim-program-card w-full md:w-[calc(33.333%-22px)] md:-mt-4">
            <div className="relative bg-veda-primary rounded-2xl overflow-hidden shadow-softer transition-all duration-300 group h-full flex flex-col sm:rounded-3xl">
              <div className="absolute top-3 right-3 bg-veda-accent text-veda-primary-dark py-0.5 px-2.5 rounded-full text-[10px] font-bold z-10 sm:top-4 sm:right-4 sm:py-1 sm:px-3 sm:text-xs">Flexible Timings</div>
              <div className="relative h-36 overflow-hidden sm:h-44 md:h-52">
                <img src="/images/daycare-group.png" alt="Daycare" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-primary to-transparent"></div>
              </div>
              <div className="p-4 flex flex-col flex-1 sm:p-5 md:p-6">
                <span className="inline-block bg-veda-accent/20 text-veda-accent py-1 px-3 rounded-full text-[10px] font-bold mb-2 w-fit sm:py-1.5 sm:px-4 sm:text-xs sm:mb-3">8 Months+</span>
                <h3 className="text-xl text-white mb-1.5 font-bold font-poppins sm:text-2xl sm:mb-2">Daycare</h3>
                <p className="text-veda-secondary-light mb-3 text-sm leading-relaxed sm:mb-4 sm:text-base">
                  A safe, caring home away from home with structured activities and nutritious meals.
                </p>
                <ul className="space-y-1.5 mb-4 sm:space-y-2 sm:mb-5">
                  {daycareBenefits.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-white/90 sm:text-sm">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-veda-accent/25 sm:h-5 sm:w-5">
                        <Check size={10} className="text-veda-accent sm:h-3 sm:w-3" aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" shape="rounded" fullWidth href="/programs" className="mt-auto text-sm py-2.5 bg-veda-accent hover:bg-veda-accent-dark text-veda-primary-dark border-none sm:text-base sm:py-3">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          {/* After-School */}
          <div className="anim-program-card w-full md:w-[calc(33.333%-22px)]">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-softer transition-all duration-300 group h-full flex flex-col sm:rounded-3xl">
              <div className="relative h-36 overflow-hidden sm:h-44 md:h-52">
                <img src="/images/afterschool-child.png" alt="After-School" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-primary/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <span className="inline-block bg-veda-accent text-veda-primary-dark py-1 px-3 rounded-full text-[10px] font-bold shadow-lg sm:py-1.5 sm:px-4 sm:text-xs">2 Years+</span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1 sm:p-5 md:p-6">
                <h3 className="text-xl text-veda-text-heading mb-1.5 font-bold font-poppins sm:text-2xl sm:mb-2">After-School</h3>
                <p className="text-veda-text-muted mb-3 text-sm leading-relaxed sm:mb-4 sm:text-base">
                  Beyond academics — activities that build confidence, expression, and essential life skills.
                </p>
                <div className="flex flex-wrap gap-1 mb-4 sm:gap-1.5 sm:mb-5">
                  {afterSchoolActivities.map((name) => (
                    <span
                      key={name}
                      className="inline-flex items-center rounded-full border border-veda-border/80 bg-veda-background-soft px-2 py-0.5 text-[10px] font-semibold text-veda-primary sm:px-2.5 sm:py-1 sm:text-[11px]"
                    >
                      {name}
                    </span>
                  ))}
                </div>
                <Button variant="outline" shape="rounded" fullWidth href="/programs" className="mt-auto text-sm py-2.5 group-hover:bg-veda-primary group-hover:text-white group-hover:border-veda-primary transition-all sm:text-base sm:py-3">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Button variant="primary" shape="pill" href="/programs" className="text-sm px-5 py-2.5 sm:text-base">
            Explore All Programs
          </Button>
        </div>
      </section>

      {/* Key Offerings (same slot as former Facilities) */}
      <section className="anim-facilities-section py-12 px-4 sm:py-16 sm:px-[3%] md:py-24 bg-veda-background-DEFAULT">
        <h2 className="text-center font-poppins text-2xl font-bold text-veda-text-heading mb-2 sm:text-3xl sm:mb-3 md:text-4xl md:mb-4">
          Key Offerings
        </h2>
        <p className="text-center text-veda-text-muted text-sm mb-8 max-w-2xl mx-auto leading-relaxed sm:text-base sm:mb-12 md:text-lg md:mb-16">
          What parents can count on — curriculum, care, enrichment, and a safe campus
        </p>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {keyOfferings.map((item) => (
            <div key={item.title} className="anim-facility-card bg-white rounded-xl p-3.5 shadow-soft hover:shadow-softer hover:-translate-y-1 transition-all duration-300 flex gap-3 items-start group border border-veda-border sm:rounded-2xl sm:p-4 sm:gap-4 md:p-5">
              <div className={`w-10 h-10 min-w-[2.5rem] rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 text-white sm:w-12 sm:h-12 sm:min-w-[3rem] sm:rounded-xl md:w-14 md:h-14 md:min-w-[3.5rem]`}>
                <item.Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-veda-text-heading mb-1 font-poppins sm:text-lg sm:mb-1.5 md:text-xl">{item.title}</h3>
                <p className="text-veda-text-muted text-xs leading-relaxed sm:text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Franchise Highlight */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-veda-primary overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>

        <div className="absolute top-10 left-10 w-32 h-32 bg-veda-accent probability-0 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-veda-playful-blue rounded-full blur-[80px] opacity-30"></div>
        <div className="absolute top-1/2 left-[15%] w-4 h-4 bg-veda-accent rounded-full opacity-60"></div>
        <div className="absolute top-[30%] right-[20%] w-6 h-6 border-2 border-veda-secondary-light rounded-full opacity-40"></div>
        <div className="absolute bottom-[20%] left-[25%] w-3 h-3 bg-white rounded-full opacity-40"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block py-1 px-4 rounded-full bg-veda-accent/20 text-veda-accent font-bold uppercase tracking-widest text-xs mb-6 border border-veda-accent/30 backdrop-blur-sm">
              Growth Opportunity
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-poppins text-white mb-6 leading-tight">
              Partner With <span className="text-veda-accent relative inline-block">
                The Veda
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-veda-accent opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                </svg>
              </span>
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-veda-secondary-light mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              Join India's fastest-growing preschool network. We provide the blueprint, training, and support to build your own legacy of education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" shape="pill" href="/franchise" className="bg-veda-accent hover:bg-veda-accent-dark text-veda-primary-dark font-bold px-10 py-4 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                Start Your Franchise
              </Button>
              <Button variant="outline" shape="pill" href="/contact" className="border-veda-secondary-light text-veda-secondary-light hover:bg-white/10 hover:border-white hover:text-white px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-veda-background-soft"></path>
          </svg>
        </div>
      </section>

      {/* Our Branches - Coming Soon */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-amber-50 via-pink-50 to-sky-50 relative overflow-hidden">
        <div className="absolute top-10 left-[5%] text-6xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>🏠</div>
        <div className="absolute top-20 right-[10%] text-5xl opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>⭐</div>
        <div className="absolute bottom-20 left-[15%] text-4xl opacity-20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>🌈</div>
        <div className="absolute bottom-10 right-[8%] text-5xl opacity-20 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '2s' }}>🎈</div>

        <div className="absolute top-16 left-[20%] w-20 h-8 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-14 left-[22%] w-10 h-6 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-32 right-[25%] w-16 h-6 bg-white rounded-full opacity-50"></div>
        <div className="absolute top-30 right-[27%] w-8 h-4 bg-white rounded-full opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-14">
            <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white shadow-md text-veda-primary font-bold text-sm mb-6 border-2 border-dashed border-veda-accent">
              <span className="text-xl">🌟</span>
              <span>Coming Soon Near You!</span>
              <span className="text-xl">🌟</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-poppins text-veda-primary mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Learning Homes</span>
            </h2>
            <p className="text-veda-text-muted text-sm sm:text-lg max-w-xl mx-auto">
              Building new playful spaces for little learners across the city!
            </p>
          </div>

          <div className="anim-branches-section grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Sector 105', city: 'Mohali', iconColor: 'text-purple-500', bgColor: 'bg-gradient-to-b from-purple-100 to-purple-200', borderColor: 'border-purple-300' },
              { name: 'Sector 79', city: 'Mohali', iconColor: 'text-amber-500', bgColor: 'bg-gradient-to-b from-amber-100 to-amber-200', borderColor: 'border-amber-300' },
              { name: 'Sector 127', city: 'Mohali', iconColor: 'text-sky-500', bgColor: 'bg-gradient-to-b from-sky-100 to-sky-200', borderColor: 'border-sky-300' },
              { name: 'Zirakpur', city: 'Mohali', iconColor: 'text-pink-500', bgColor: 'bg-gradient-to-b from-pink-100 to-pink-200', borderColor: 'border-pink-300' },
              { name: 'Panchkula', city: 'Haryana', iconColor: 'text-emerald-500', bgColor: 'bg-gradient-to-b from-emerald-100 to-emerald-200', borderColor: 'border-emerald-300' },
              { name: 'Ambala', city: 'Haryana', iconColor: 'text-rose-500', bgColor: 'bg-gradient-to-b from-rose-100 to-rose-200', borderColor: 'border-rose-300' },
            ].map((branch, index) => (
              <div key={index} className="anim-branch-card group">
                <div className={`relative ${branch.bgColor} rounded-3xl p-5 sm:p-6 pt-5 sm:pt-6 pb-6 sm:pb-8 text-center border-2 ${branch.borderColor} shadow-lg hover:shadow-xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer min-h-[160px] flex flex-col justify-center`}>
                  <div className={`${branch.iconColor} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-12 h-12 mx-auto drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold font-poppins text-gray-700 text-sm sm:text-lg mb-1">{branch.name}</h3>
                  <p className="text-gray-500 text-sm">{branch.city}</p>
                  <div className="absolute -top-1 -right-1 bg-veda-accent text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-lg rounded-tr-3xl shadow-sm">
                    SOON ✨
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <div className="inline-block bg-white rounded-2xl px-8 py-4 shadow-lg border-2 border-dashed border-veda-secondary">
              <p className="text-veda-text-muted mb-3 text-sm">Want a Veda school in your neighborhood?</p>
              <Button variant="primary" shape="pill" href="/franchise" className="bg-gradient-to-r from-veda-primary to-purple-600 hover:from-purple-600 hover:to-veda-primary text-white shadow-md">
                🤝 Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

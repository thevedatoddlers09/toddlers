'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/Button';
import HeroCarousel from '@/components/HeroCarousel';
import AdmissionsPopup from '@/components/AdmissionsPopup';
import StatsCounter from '@/components/StatsCounter';
import { Award, ShieldCheck, Heart, Flower2, School, Shield, FerrisWheel, Laptop, Bus, Hospital, ArrowRight, Check, Sun } from 'lucide-react';

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Programs Stagger
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

      // Why Us Stagger
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

      // Facilities Stagger
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

      // Branches Section Animation
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

      {/* Welcome / Philosophy */}
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

      {/* From The Founder & Director Section */}
      <section className="py-20 px-[3%] bg-gradient-to-br from-veda-secondary-light/40 via-veda-playful-blue/10 to-white relative overflow-hidden">
        {/* Decorative Hearts */}
        <div className="absolute top-20 right-20 text-veda-primary/20">
          <Heart size={40} />
        </div>
        <div className="absolute bottom-20 right-40 text-veda-primary/15">
          <Heart size={30} />
        </div>
        <div className="absolute top-1/3 right-16 text-veda-primary/10">
          <Heart size={25} />
        </div>
        <div className="absolute bottom-1/4 left-20 w-32 h-32 bg-veda-accent/5 rounded-full blur-3xl"></div>

        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="lg:w-2/5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-veda-primary/20 to-veda-playful-green/20 rounded-3xl transform -rotate-3"></div>
                <div className="relative bg-gradient-to-br from-veda-primary-light to-veda-primary rounded-3xl p-1 shadow-softer">
                  <img
                    src="/principal.jpg"
                    alt="Mandeep Sharma - Founder & Director"
                    className="rounded-3xl w-full object-cover aspect-[3/4]"
                  />
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="lg:w-3/5">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 leading-tight">
                <span className="text-veda-primary">From The</span> <span className="text-veda-accent">Founder & Director</span>
              </h2>
              <div className="space-y-4 text-lg text-veda-text-DEFAULT leading-relaxed italic">
                <p>
                  "Being the Founder & Director of The Veda Toddlers is a privilege. Our preschool offers a warm, nurturing, and future-ready environment where every child feels safe, supported, and encouraged to explore."
                </p>
                <p>
                  "We are dedicated to early childhood education, ensuring each child's first school experience is joyful, meaningful, and filled with discovery."
                </p>
                <p>
                  "Our focus is on building confidence, healthy habits, emotional well-being, social skills, and curiosity through play-based, hands-on learning. By nurturing creativity and individuality, we help children learn naturally and develop a strong foundation of essential skills."
                </p>
                <p>
                  "I am confident that you and your child will cherish your time at The Veda Toddlers as we work together to build a bright future."
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-veda-secondary">
                <h3 className="text-xl font-bold text-veda-primary font-poppins">Mandeep Sharma</h3>
                <p className="text-veda-accent font-semibold">(Founder & Director, The Veda Toddlers)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-[3%] bg-gradient-to-br from-veda-secondary-light/20 via-white to-veda-playful-blue/10 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-veda-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-veda-playful-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-20 text-veda-accent/10">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-veda-primary mb-4">
              Our <span className="text-veda-accent">Gallery</span>
            </h2>
            <p className="text-veda-text-muted text-lg max-w-2xl mx-auto">
              Glimpses of joyful learning and happy moments at The Veda Toddlers
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {/* Photo Box 1 - Group Activity */}
            <div className="col-span-2 md:col-span-1 group">
              <div className="relative w-full h-[220px] md:h-[280px] bg-gradient-to-br from-veda-secondary-light to-veda-secondary rounded-2xl overflow-hidden shadow-soft hover:shadow-softer transition-all duration-300 border border-veda-border">
                <img
                  src="/images/gallery-1.jpg"
                  alt="Fun group activity with children at The Veda Toddlers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Photo Box 2 - World Post Day */}
            <div className="group">
              <div className="relative w-full h-[220px] md:h-[280px] bg-gradient-to-br from-veda-playful-peach/30 to-veda-playful-peach/50 rounded-2xl overflow-hidden shadow-soft hover:shadow-softer transition-all duration-300 border border-veda-border">
                <img
                  src="/images/gallery-2.jpg"
                  alt="World Post Day celebration at The Veda Toddlers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Photo Box 3 - Happy Students */}
            <div className="group">
              <div className="relative w-full h-[220px] md:h-[280px] bg-gradient-to-br from-veda-playful-green/30 to-veda-playful-green/50 rounded-2xl overflow-hidden shadow-soft hover:shadow-softer transition-all duration-300 border border-veda-border">
                <img
                  src="/images/gallery-3.jpg"
                  alt="Happy students at The Veda Toddlers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Photo Box 4 - Yoga Session */}
            <div className="group">
              <div className="relative w-full h-[220px] md:h-[280px] bg-gradient-to-br from-veda-playful-blue/30 to-veda-playful-blue/50 rounded-2xl overflow-hidden shadow-soft hover:shadow-softer transition-all duration-300 border border-veda-border">
                <img
                  src="/images/gallery-4.jpg"
                  alt="Yoga and meditation session at The Veda Toddlers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Photo Box 5 - Art Activity */}
            <div className="group">
              <div className="relative w-full h-[220px] md:h-[280px] bg-gradient-to-br from-veda-accent/20 to-veda-accent/40 rounded-2xl overflow-hidden shadow-soft hover:shadow-softer transition-all duration-300 border border-veda-border">
                <img
                  src="/images/gallery-5.jpg"
                  alt="Art and craft activity at The Veda Toddlers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Photo Box 6 - Pirate Party */}
            <div className="group">
              <div className="relative w-full h-[220px] md:h-[280px] bg-gradient-to-br from-veda-primary/10 to-veda-primary/25 rounded-2xl overflow-hidden shadow-soft hover:shadow-softer transition-all duration-300 border border-veda-border">
                <img
                  src="/images/gallery-6.jpg"
                  alt="Fun pirate party celebration at The Veda Toddlers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <Button variant="primary" shape="pill" href="/activities">
              View All Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="anim-why-section py-24 px-[3%] bg-veda-background-DEFAULT">
        <h2 className="text-center text-4xl font-bold mb-4 text-veda-text-heading font-poppins">Why Choose Us?</h2>
        <p className="text-center text-veda-text-muted text-lg mb-12 max-w-2xl mx-auto">Discover what makes The Veda Toddlers the perfect choice for your child's early education</p>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Kidora Curriculum - Golden Theme */}
          <div className="anim-why-card w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <div className="relative bg-gradient-to-br from-veda-accent/10 via-white to-veda-accent/5 rounded-2xl p-6 h-full border border-veda-accent/20 shadow-soft hover:shadow-softer hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-veda-accent/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-veda-accent/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-veda-accent to-veda-accent-dark text-white mx-auto mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Award size={30} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-veda-text-heading text-center">Kidora Curriculum</h3>
                <p className="text-veda-text-muted text-base text-center leading-relaxed">A research-backed curriculum designed to nurture cognitive, social, and emotional growth through age-appropriate activities.</p>
              </div>
            </div>
          </div>

          {/* Joyful Learning - Green Theme */}
          <div className="anim-why-card w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <div className="relative bg-gradient-to-br from-veda-playful-green/15 via-white to-veda-playful-green/5 rounded-2xl p-6 h-full border border-veda-playful-green/20 shadow-soft hover:shadow-softer hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-veda-playful-green/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-veda-playful-green/30 rounded-full"></div>
              <div className="absolute top-1/2 right-4 w-2 h-2 bg-veda-playful-green/20 rounded-full"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-veda-playful-green to-green-600 text-white mx-auto mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Heart size={30} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-veda-text-heading text-center">Joyful Learning</h3>
                <p className="text-veda-text-muted text-base text-center leading-relaxed">Learning through play, music, and exploration that makes every day exciting and keeps children naturally curious.</p>
              </div>
            </div>
          </div>

          {/* Imagination Based Learning - Peach Theme */}
          <div className="anim-why-card w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <div className="relative bg-gradient-to-br from-veda-playful-peach/15 via-white to-rose-50 rounded-2xl p-6 h-full border border-veda-playful-peach/20 shadow-soft hover:shadow-softer hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-4 right-4 text-veda-playful-peach/20">
                <Flower2 size={60} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-veda-playful-peach to-rose-400 text-white mx-auto mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Flower2 size={30} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-veda-text-heading text-center">Imagination Based Learning</h3>
                <p className="text-veda-text-muted text-base text-center leading-relaxed">Encouraging creative thinking through storytelling, art, and pretend play that sparks innovation and self-expression.</p>
              </div>
            </div>
          </div>

          {/* Global Approach with Indian Values - Purple Theme */}
          <div className="anim-why-card w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <div className="relative bg-gradient-to-br from-veda-secondary/40 via-white to-veda-secondary/20 rounded-2xl p-6 h-full border border-veda-secondary shadow-soft hover:shadow-softer hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
              <div className="absolute -bottom-4 -right-4 text-veda-secondary/30">
                <ShieldCheck size={80} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-veda-primary to-veda-primary-dark text-white mx-auto mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <ShieldCheck size={30} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-veda-text-heading text-center">Global Approach with Indian Values</h3>
                <p className="text-veda-text-muted text-base text-center leading-relaxed">Blending international early education standards with cultural roots, traditions, and values that shape character.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Featured Programs Section */}
      <section className="anim-programs-section py-24 px-[3%] bg-veda-background-muted">
        <h2 className="text-center text-4xl font-bold mb-4 text-veda-text-heading font-poppins">Our Programs</h2>
        <p className="text-center text-veda-text-muted text-lg mb-12 max-w-2xl mx-auto">Age-appropriate programs designed to nurture every stage of early development</p>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Pre-School Program */}
          <div className="anim-program-card w-full md:w-[calc(33.333%-22px)]">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-softer transition-all duration-300 group">
              <div className="relative h-52 overflow-hidden">
                <img src="/images/preschool-group.png" alt="Pre-School" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-veda-accent text-veda-primary-dark py-1.5 px-4 rounded-full text-xs font-bold shadow-lg">1 - 6 Years</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-veda-text-heading mb-2 font-bold font-poppins">Pre-School</h3>
                <p className="text-veda-text-muted mb-5 text-base leading-relaxed">Activity-based learning meant to nurture early development, social skills, and creativity.</p>
                <Button variant="outline" shape="rounded" fullWidth href="/programs" className="group-hover:bg-veda-primary group-hover:text-white group-hover:border-veda-primary transition-all">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          {/* Daycare Program - Featured */}
          <div className="anim-program-card w-full md:w-[calc(33.333%-22px)] md:-mt-4">
            <div className="relative bg-veda-primary rounded-3xl overflow-hidden shadow-softer transition-all duration-300 group">
              <div className="absolute top-4 right-4 bg-veda-accent text-veda-primary-dark py-1 px-3 rounded-full text-xs font-bold z-10">Flexible Timings</div>
              <div className="relative h-52 overflow-hidden">
                <img src="/images/daycare-group.png" alt="Daycare" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-primary to-transparent"></div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-veda-accent/20 text-veda-accent py-1.5 px-4 rounded-full text-xs font-bold mb-3">8 Months+</span>
                <h3 className="text-2xl text-white mb-2 font-bold font-poppins">Daycare</h3>
                <p className="text-veda-secondary-light mb-5 text-base leading-relaxed">A safe, caring "home away from home" with structured activities and nutritious meals.</p>
                <Button variant="primary" shape="rounded" fullWidth href="/programs" className="bg-veda-accent hover:bg-veda-accent-dark text-veda-primary-dark border-none">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          {/* After-School Program */}
          <div className="anim-program-card w-full md:w-[calc(33.333%-22px)]">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-softer transition-all duration-300 group">
              <div className="relative h-52 overflow-hidden">
                <img src="/images/afterschool-child.png" alt="After-School" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-veda-accent text-veda-primary-dark py-1.5 px-4 rounded-full text-xs font-bold shadow-lg">2 Years+</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-veda-text-heading mb-2 font-bold font-poppins">After-School</h3>
                <p className="text-veda-text-muted mb-5 text-base leading-relaxed">Beyond academics: Dance, Art, Music, and more to build confidence and essential life skills.</p>
                <Button variant="outline" shape="rounded" fullWidth href="/programs" className="group-hover:bg-veda-primary group-hover:text-white group-hover:border-veda-primary transition-all">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button variant="primary" shape="pill" href="/programs">
            Explore All Programs
          </Button>
        </div>
      </section>

      {/* Facilities & Infrastructure Section */}
      <section className="anim-facilities-section py-24 px-[3%] bg-veda-background-DEFAULT">
        <h2 className="text-center font-poppins text-4xl font-bold text-veda-text-heading mb-4">
          World-Class Facilities
        </h2>
        <p className="text-center text-veda-text-muted text-lg mb-16 max-w-2xl mx-auto">Modern infrastructure designed with children's safety and learning in mind</p>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Classrooms', desc: 'Safe, hygienic, bright, and spacious with strictly sanitized materials.', Icon: School, gradient: 'from-veda-accent to-amber-500' },
            { title: 'Security', desc: '24x7 CCTV surveillance covering the entire campus with monitored entry/exit.', Icon: Shield, gradient: 'from-veda-primary to-veda-primary-dark' },
            { title: 'Play Areas', desc: 'Dedicated indoor and outdoor play zones with soft flooring for safety.', Icon: FerrisWheel, gradient: 'from-veda-playful-green to-green-500' },
            { title: 'Technology', desc: 'Smart learning rooms with interactive digital tools and audio-visual aids.', Icon: Laptop, gradient: 'from-veda-playful-blue to-blue-500' },
            { title: 'Transport', desc: 'Managed facility with trained drivers and attendants following safety protocols.', Icon: Bus, gradient: 'from-veda-secondary-dark to-purple-600' },
            { title: 'Health First', desc: 'Fully equipped medical first-aid station with trained staff for immediate care.', Icon: Hospital, gradient: 'from-veda-playful-peach to-rose-400' },
          ].map((item, idx) => (
            <div key={idx} className="anim-facility-card bg-white rounded-2xl p-5 shadow-soft hover:shadow-softer hover:-translate-y-1 transition-all duration-300 flex gap-4 items-start group border border-veda-border">
              <div className={`w-14 h-14 min-w-[3.5rem] rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 text-white`}>
                <item.Icon size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-veda-text-heading mb-1.5 font-poppins">{item.title}</h3>
                <p className="text-veda-text-muted text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Franchise Highlight (Redesigned) */}
      <section className="relative py-32 bg-veda-primary overflow-hidden">
        {/* Top Wave Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-veda-background-DEFAULT"></path>
          </svg>
        </div>

        {/* Background Decorations */}
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
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 leading-tight">
              Partner With <span className="text-veda-accent relative inline-block">
                The Veda
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-veda-accent opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                </svg>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-veda-secondary-light mb-10 font-light max-w-2xl mx-auto leading-relaxed">
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

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-veda-background-soft"></path>
          </svg>
        </div>
      </section>

      {/* Our Branches - Coming Soon */}
      <section className="py-20 bg-gradient-to-b from-amber-50 via-pink-50 to-sky-50 relative overflow-hidden">
        {/* Playful Background Elements */}
        <div className="absolute top-10 left-[5%] text-6xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>🏠</div>
        <div className="absolute top-20 right-[10%] text-5xl opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>⭐</div>
        <div className="absolute bottom-20 left-[15%] text-4xl opacity-20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>🌈</div>
        <div className="absolute bottom-10 right-[8%] text-5xl opacity-20 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '2s' }}>🎈</div>

        {/* Cloud decorations */}
        <div className="absolute top-16 left-[20%] w-20 h-8 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-14 left-[22%] w-10 h-6 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-32 right-[25%] w-16 h-6 bg-white rounded-full opacity-50"></div>
        <div className="absolute top-30 right-[27%] w-8 h-4 bg-white rounded-full opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white shadow-md text-veda-primary font-bold text-sm mb-6 border-2 border-dashed border-veda-accent">
              <span className="text-xl">🌟</span>
              <span>Coming Soon Near You!</span>
              <span className="text-xl">🌟</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-veda-primary mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Learning Homes</span>
            </h2>
            <p className="text-veda-text-muted text-lg max-w-xl mx-auto">
              Building new playful spaces for little learners across the city!
            </p>
          </div>

          {/* Branches Grid - Cards with Animation */}
          <div className="anim-branches-section grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Sector 105', city: 'Mohali', iconColor: 'text-purple-500', bgColor: 'bg-gradient-to-b from-purple-100 to-purple-200', borderColor: 'border-purple-300' },
              { name: 'Sector 79', city: 'Mohali', iconColor: 'text-amber-500', bgColor: 'bg-gradient-to-b from-amber-100 to-amber-200', borderColor: 'border-amber-300' },
              { name: 'Sector 127', city: 'Mohali', iconColor: 'text-sky-500', bgColor: 'bg-gradient-to-b from-sky-100 to-sky-200', borderColor: 'border-sky-300' },
              { name: 'Zirakpur', city: 'Mohali', iconColor: 'text-pink-500', bgColor: 'bg-gradient-to-b from-pink-100 to-pink-200', borderColor: 'border-pink-300' },
              { name: 'Panchkula', city: 'Haryana', iconColor: 'text-emerald-500', bgColor: 'bg-gradient-to-b from-emerald-100 to-emerald-200', borderColor: 'border-emerald-300' },
              { name: 'Ambala', city: 'Haryana', iconColor: 'text-rose-500', bgColor: 'bg-gradient-to-b from-rose-100 to-rose-200', borderColor: 'border-rose-300' },
            ].map((branch, index) => (
              <div key={index} className="anim-branch-card group">
                {/* Card without roof */}
                <div className={`relative ${branch.bgColor} rounded-3xl p-6 pt-6 pb-8 text-center border-2 ${branch.borderColor} shadow-lg hover:shadow-xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer min-h-[160px] flex flex-col justify-center`}>

                  {/* Location Pin Icon */}
                  <div className={`${branch.iconColor} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-12 h-12 mx-auto drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>

                  {/* Branch Name */}
                  <h3 className="font-bold font-poppins text-gray-700 text-lg mb-1">{branch.name}</h3>
                  <p className="text-gray-500 text-sm">{branch.city}</p>

                  {/* Coming Soon Ribbon */}
                  <div className="absolute -top-1 -right-1 bg-veda-accent text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-lg rounded-tr-3xl shadow-sm">
                    SOON ✨
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
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

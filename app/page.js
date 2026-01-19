'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/Button';
import Card from '@/components/Card';
import HeroCarousel from '@/components/HeroCarousel';
import AdmissionsPopup from '@/components/AdmissionsPopup';
import StatsCounter from '@/components/StatsCounter';
import { Award, ShieldCheck, Heart, Flower2, School, Shield, FerrisWheel, Laptop, Bus, Hospital } from 'lucide-react';

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // About Section Animation
      gsap.from('.anim-about-text', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.anim-about-section',
          start: 'top 80%',
        }
      });
      gsap.from('.anim-about-image', {
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: '.anim-about-section',
          start: 'top 80%',
        }
      });

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

      {/* About The Veda Toddlers Section */}
      <section className="anim-about-section py-20 px-[3%] bg-gradient-to-br from-veda-playful-blue/10 via-white to-veda-secondary-light/20 relative overflow-hidden">
        {/* Decorative Handprints */}
        <div className="absolute top-10 right-10 text-veda-primary/10 rotate-12">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S11.17 2.5 12 2.5s1.5.67 1.5 1.5S12.83 5.5 12 5.5M5.5 8C4.67 8 4 7.33 4 6.5S4.67 5 5.5 5 7 5.67 7 6.5 6.33 8 5.5 8m13 0c-.83 0-1.5-.67-1.5-1.5S17.67 5 18.5 5s1.5.67 1.5 1.5S19.33 8 18.5 8M19.5 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-15 0c-.83 0-1.5-.67-1.5-1.5S3.67 18 4.5 18s1.5.67 1.5 1.5S5.33 21 4.5 21" />
          </svg>
        </div>
        <div className="absolute bottom-16 right-32 text-veda-primary/15 -rotate-12">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S11.17 2.5 12 2.5s1.5.67 1.5 1.5S12.83 5.5 12 5.5M5.5 8C4.67 8 4 7.33 4 6.5S4.67 5 5.5 5 7 5.67 7 6.5 6.33 8 5.5 8m13 0c-.83 0-1.5-.67-1.5-1.5S17.67 5 18.5 5s1.5.67 1.5 1.5S19.33 8 18.5 8M19.5 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-15 0c-.83 0-1.5-.67-1.5-1.5S3.67 18 4.5 18s1.5.67 1.5 1.5S5.33 21 4.5 21" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-veda-accent/10 rounded-full blur-2xl"></div>

        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content */}
            <div className="anim-about-text lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins text-veda-primary mb-6 leading-tight">
                About <span className="text-veda-accent">The Veda Toddlers</span>
              </h2>
              <div className="space-y-4 text-lg text-veda-text-DEFAULT leading-relaxed">
                <p>
                  The Veda Toddlers is a <strong className="text-veda-primary">new-age preschool and daycare</strong> for children aged <strong className="text-veda-accent-dark">1 to 6 years</strong>, built on joyful, holistic, and experiential learning.
                </p>
                <p>
                  Founded by <strong className="text-veda-primary">Mandeep Sharma</strong>, it blends global early education standards with rich Indian values. Every Veda school nurtures confident, kind, and creative learners through a child-centered philosophy, research-based curriculum, and warm, supportive environment — <em className="text-veda-primary">redefining early education, one happy childhood at a time.</em>
                </p>
              </div>
              <div className="mt-8">
                <Button variant="primary" shape="pill" href="/about">
                  Learn More About Us
                </Button>
              </div>
            </div>
            {/* Image */}
            <div className="anim-about-image lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-veda-accent/20 to-veda-primary/20 rounded-3xl transform rotate-3"></div>
                <img
                  src="/about-children.jpg"
                  alt="Happy children at The Veda Toddlers"
                  className="relative rounded-3xl shadow-softer w-full object-cover aspect-[4/3]"
                />
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-veda-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-veda-playful-green rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-xl">📚</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From The Principal Section */}
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
                    src="/principal.png"
                    alt="Mandeep Sharma - Principal"
                    className="rounded-3xl w-full object-cover aspect-[3/4]"
                  />
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="lg:w-3/5">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 leading-tight">
                <span className="text-veda-primary">From The</span> <span className="text-veda-accent">Principal</span>
              </h2>
              <div className="space-y-4 text-lg text-veda-text-DEFAULT leading-relaxed italic">
                <p>
                  "Being the Principal of The Veda Toddlers is a privilege. Our preschool offers a warm, nurturing, and future-ready environment where every child feels safe, supported, and encouraged to explore."
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

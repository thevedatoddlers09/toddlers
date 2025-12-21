import Button from '@/components/Button';
import Card from '@/components/Card';
import HeroCarousel from '@/components/HeroCarousel';
import AdmissionsPopup from '@/components/AdmissionsPopup';
import StatsCounter from '@/components/StatsCounter';
import LocationMap from '@/components/LocationMap';
import { Award, ShieldCheck, Heart, Flower2, School, Shield, FerrisWheel, Laptop, Bus, Hospital } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <AdmissionsPopup />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Why Us Section */}
      <section className="py-24 px-[5%] bg-veda-background-DEFAULT">
        <h2 className="text-center text-4xl font-bold mb-12 text-veda-text-heading font-poppins">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <Card hoverEffect className="text-center h-full">
              <div className="w-14 h-14 rounded-xl bg-veda-accent/15 text-veda-accent mx-auto mb-5 flex items-center justify-center">
                <Award size={26} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-veda-text-heading">Award Winning Curriculum</h3>
              <p className="text-veda-text-muted text-sm">Designed by experts to foster holistic development.</p>
            </Card>
          </div>

          <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <Card hoverEffect className="text-center h-full">
              <div className="w-14 h-14 rounded-xl bg-veda-playful-green/20 text-veda-playful-green mx-auto mb-5 flex items-center justify-center">
                <ShieldCheck size={26} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-veda-text-heading">Safe & Secure</h3>
              <p className="text-veda-text-muted text-sm">CCTV monitored functionality and child-safe infrastructure.</p>
            </Card>
          </div>

          <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <Card hoverEffect className="text-center h-full">
              <div className="w-14 h-14 rounded-xl bg-veda-playful-peach/20 text-veda-playful-peach mx-auto mb-5 flex items-center justify-center">
                <Heart size={26} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-veda-text-heading">Passionate Educators</h3>
              <p className="text-veda-text-muted text-sm">Highly trained teachers who treat every child with love.</p>
            </Card>
          </div>

          <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <Card hoverEffect className="text-center h-full">
              <div className="w-14 h-14 rounded-xl bg-veda-secondary/30 text-veda-primary mx-auto mb-5 flex items-center justify-center">
                <Flower2 size={26} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-veda-text-heading">Seven Petal Approach</h3>
              <p className="text-veda-text-muted text-sm">Ensuring development across all key skills and senses.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-24 px-[5%] bg-veda-background-muted">
        <h2 className="text-center text-4xl font-bold mb-12 text-veda-text-heading font-poppins">Our Programs</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full md:w-[calc(33.333%-16px)]">
            <Card className="flex flex-col h-full" padding="small" image="https://images.unsplash.com/photo-1596464716127-f9a0639b9de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80">
              <div className="inline-block bg-veda-secondary-light py-1 px-3 rounded-full text-xs font-bold text-veda-primary mb-4 self-start">2-3 Years</div>
              <h3 className="text-xl text-veda-text-heading mb-2 font-bold font-poppins">Toddlers</h3>
              <p className="text-veda-text-muted mb-6 flex-grow text-sm">A fun-filled beginning to your child's learning journey.</p>
              <Button variant="outline" shape="rounded" fullWidth href="/programs">
                View Details
              </Button>
            </Card>
          </div>

          <div className="w-full md:w-[calc(33.333%-16px)]">
            <Card className="flex flex-col h-full" padding="small" image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80">
              <div className="inline-block bg-veda-secondary-light py-1 px-3 rounded-full text-xs font-bold text-veda-primary mb-4 self-start">3-4 Years</div>
              <h3 className="text-xl text-veda-text-heading mb-2 font-bold font-poppins">Nursery</h3>
              <p className="text-veda-text-muted mb-6 flex-grow text-sm">Building foundational skills through play and exploration.</p>
              <Button variant="outline" shape="rounded" fullWidth href="/programs">
                View Details
              </Button>
            </Card>
          </div>

          <div className="w-full md:w-[calc(33.333%-16px)]">
            <Card className="flex flex-col h-full" padding="small" image="https://images.unsplash.com/photo-1587654780291-39c940483719?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80">
              <div className="inline-block bg-veda-secondary-light py-1 px-3 rounded-full text-xs font-bold text-veda-primary mb-4 self-start">4-6 Years</div>
              <h3 className="text-xl text-veda-text-heading mb-2 font-bold font-poppins">Kindergarten</h3>
              <p className="text-veda-text-muted mb-6 flex-grow text-sm">Preparing children for formal schooling with confidence.</p>
              <Button variant="outline" shape="rounded" fullWidth href="/programs">
                View Details
              </Button>
            </Card>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button variant="primary" shape="pill" href="/programs">
            Explore All Programs
          </Button>
        </div>
      </section>

      {/* Facilities & Infrastructure Section */}
      <section className="py-24 px-[5%] bg-veda-background-DEFAULT">
        <h2 className="text-center font-poppins text-4xl font-bold text-veda-text-heading mb-16 relative uppercase tracking-wide after:content-[''] after:block after:w-12 after:h-1 after:bg-veda-accent after:mx-auto after:mt-4 after:rounded-full">
          World-Class Facilities
        </h2>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-y-10 gap-x-8">
          {[
            { title: 'Classrooms', desc: 'Safe, hygienic, bright, and spacious with strictly sanitized materials.', Icon: School, color: 'bg-veda-accent' },
            { title: 'Security', desc: '24x7 CCTV surveillance covering the entire campus with monitored entry/exit.', Icon: Shield, color: 'bg-veda-primary' },
            { title: 'Play Areas', desc: 'Dedicated indoor and outdoor play zones with soft flooring for safety.', Icon: FerrisWheel, color: 'bg-veda-playful-green' },
            { title: 'Technology', desc: 'Smart learning rooms with interactive digital tools and audio-visual aids.', Icon: Laptop, color: 'bg-veda-playful-blue' },
            { title: 'Transport', desc: 'Managed facility with trained drivers and attendants following strictly safety protocols.', Icon: Bus, color: 'bg-veda-secondary-dark' },
            { title: 'Health First', desc: 'Fully equipped medical first-aid station with trained staff for immediate care.', Icon: Hospital, color: 'bg-veda-playful-peach' },
          ].map((item, idx) => (
            <div key={idx} className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] flex gap-4 items-start group">
              <div className={`w-12 h-12 min-w-[3rem] rounded-xl flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform duration-300 text-veda-primary ${item.color}`}>
                <item.Icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-veda-text-heading mb-1 font-poppins">{item.title}</h3>
                <p className="text-veda-text-muted text-sm leading-relaxed">{item.desc}</p>
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

      {/* Location Map */}
      <LocationMap />
    </main>
  );
}

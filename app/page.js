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

      {/* About The Veda Toddlers Section */}
      <section className="py-20 px-[3%] bg-gradient-to-br from-veda-playful-blue/10 via-white to-veda-secondary-light/20 relative overflow-hidden">
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
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins text-veda-primary mb-6 leading-tight">
                About <span className="text-veda-accent">The Veda Toddlers</span>
              </h2>
              <div className="space-y-4 text-lg text-veda-text-DEFAULT leading-relaxed">
                <p>
                  The Veda Toddlers is a <strong className="text-veda-primary">new-age preschool and daycare</strong> for children aged <strong className="text-veda-accent-dark">1.5 to 6 years</strong>, built on joyful, holistic, and experiential learning.
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
            <div className="lg:w-1/2 order-1 lg:order-2">
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
                <p className="text-veda-accent font-semibold">(Principal, The Veda Toddlers)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-[3%] bg-veda-background-DEFAULT">
        <h2 className="text-center text-4xl font-bold mb-4 text-veda-text-heading font-poppins">Why Choose Us?</h2>
        <p className="text-center text-veda-text-muted text-lg mb-12 max-w-2xl mx-auto">Discover what makes The Veda Toddlers the perfect choice for your child's early education</p>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Award Winning Curriculum - Golden Theme */}
          <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <div className="relative bg-gradient-to-br from-veda-accent/10 via-white to-veda-accent/5 rounded-2xl p-6 h-full border border-veda-accent/20 shadow-soft hover:shadow-softer hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-veda-accent/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-veda-accent/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-veda-accent to-veda-accent-dark text-white mx-auto mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Award size={30} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-veda-text-heading text-center">Award Winning Curriculum</h3>
                <p className="text-veda-text-muted text-base text-center leading-relaxed">Designed by experts to foster holistic development through play-based learning.</p>
              </div>
            </div>
          </div>

          {/* Safe & Secure - Green Theme */}
          <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <div className="relative bg-gradient-to-br from-veda-playful-green/15 via-white to-veda-playful-green/5 rounded-2xl p-6 h-full border border-veda-playful-green/20 shadow-soft hover:shadow-softer hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-veda-playful-green/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-veda-playful-green/30 rounded-full"></div>
              <div className="absolute top-1/2 right-4 w-2 h-2 bg-veda-playful-green/20 rounded-full"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-veda-playful-green to-green-600 text-white mx-auto mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <ShieldCheck size={30} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-veda-text-heading text-center">Safe & Secure</h3>
                <p className="text-veda-text-muted text-base text-center leading-relaxed">CCTV monitored facilities and child-safe infrastructure for peace of mind.</p>
              </div>
            </div>
          </div>

          {/* Passionate Educators - Peach Theme */}
          <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <div className="relative bg-gradient-to-br from-veda-playful-peach/15 via-white to-rose-50 rounded-2xl p-6 h-full border border-veda-playful-peach/20 shadow-soft hover:shadow-softer hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-4 right-4 text-veda-playful-peach/20">
                <Heart size={60} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-veda-playful-peach to-rose-400 text-white mx-auto mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Heart size={30} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-veda-text-heading text-center">Passionate Educators</h3>
                <p className="text-veda-text-muted text-base text-center leading-relaxed">Highly trained teachers who treat every child with love and care.</p>
              </div>
            </div>
          </div>

          {/* Seven Petal Approach - Purple Theme */}
          <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <div className="relative bg-gradient-to-br from-veda-secondary/40 via-white to-veda-secondary/20 rounded-2xl p-6 h-full border border-veda-secondary shadow-soft hover:shadow-softer hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
              <div className="absolute -bottom-4 -right-4 text-veda-secondary/30">
                <Flower2 size={80} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-veda-primary to-veda-primary-dark text-white mx-auto mb-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Flower2 size={30} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-veda-text-heading text-center">Seven Petal Approach</h3>
                <p className="text-veda-text-muted text-base text-center leading-relaxed">Ensuring development across all key skills, senses, and abilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Featured Programs Section */}
      <section className="py-24 px-[3%] bg-veda-background-muted">
        <h2 className="text-center text-4xl font-bold mb-4 text-veda-text-heading font-poppins">Our Programs</h2>
        <p className="text-center text-veda-text-muted text-lg mb-12 max-w-2xl mx-auto">Age-appropriate programs designed to nurture every stage of early development</p>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Toddlers Program */}
          <div className="w-full md:w-[calc(33.333%-22px)]">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-softer transition-all duration-300 group">
              <div className="relative h-52 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1596464716127-f9a0639b9de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Toddlers" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-veda-accent text-veda-primary-dark py-1.5 px-4 rounded-full text-xs font-bold shadow-lg">2-3 Years</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-veda-text-heading mb-2 font-bold font-poppins">Toddlers</h3>
                <p className="text-veda-text-muted mb-5 text-base leading-relaxed">A fun-filled beginning to your child's learning journey with sensory play and motor skill development.</p>
                <Button variant="outline" shape="rounded" fullWidth href="/programs" className="group-hover:bg-veda-primary group-hover:text-white group-hover:border-veda-primary transition-all">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          {/* Nursery Program - Featured/Elevated */}
          <div className="w-full md:w-[calc(33.333%-22px)] md:-mt-4">
            <div className="relative bg-veda-primary rounded-3xl overflow-hidden shadow-softer transition-all duration-300 group">
              <div className="absolute top-4 right-4 bg-veda-accent text-veda-primary-dark py-1 px-3 rounded-full text-xs font-bold z-10">Most Popular</div>
              <div className="relative h-52 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Nursery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-primary to-transparent"></div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-veda-accent/20 text-veda-accent py-1.5 px-4 rounded-full text-xs font-bold mb-3">3-4 Years</span>
                <h3 className="text-2xl text-white mb-2 font-bold font-poppins">Nursery</h3>
                <p className="text-veda-secondary-light mb-5 text-base leading-relaxed">Building foundational skills through play, exploration, and structured activities.</p>
                <Button variant="primary" shape="rounded" fullWidth href="/programs" className="bg-veda-accent hover:bg-veda-accent-dark text-veda-primary-dark border-none">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          {/* Kindergarten Program */}
          <div className="w-full md:w-[calc(33.333%-22px)]">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-softer transition-all duration-300 group">
              <div className="relative h-52 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1587654780291-39c940483719?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kindergarten" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-veda-accent text-veda-primary-dark py-1.5 px-4 rounded-full text-xs font-bold shadow-lg">4-6 Years</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-veda-text-heading mb-2 font-bold font-poppins">Kindergarten</h3>
                <p className="text-veda-text-muted mb-5 text-base leading-relaxed">Preparing children for formal schooling with confidence, creativity, and critical thinking.</p>
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
      <section className="py-24 px-[3%] bg-veda-background-DEFAULT">
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
            <div key={idx} className="bg-white rounded-2xl p-5 shadow-soft hover:shadow-softer hover:-translate-y-1 transition-all duration-300 flex gap-4 items-start group border border-veda-border">
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

      {/* Location Map */}
      <LocationMap />
    </main>
  );
}

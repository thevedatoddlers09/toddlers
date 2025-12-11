
import Button from '@/components/Button';
import Card from '@/components/Card';
import HeroCarousel from '@/components/HeroCarousel';
import AdmissionsPopup from '@/components/AdmissionsPopup';
import StatsCounter from '@/components/StatsCounter';
import LocationMap from '@/components/LocationMap';

export default function Home() {
  return (
    <main>
      <AdmissionsPopup />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Why Us Section */}
      <section className="py-24 px-[5%] bg-white">
        <h2 className="text-center text-4xl font-bold mb-12 text-brand-secondary font-poppins">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card hoverEffect className="text-center h-full">
            <div className="w-[60px] h-[60px] rounded-full bg-brand-yellow/15 text-brand-yellow mx-auto mb-6 flex items-center justify-center text-2xl">★</div>
            <h3 className="text-xl font-bold mb-2 text-brand-secondary">Award Winning Curriculum</h3>
            <p className="text-gray-600">Designed by experts to foster holistic development.</p>
          </Card>

          <Card hoverEffect className="text-center h-full">
            <div className="w-[60px] h-[60px] rounded-full bg-brand-green/15 text-brand-green mx-auto mb-6 flex items-center justify-center text-2xl">♣</div>
            <h3 className="text-xl font-bold mb-2 text-brand-secondary">Safe & Secure</h3>
            <p className="text-gray-600">CCTV monitored functionality and child-safe infrastructure.</p>
          </Card>

          <Card hoverEffect className="text-center h-full">
            <div className="w-[60px] h-[60px] rounded-full bg-brand-primary/15 text-brand-primary mx-auto mb-6 flex items-center justify-center text-2xl">♥</div>
            <h3 className="text-xl font-bold mb-2 text-brand-secondary">Passionate Educators</h3>
            <p className="text-gray-600">Highly trained teachers who treat every child with love.</p>
          </Card>

          <Card hoverEffect className="text-center h-full">
            <div className="w-[60px] h-[60px] rounded-full bg-brand-purple/15 text-brand-purple mx-auto mb-6 flex items-center justify-center text-2xl">♦</div>
            <h3 className="text-xl font-bold mb-2 text-brand-secondary">Seven Petal Approach</h3>
            <p className="text-gray-600">Ensuring development across all key skills and senses.</p>
          </Card>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 px-[5%] bg-gray-50">
        <h2 className="text-center text-4xl font-bold mb-12 text-brand-secondary font-poppins">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col h-full" padding="small" image="https://images.unsplash.com/photo-1596464716127-f9a0639b9de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80">
            <div className="inline-block bg-gray-100 py-1 px-3 rounded-full text-xs font-bold text-gray-500 mb-4 self-start">2-3 Years</div>
            <h3 className="text-2xl text-brand-secondary mb-2 font-bold font-poppins">Toddlers</h3>
            <p className="text-gray-600 mb-6 flex-grow">A fun-filled beginning to your child's learning journey.</p>
            <Button variant="outline" shape="rounded" fullWidth>
              View Details
            </Button>
          </Card>

          <Card className="flex flex-col h-full" padding="small" image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80">
            <div className="inline-block bg-gray-100 py-1 px-3 rounded-full text-xs font-bold text-gray-500 mb-4 self-start">3-4 Years</div>
            <h3 className="text-2xl text-brand-secondary mb-2 font-bold font-poppins">Nursery</h3>
            <p className="text-gray-600 mb-6 flex-grow">Building foundational skills through play and exploration.</p>
            <Button variant="outline" shape="rounded" fullWidth>
              View Details
            </Button>
          </Card>

          <Card className="flex flex-col h-full" padding="small" image="https://images.unsplash.com/photo-1587654780291-39c940483719?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80">
            <div className="inline-block bg-gray-100 py-1 px-3 rounded-full text-xs font-bold text-gray-500 mb-4 self-start">4-6 Years</div>
            <h3 className="text-2xl text-brand-secondary mb-2 font-bold font-poppins">Kindergarten</h3>
            <p className="text-gray-600 mb-6 flex-grow">Preparing children for formal schooling with confidence.</p>
            <Button variant="outline" shape="rounded" fullWidth>
              View Details
            </Button>
          </Card>
        </div>
      </section>

      {/* Location Map */}
      <LocationMap />
    </main>
  );
}

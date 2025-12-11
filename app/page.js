import Button from '@/components/Button';
import Card from '@/components/Card';
import HeroCarousel from '@/components/HeroCarousel';
import AdmissionsPopup from '@/components/AdmissionsPopup';
import StatsCounter from '@/components/StatsCounter';
import LocationMap from '@/components/LocationMap';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <AdmissionsPopup />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Why Us Section */}
      <section className={styles.section} style={{ backgroundColor: 'white' }}>
        <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
        <div className={styles.grid}>
          <Card hoverEffect className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.iconYellow}`}>★</div>
            <h3>Award Winning Curriculum</h3>
            <p>Designed by experts to foster holistic development.</p>
          </Card>

          <Card hoverEffect className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.iconGreen}`}>♣</div>
            <h3>Safe & Secure</h3>
            <p>CCTV monitored functionality and child-safe infrastructure.</p>
          </Card>

          <Card hoverEffect className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.iconRed}`}>♥</div>
            <h3>Passionate Educators</h3>
            <p>Highly trained teachers who treat every child with love.</p>
          </Card>

          <Card hoverEffect className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.iconPurple}`}>♦</div>
            <h3>Seven Petal Approach</h3>
            <p>Ensuring development across all key skills and senses.</p>
          </Card>
        </div>
      </section>

      {/* Programs Section */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-background-light)' }}>
        <h2 className={styles.sectionTitle}>Our Programs</h2>
        <div className={styles.grid}>
          <Card className={styles.programCard} padding="small" image="https://images.unsplash.com/photo-1596464716127-f9a0639b9de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80">
            <div className={styles.programAge}>2-3 Years</div>
            <h3 className={styles.programTitle}>Toddlers</h3>
            <p>A fun-filled beginning to your child's learning journey.</p>
            <Button variant="outline" shape="rounded" style={{ marginTop: '1rem' }} fullWidth>
              View Details
            </Button>
          </Card>

          <Card className={styles.programCard} padding="small" image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80">
            <div className={styles.programAge}>3-4 Years</div>
            <h3 className={styles.programTitle}>Nursery</h3>
            <p>Building foundational skills through play and exploration.</p>
            <Button variant="outline" shape="rounded" style={{ marginTop: '1rem' }} fullWidth>
              View Details
            </Button>
          </Card>

          <Card className={styles.programCard} padding="small" image="https://images.unsplash.com/photo-1587654780291-39c940483719?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80">
            <div className={styles.programAge}>4-6 Years</div>
            <h3 className={styles.programTitle}>Kindergarten</h3>
            <p>Preparing children for formal schooling with confidence.</p>
            <Button variant="outline" shape="rounded" style={{ marginTop: '1rem' }} fullWidth>
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

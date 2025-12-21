import Link from 'next/link';

import GridGallery from '@/components/GridGallery';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function ActivitiesPage() {
    const thematicActivities = [
        { id: 1, title: 'Red Color Day', category: 'Theme', image: 'https://images.unsplash.com/photo-1544815610-1e5631247480?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }, // Red/Art
        { id: 2, title: 'Earth Day Planting', category: 'Nature', image: 'https://images.unsplash.com/photo-1503919545885-7f4ab0213719?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }, // Reusing nature/planting
        { id: 3, title: 'Basant Panchami', category: 'Theme', image: 'https://images.unsplash.com/photo-1502086223501-636a25424750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }, // Yellow/Bright
    ];

    const excursions = [
        { id: 4, title: 'Rail Museum Visit', category: 'Excursion', image: 'https://images.unsplash.com/photo-1478131333786-8c7604f32997?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }, // Train track/kids
        { id: 5, title: 'Day at the Zoo', category: 'Excursion', image: 'https://images.unsplash.com/photo-1534568759974-a2a5efbc647c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }, // Animals
    ];

    const skills = [
        { id: 6, title: 'Airport Pretend Play', category: 'Role Play', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }, // Plane/Sky
        { id: 7, title: 'Annual Sports Day', category: 'Physical', image: 'https://images.unsplash.com/photo-1545665277-5937bf8607e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }, // Running
        { id: 8, title: 'Class Assembly', category: 'Confidence', image: 'https://images.unsplash.com/photo-1587654780291-39c940483719?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }, // Group/Learning
    ];

    return (
        <main className={styles.main}>


            {/* Philosophy Statement */}
            <section className={styles.philosophySection}>
                <div className={styles.container}>
                    <h2 className={styles.philosophyTitle}>More Than Just Fun</h2>
                    <p className={styles.philosophyText}>
                        There is much more to our school than our unique approach. Our daily activities involve
                        exploration of visual arts, drama, technology, and physical education, ensuring
                        comprehensive development for every child.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Thematic Learning</h2>
                        <p className={styles.sectionSubtitle}>Concept-based activities that make learning immersive and fun.</p>
                    </div>
                    <GridGallery items={thematicActivities} />
                </div>
            </section>

            <section className={styles.sectionAlt}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Experiential Trips</h2>
                        <p className={styles.sectionSubtitle}>Learning happens everywhere, not just inside the classroom.</p>
                    </div>
                    <GridGallery items={excursions} />
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Skill Development</h2>
                        <p className={styles.sectionSubtitle}>Fostering confidence, public speaking, and motor skills.</p>
                    </div>
                    <GridGallery items={skills} />
                </div>
            </section>

            {/* CTA Strip */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <div className={styles.ctaContent}>
                        <h2>Ready to Start?</h2>
                        <p>Apply for admission today and give your child the best start.</p>
                    </div>
                    <div className={styles.ctaButtonWrapper}>
                        <Button variant="primary" shape="pill" href="/admissions">
                            Register Now
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}

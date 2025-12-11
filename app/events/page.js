import PageHero from '@/components/PageHero';
import GridGallery from '@/components/GridGallery';
import styles from './page.module.css';

export default function EventsPage() {
    const culturalEvents = [
        { id: 1, title: 'Janmashtami Celebration', category: 'Festival', image: 'https://images.unsplash.com/photo-1596464716127-f9a0639b9de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 2, title: 'Diwali Utsav', category: 'Festival', image: 'https://images.unsplash.com/photo-1516083151740-1addfa71761e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 3, title: 'Dussehra', category: 'Culture', image: 'https://images.unsplash.com/photo-1503919545885-7f4ab0213719?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 4, title: 'Baisakhi Splash', category: 'Festival', image: 'https://images.unsplash.com/photo-1566453663675-927a4d5382bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    ];

    const milestones = [
        { id: 5, title: 'Graduation Day', category: 'Milestone', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 6, title: 'Distinguished Guest Visit', category: 'VIP Visit', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    ];

    const communityEvents = [
        { id: 7, title: 'Baby Show', category: 'Community', image: 'https://images.unsplash.com/photo-1545665277-5937bf8607e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: 8, title: 'Parent Teacher Meeting', category: 'Interaction', image: 'https://images.unsplash.com/photo-1596464716127-f9a0639b9de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }, // Reusing image for demo
        { id: 9, title: 'Grandparents Day', category: 'Family', image: 'https://images.unsplash.com/photo-1542036720-bc2f605a6A20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    ];

    return (
        <main className={styles.main}>
            <PageHero
                title="School Events"
                breadcrumbs={[{ label: 'Events', href: null }]}
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Cultural Celebrations</h2>
                        <p className={styles.sectionSubtitle}>Immersing children in our rich traditions and festivals.</p>
                    </div>
                    <GridGallery items={culturalEvents} />
                </div>
            </section>

            <section className={styles.sectionAlt}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Milestones & Moments</h2>
                        <p className={styles.sectionSubtitle}>Celebrating achievements and distinguished visits.</p>
                    </div>
                    <GridGallery items={milestones} />
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Community Connection</h2>
                        <p className={styles.sectionSubtitle}>Building strong bonds with families and the community.</p>
                    </div>
                    <GridGallery items={communityEvents} />
                </div>
            </section>
        </main>
    );
}

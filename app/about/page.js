import styles from './page.module.css';

export const metadata = {
    title: 'About Us - The Veda Toddlers',
    description: 'Learn about our vision, mission, and journey from 2008 to today.',
};

export default function AboutPage() {
    // Core Values Data
    const values = [
        {
            title: 'Vision',
            icon: '👁️',
            borderClass: styles.borderRed,
            iconBg: styles.iconRedBg,
            text: 'To be the leading early education provider, enabling every child to become a lifelong learner and a leader of tomorrow.',
        },
        {
            title: 'Mission',
            icon: '🎯',
            borderClass: styles.borderBlue,
            iconBg: styles.iconBlueBg,
            text: 'To provide a culturally appropriate environment assuring moral values, love, and protection for every child.',
        },
        {
            title: 'Philosophy',
            icon: '💛',
            borderClass: styles.borderYellow,
            iconBg: styles.iconYellowBg,
            text: 'We believe in a scientific, play-based curriculum that nurtures the unique potential of every child.',
        },
    ];

    // Timeline Data
    const timeline = [
        { year: '2008', text: 'Roots to Wings was born, staring our journey in early childhood education.', icon: '🐝', side: 'left' },
        { year: '2012', text: 'Rebranded to "The Veda Toddlers", setting a new standard for preschools.', icon: '🦒', side: 'right' },
        { year: '2015', text: 'Launched the first Veda Toddlers Marathon, a unique community event.', icon: '🪁', side: 'left' },
        { year: '2020', text: 'Pivoted to Online Learning seamlessly during the pandemic.', icon: '🧱', side: 'right' },
        { year: '2025', text: 'Expanded to 900+ Centres across the country.', icon: '🚀', side: 'left' },
    ];

    // Leadership Data
    const leaders = [
        { name: 'Sajid Ali', role: 'Chief Executive Officer', image: '/images/leader1.jpg' },
        { name: 'Rani Abrol', role: 'Chief Financial Officer', image: '/images/leader2.jpg' },
        { name: 'Geetika Bahuguna', role: 'COO - Academics', image: '/images/leader3.jpg' },
    ];

    // Awards Data
    const awards = [
        { icon: '🏆', label: 'Leading Preschool of India 2024' },
        { icon: '⭐', label: 'Best Curriculum Design 2025' },
        { icon: '🎖️', label: 'Innovation in Early Education 2024' },
        { icon: '🏅', label: 'Business World Education Award' },
        { icon: '🌟', label: 'ET Education Excellence' },
    ];

    return (
        <main>
            {/* Section A: Hero Banner */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>At The Veda Toddlers, the early years count.</h1>
                    <p className={styles.heroSubtitle}>
                        A scientific, play-based approach to early childhood education.
                    </p>
                </div>
            </section>

            {/* Section B: Vision, Mission, Philosophy */}
            <section className={`${styles.section} ${styles.sectionWhite}`}>
                <div className={styles.container}>
                    <div className={styles.valuesGrid}>
                        {values.map((value, idx) => (
                            <div key={idx} className={`${styles.valueCard} ${value.borderClass}`}>
                                <div className={`${styles.valueIcon} ${value.iconBg}`}>
                                    {value.icon}
                                </div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueText}>{value.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section C: The Journey Timeline */}
            <section className={`${styles.section} ${styles.sectionPastel}`}>
                <h2 className={styles.sectionTitle}>Our Journey</h2>
                <div className={styles.timelineContainer}>
                    <div className={styles.timelineLine}></div>
                    {timeline.map((item, idx) => (
                        <div
                            key={idx}
                            className={`${styles.timelineItem} ${item.side === 'left' ? styles.timelineLeft : styles.timelineRight}`}
                        >
                            <div className={styles.timelineContent}>
                                <div className={styles.timelineYear}>{item.year}</div>
                                <p className={styles.timelineText}>{item.text}</p>
                            </div>
                            <div className={styles.timelineIconBubble}>{item.icon}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section D: Leadership Team */}
            <section className={`${styles.section} ${styles.sectionWhite}`}>
                <h2 className={styles.sectionTitle}>Leadership Team</h2>
                <div className={styles.container}>
                    <div className={styles.leadershipGrid}>
                        {leaders.map((leader, idx) => (
                            <div key={idx} className={styles.leaderCard}>
                                <div className={styles.leaderPhotoPlaceholder}>
                                    {/* Placeholder for actual image */}
                                    {leader.name.charAt(0)}
                                </div>
                                <h3 className={styles.leaderName}>{leader.name}</h3>
                                <p className={styles.leaderRole}>{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section E: Awards & Recognition */}
            <section className={`${styles.section} ${styles.sectionGrey}`}>
                <h2 className={styles.sectionTitle}>Recognition</h2>
                <div className={styles.awardsContainer}>
                    {awards.map((award, idx) => (
                        <div key={idx} className={styles.awardCard}>
                            <span className={styles.awardIcon}>{award.icon}</span>
                            <span className={styles.awardLabel}>{award.label}</span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

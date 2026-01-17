"use client";

import { useState } from 'react';
import Button from '@/components/Button';
import { GraduationCap, Phone, MapPin, Calendar, CheckCircle2, Loader2, Baby, BookOpen, Sparkles } from 'lucide-react';
import styles from './page.module.css';

export default function AdmissionsPage() {
    const [formData, setFormData] = useState({
        parentName: '',
        childName: '',
        childAge: '',
        phone: '',
        email: '',
        preferredLocation: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone: formData.phone }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ parentName: '', childName: '', childAge: '', phone: '', email: '', preferredLocation: '' });
            } else {
                setError('Failed to submit. Please try again.');
            }
        } catch (err) {
            setError('Network error. Please check your connection.');
        } finally {
            setIsLoading(false);
        }
    };

    const steps = [
        { number: '01', title: 'Fill the Inquiry Form', desc: 'Share your details and we will get in touch.' },
        { number: '02', title: 'Counselor Callback', desc: 'Our expert counselor will call to understand your needs.' },
        { number: '03', title: 'Campus Visit & Tour', desc: 'Experience our facilities and meet our educators.' },
        { number: '04', title: 'Complete Enrollment', desc: 'Finalize admission and welcome your child aboard!' },
    ];

    const programs = [
        { name: 'Pre-School Programme', age: '1 - 6 Years', desc: 'Seeding, Sprout, Explorers, Creators, Leaders', Icon: GraduationCap, color: 'text-rose-600', bg: 'bg-rose-50' },
        { name: 'Day Care', age: '8 months onwards', desc: 'Full Day & Half Day options available', Icon: Baby, color: 'text-amber-600', bg: 'bg-amber-50' },
        { name: 'After School Explorers', age: 'All Ages', desc: 'Art, Dance, Public Speaking & more', Icon: Sparkles, color: 'text-blue-600', bg: 'bg-blue-50' },
    ];

    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>🎓 Limited Seats Available</span>
                    <h1 className={styles.heroTitle}>Admissions Now Open</h1>
                    <p className={styles.heroSubtitle}>Give your child the right start with The Veda Toddlers — where learning meets love.</p>
                </div>
                <div className={styles.heroWave}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
                        <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* Main Content: Two-Column Layout */}
            <section className={styles.mainSection}>
                <div className={styles.container}>
                    <div className={styles.twoColumnGrid}>
                        {/* Left: Info */}
                        <div className={styles.infoColumn}>
                            <h2 className={styles.sectionTitle}>Programs We Offer</h2>
                            <p className={styles.sectionDesc}>Our curriculum is designed to nurture every child's unique potential through play-based, experiential learning.</p>

                            <div className={styles.programsGrid} style={{ gridTemplateColumns: '1fr' }}>
                                {programs.map((program, idx) => (
                                    <div key={idx} className={styles.programCard} style={{ padding: '1.25rem' }}>
                                        <div className={styles.programIcon} style={{ backgroundColor: program.bg === 'bg-rose-50' ? '#fff1f2' : program.bg === 'bg-amber-50' ? '#fffbeb' : '#eff6ff' }}>
                                            <program.Icon size={24} style={{ color: program.color === 'text-rose-600' ? '#e11d48' : program.color === 'text-amber-600' ? '#d97706' : '#2563eb' }} />
                                        </div>
                                        <div>
                                            <h3 className={styles.programName}>{program.name}</h3>
                                            <p className={styles.programAge}>{program.age}</p>
                                            <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.25rem' }}>{program.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.highlights}>
                                <div className={styles.highlight}>
                                    <CheckCircle2 size={20} className={styles.highlightIcon} />
                                    <span>Award-Winning Curriculum</span>
                                </div>
                                <div className={styles.highlight}>
                                    <CheckCircle2 size={20} className={styles.highlightIcon} />
                                    <span>Safe & Secure Campus</span>
                                </div>
                                <div className={styles.highlight}>
                                    <CheckCircle2 size={20} className={styles.highlightIcon} />
                                    <span>Trained & Caring Educators</span>
                                </div>
                                <div className={styles.highlight}>
                                    <CheckCircle2 size={20} className={styles.highlightIcon} />
                                    <span>Activity-Based Learning</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className={styles.formColumn}>
                            <div className={styles.formCard}>
                                <h2 className={styles.formTitle}>Enquire Now</h2>
                                <p className={styles.formSubtitle}>Fill in the details and our counselor will contact you shortly.</p>

                                {!isSubmitted ? (
                                    <form onSubmit={handleSubmit} className={styles.form}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="parentName">Parent's Name *</label>
                                            <input type="text" id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} required />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="childName">Child's Name *</label>
                                            <input type="text" id="childName" name="childName" value={formData.childName} onChange={handleChange} required />
                                        </div>
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="childAge">Child's Age *</label>
                                                <select id="childAge" name="childAge" value={formData.childAge} onChange={handleChange} required>
                                                    <option value="">Select</option>
                                                    <option value="1.5-2">1.5 - 2 Years</option>
                                                    <option value="2-3">2 - 3 Years</option>
                                                    <option value="3-4">3 - 4 Years</option>
                                                    <option value="4-5">4 - 5 Years</option>
                                                    <option value="5-6">5 - 6 Years</option>
                                                </select>
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="phone">Phone Number *</label>
                                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="preferredLocation">Preferred Location</label>
                                            <input type="text" id="preferredLocation" name="preferredLocation" placeholder="e.g., Mohali, Chandigarh" value={formData.preferredLocation} onChange={handleChange} />
                                        </div>

                                        {error && <div className={styles.errorMessage}>{error}</div>}

                                        <Button type="submit" variant="primary" fullWidth disabled={isLoading}>
                                            {isLoading ? <><Loader2 className="animate-spin mr-2" size={18} /> Submitting...</> : 'Request Callback'}
                                        </Button>
                                    </form>
                                ) : (
                                    <div className={styles.successMessage}>
                                        <div className={styles.successIcon}><CheckCircle2 size={32} /></div>
                                        <h3>Thank You!</h3>
                                        <p>Our counselor will contact you within 24 hours.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step-by-Step Process */}
            <section className={styles.stepsSection}>
                <div className={styles.container}>
                    <h2 className={styles.stepsTitle}>Admission Process</h2>
                    <p className={styles.stepsSubtitle}>Simple and transparent — here's how it works.</p>

                    <div className={styles.stepsGrid}>
                        {steps.map((step, idx) => (
                            <div key={idx} className={styles.stepCard}>
                                <div className={styles.stepNumber}>{step.number}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </main>
    );
}

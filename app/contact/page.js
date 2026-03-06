"use client";

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from '@/components/Button';
import { MapPin, Mail, Phone, Clock, Check, Loader2 } from 'lucide-react';
import styles from './page.module.css';

export default function ContactPage() {
    const mainRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Info card slide in from left
            gsap.from('.anim-info-card', {
                x: -60,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });

            // Form card slide in from right
            gsap.from('.anim-form-card', {
                x: 60,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: 'power3.out'
            });

            // Info items stagger
            gsap.from('.anim-info-item', {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.4
            });

            // CTA section
            gsap.from('.anim-cta-section', {
                y: 40,
                opacity: 0,
                duration: 0.6,
                scrollTrigger: {
                    trigger: '.anim-cta-section',
                    start: 'top 85%',
                }
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        message: ''
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
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ firstName: '', lastName: '', mobile: '', email: '', message: '' });
                // Reset after 5 seconds
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                const data = await response.json();
                setError(data.message || 'Failed to send message. Please try again.');
            }
        } catch (err) {
            setError('Network error. Please check your connection.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main ref={mainRef} className={styles.main}>


            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Contact Info */}
                        <div className={`${styles.infoCard} anim-info-card`}>
                            <h2 className={styles.infoTitle}>Get In Touch</h2>

                            <div className={`${styles.infoItem} anim-info-item`}>
                                <div className={styles.infoIcon}><MapPin size={18} /></div>
                                <div>
                                    <strong>Address</strong>
                                    <p>CPM 61 Ground, Second & Third Floor,<br />Sector 105 Emaar, Mohali</p>
                                </div>
                            </div>

                            <div className={`${styles.infoItem} anim-info-item`}>
                                <div className={styles.infoIcon}><Mail size={18} /></div>
                                <div>
                                    <strong>Email</strong>
                                    <p>thevedatoddler@gmail.com</p>
                                </div>
                            </div>

                            <div className={`${styles.infoItem} anim-info-item`}>
                                <div className={styles.infoIcon}><Phone size={18} /></div>
                                <div>
                                    <strong>Contact Numbers</strong>
                                    <p>+91-8968688486<br />+91-8728000886</p>
                                </div>
                            </div>

                            <div className={`${styles.infoItem} anim-info-item`}>
                                <div className={styles.infoIcon}><Clock size={18} /></div>
                                <div>
                                    <strong>Timings</strong>
                                    <p>School: 9:00 a.m. to 2:00 p.m.<br />Daycare: 9:00 a.m. to 6:00 p.m.<br />(Monday to Saturday)</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={`${styles.formCard} anim-form-card`}>
                            <h2 className={styles.formTitle}>Any Query? Get In Touch!</h2>

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="firstName">First Name</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="lastName">Last Name</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="mobile">Mobile Number</label>
                                            <input
                                                type="tel"
                                                id="mobile"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Write your query here..."
                                            required
                                        ></textarea>
                                    </div>

                                    {error && (
                                        <div className={styles.errorMessage}>
                                            {error}
                                        </div>
                                    )}

                                    <Button type="submit" variant="primary" fullWidth disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="animate-spin mr-2" size={18} />
                                                Sending...
                                            </>
                                        ) : (
                                            'Submit Query'
                                        )}
                                    </Button>
                                </form>
                            ) : (
                                <div className={styles.successMessage}>
                                    <div className={styles.successIcon}><Check size={24} /></div>
                                    <h3>Thank You!</h3>
                                    <p>We have received your query and will get back to you shortly.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section className={`${styles.ctaSection} anim-cta-section`}>
                <div className={styles.ctaContainer}>
                    <div className={styles.ctaContent}>
                        <h2>Ready to Apply?</h2>
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

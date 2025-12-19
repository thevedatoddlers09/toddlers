"use client";

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import { MapPin, Mail, Phone, Clock, Check } from 'lucide-react';
import styles from './page.module.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Reset after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <main className={styles.main}>
            <PageHero
                title="Contact Us"
                breadcrumbs={[{ label: 'Contact Us', href: null }]}
            />

            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Contact Info */}
                        <div className={styles.infoCard}>
                            <h2 className={styles.infoTitle}>Get In Touch</h2>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}><MapPin size={18} /></div>
                                <div>
                                    <strong>Address</strong>
                                    <p>BQ-Block, NS-9, Shalimar Bagh,<br />New Delhi - 110088</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}><Mail size={18} /></div>
                                <div>
                                    <strong>Email</strong>
                                    <p>info@vedatoddlers.com</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}><Phone size={18} /></div>
                                <div>
                                    <strong>Contact Numbers</strong>
                                    <p>+91-9310129888<br />+91-11-27422001</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}><Clock size={18} /></div>
                                <div>
                                    <strong>Timings</strong>
                                    <p>8:30 a.m. to 3:30 p.m.<br />(Monday to Saturday)</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={styles.formCard}>
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

                                    <Button type="submit" variant="primary" fullWidth>
                                        Submit Query
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
            <section className={styles.ctaSection}>
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

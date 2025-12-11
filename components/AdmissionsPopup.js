"use client";

import { useState, useEffect } from 'react';
import Button from './Button';
import styles from './AdmissionsPopup.module.css';

export default function AdmissionsPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Show popup after 2 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Simulate API call
        setTimeout(() => {
            setIsVisible(false);
            setIsSubmitted(false);
        }, 2000);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={handleClose}>
                    &times;
                </button>

                {!isSubmitted ? (
                    <div className={styles.content}>
                        <h2 className={styles.title}>Admissions Now Open</h2>
                        <p className={styles.subtitle}>Enrich your child's future starting today.</p>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className={styles.input}
                                    placeholder="+91 98765 43210"
                                    required
                                />
                            </div>
                            <Button type="submit" fullWidth>
                                Request Callback
                            </Button>
                        </form>
                    </div>
                ) : (
                    <div className={styles.successMessage}>
                        <div className={styles.successIcon}>✓</div>
                        <h3>Thank You!</h3>
                        <p>We will contact you shortly.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

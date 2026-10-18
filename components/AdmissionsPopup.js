"use client";

import { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { Check, X, MessageCircle, GraduationCap, Building2, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';

const ENQUIRY_TYPES = {
    admission: {
        id: 'admission',
        title: 'Admission Enquiry',
        subtitle: "Enrol your child at The Veda Toddlers.",
        icon: GraduationCap,
        accent: 'from-veda-accent to-amber-400',
        softBg: 'bg-veda-accent/10',
        border: 'border-veda-accent/40',
        submitLabel: 'Request Callback',
    },
    franchise: {
        id: 'franchise',
        title: 'Franchise Enquiry',
        subtitle: 'Partner with us to start your own preschool.',
        icon: Building2,
        accent: 'from-veda-primary to-veda-primary-light',
        softBg: 'bg-veda-secondary/40',
        border: 'border-veda-secondary-dark/30',
        submitLabel: 'Submit Enquiry',
    },
};

export default function AdmissionsPopup() {
    const [hasShown, setHasShown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [step, setStep] = useState('choose'); // choose | form
    const [enquiryType, setEnquiryType] = useState(null);
    const popupRef = useRef(null);
    const launcherRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasShown(true);
            setIsOpen(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isOpen || !popupRef.current) return;
        gsap.fromTo(
            popupRef.current,
            { opacity: 0, y: 24, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'back.out(1.5)' }
        );
    }, [isOpen]);

    useEffect(() => {
        if (isOpen || !hasShown || !launcherRef.current) return;
        gsap.fromTo(
            launcherRef.current,
            { opacity: 0, y: 16, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: 'back.out(1.4)' }
        );
    }, [isOpen, hasShown]);

    const animateContentIn = () => {
        if (!contentRef.current) return;
        gsap.fromTo(
            contentRef.current,
            { opacity: 0, x: 12 },
            { opacity: 1, x: 0, duration: 0.28, ease: 'power2.out' }
        );
    };

    const resetForm = () => {
        setStep('choose');
        setEnquiryType(null);
        setIsSubmitted(false);
        setError('');
    };

    const dismissToLauncher = () => {
        resetForm();
        setIsOpen(false);
    };

    const handleOpen = () => {
        resetForm();
        setIsOpen(true);
    };

    const selectEnquiry = (type) => {
        setEnquiryType(type);
        setStep('form');
        setError('');
        requestAnimationFrame(animateContentIn);
    };

    const goBack = () => {
        setStep('choose');
        setEnquiryType(null);
        setError('');
        requestAnimationFrame(animateContentIn);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const formData = new FormData(e.target);
        const payload = {
            enquiryType,
            phone: formData.get('phone'),
            name: formData.get('name'),
            email: formData.get('email') || undefined,
            childAge: formData.get('childAge') || undefined,
            preferredLocation: formData.get('preferredLocation') || undefined,
            city: formData.get('city') || undefined,
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setTimeout(() => {
                    dismissToLauncher();
                }, 2800);
            } else {
                setError('Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            setError('Network error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const active = enquiryType ? ENQUIRY_TYPES[enquiryType] : null;

    const inputClass =
        'w-full py-2 px-3 sm:py-2.5 sm:px-3.5 md:py-3 md:px-4 border-2 border-gray-200 rounded-xl text-sm md:text-base text-gray-900 transition-all outline-none bg-veda-background-soft focus:border-veda-primary focus:bg-white focus:shadow-soft placeholder:text-gray-400';
    const labelClass = 'font-medium text-veda-text text-xs md:text-sm';
    const fieldClass = 'flex flex-col gap-1';

    // Floating button — shows after popup is dismissed (close or minimize)
    if (!isOpen) {
        if (!hasShown) return null;

        return (
            <div ref={launcherRef} className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[2000]">
                <button
                    onClick={handleOpen}
                    type="button"
                    className="bg-veda-primary hover:bg-veda-primary-light text-white shadow-lg rounded-full px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-2 sm:gap-3 transition-colors font-medium font-poppins text-sm sm:text-base"
                >
                    <MessageCircle size={20} />
                    <span>Enquire Now</span>
                </button>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 top-0 left-0 w-full h-full bg-veda-primary-dark/55 backdrop-blur-sm z-[2000] flex items-center justify-center p-4 sm:p-4">
            <div
                ref={popupRef}
                className="bg-white p-4 pt-5 sm:p-7 md:p-9 rounded-2xl w-[min(100%,320px)] sm:w-full sm:max-w-[400px] md:max-w-[420px] relative shadow-2xl border border-veda-secondary/60 overflow-hidden"
            >
                {/* Soft brand accents */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-veda-accent/20 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-12 w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-veda-secondary/50 blur-2xl" />

                <button
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-transparent border-none text-gray-400 cursor-pointer leading-none transition-colors w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center hover:text-veda-primary hover:bg-veda-secondary-light"
                    onClick={dismissToLauncher}
                    title="Close"
                    type="button"
                >
                    <X size={18} />
                </button>

                <div ref={contentRef} className="relative z-[1]">
                    {!isSubmitted ? (
                        step === 'choose' ? (
                            <div className="flex flex-col gap-3 sm:gap-5 pt-1">
                                <div className="text-center pr-10">
                                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-veda-accent-dark mb-1 sm:mb-2">
                                        The Veda Toddlers
                                    </p>
                                    <h2 className="text-lg sm:text-2xl text-veda-text-heading text-center font-bold font-poppins leading-tight">
                                        How can we help?
                                    </h2>
                                    <p className="text-center text-veda-text-muted text-xs sm:text-sm mt-1 sm:mt-2">
                                        Choose an enquiry type to get started.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2 sm:gap-3 mt-0.5">
                                    {Object.values(ENQUIRY_TYPES).map((type) => {
                                        const Icon = type.icon;
                                        return (
                                            <button
                                                key={type.id}
                                                type="button"
                                                onClick={() => selectEnquiry(type.id)}
                                                className={`group w-full text-left rounded-xl sm:rounded-2xl border-2 ${type.border} ${type.softBg} p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-softer focus:outline-none focus:ring-2 focus:ring-veda-accent/60`}
                                            >
                                                <span
                                                    className={`shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${type.accent} text-white flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform`}
                                                >
                                                    <Icon size={18} />
                                                </span>
                                                <span className="flex-1 min-w-0">
                                                    <span className="block font-poppins font-bold text-veda-text-heading text-sm sm:text-base">
                                                        {type.title}
                                                    </span>
                                                    <span className="block text-[11px] sm:text-sm text-veda-text-muted mt-0.5 leading-snug">
                                                        {type.subtitle}
                                                    </span>
                                                </span>
                                                <span className="text-veda-primary/40 group-hover:text-veda-primary transition-colors text-base sm:text-lg font-bold shrink-0">
                                                    →
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2.5 sm:gap-4 pt-0.5">
                                <button
                                    type="button"
                                    onClick={goBack}
                                    className="self-start inline-flex items-center gap-1 text-xs sm:text-sm text-veda-text-muted hover:text-veda-primary transition-colors bg-transparent border-none cursor-pointer p-0 font-medium"
                                >
                                    <ArrowLeft size={14} />
                                    Back
                                </button>

                                <div className="text-center">
                                    <div
                                        className={`mx-auto mb-1.5 sm:mb-3 w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${active.accent} text-white flex items-center justify-center shadow-soft`}
                                    >
                                        <active.icon size={18} />
                                    </div>
                                    <h2 className="text-lg sm:text-2xl text-veda-text-heading font-bold font-poppins leading-tight">
                                        {active.title}
                                    </h2>
                                    <p className="text-veda-text-muted text-xs sm:text-sm mt-1">{active.subtitle}</p>
                                </div>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3.5 mt-0.5">
                                    <div className={fieldClass}>
                                        <label htmlFor="name" className={labelClass}>
                                            {enquiryType === 'admission' ? "Parent's Name" : 'Your Name'}
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className={inputClass}
                                            placeholder={enquiryType === 'admission' ? 'e.g. Priya Sharma' : 'e.g. Rahul Mehta'}
                                            required
                                            disabled={isLoading}
                                        />
                                    </div>

                                    <div className={fieldClass}>
                                        <label htmlFor="phone" className={labelClass}>
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            className={inputClass}
                                            placeholder="+91 98765 43210"
                                            required
                                            disabled={isLoading}
                                        />
                                    </div>

                                    {enquiryType === 'admission' ? (
                                        <>
                                            <div className={fieldClass}>
                                                <label htmlFor="childAge" className={labelClass}>
                                                    Child&apos;s Age
                                                </label>
                                                <input
                                                    type="text"
                                                    name="childAge"
                                                    id="childAge"
                                                    className={inputClass}
                                                    placeholder="e.g. 3 years"
                                                    disabled={isLoading}
                                                />
                                            </div>
                                            <div className={fieldClass}>
                                                <label htmlFor="preferredLocation" className={labelClass}>
                                                    Preferred Location
                                                </label>
                                                <input
                                                    type="text"
                                                    name="preferredLocation"
                                                    id="preferredLocation"
                                                    className={inputClass}
                                                    placeholder="e.g. Mohali"
                                                    disabled={isLoading}
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className={fieldClass}>
                                                <label htmlFor="city" className={labelClass}>
                                                    City / Preferred Location
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    className={inputClass}
                                                    placeholder="e.g. Chandigarh"
                                                    required
                                                    disabled={isLoading}
                                                />
                                            </div>
                                            <div className={fieldClass}>
                                                <label htmlFor="email" className={labelClass}>
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className={inputClass}
                                                    placeholder="you@example.com"
                                                    disabled={isLoading}
                                                />
                                            </div>
                                        </>
                                    )}

                                    {error && (
                                        <p className="text-xs sm:text-sm text-red-600 text-center -mt-0.5">{error}</p>
                                    )}

                                    <Button type="submit" fullWidth disabled={isLoading} className="mt-0.5 !py-2.5 sm:!py-3 text-sm sm:text-base">
                                        {isLoading ? 'Sending...' : active.submitLabel}
                                    </Button>
                                </form>
                            </div>
                        )
                    ) : (
                        <div className="text-center py-4 sm:py-8">
                            <div className="w-11 h-11 sm:w-14 sm:h-14 bg-veda-playful-green text-white rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-5 shadow-soft">
                                <Check size={22} />
                            </div>
                            <h3 className="text-base sm:text-xl font-bold mb-1.5 sm:mb-2 text-veda-text-heading font-poppins">
                                Thank You!
                            </h3>
                            <p className="text-veda-text-muted text-xs sm:text-sm px-1">
                                We have received your {enquiryType === 'franchise' ? 'franchise' : 'admission'} enquiry and will contact you shortly.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

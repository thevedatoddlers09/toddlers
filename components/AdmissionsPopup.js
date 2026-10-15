"use client";

import { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { Check, X, Minus, MessageCircle } from 'lucide-react';
import gsap from 'gsap';

export default function AdmissionsPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const popupRef = useRef(null);
    const minimizedRef = useRef(null);

    useEffect(() => {
        // Show popup after 2 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // GSAP animation when popup appears
    useEffect(() => {
        if (isVisible && !isMinimized && popupRef.current) {
            gsap.fromTo(
                popupRef.current,
                { opacity: 0, y: 30, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }
            );
        } else if (isVisible && isMinimized && minimizedRef.current) {
            gsap.fromTo(
                minimizedRef.current,
                { opacity: 0, y: 20, scale: 0.8 },
                { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'back.out(1.5)' }
            );
        }
    }, [isVisible, isMinimized]);

    const handleClose = () => {
        if (popupRef.current) {
            gsap.to(popupRef.current, {
                opacity: 0,
                y: 20,
                scale: 0.95,
                duration: 0.2,
                ease: 'power2.in',
                onComplete: () => setIsVisible(false)
            });
        }
    };

    const handleMinimize = () => {
        if (popupRef.current) {
            gsap.to(popupRef.current, {
                opacity: 0,
                y: 20,
                scale: 0.8,
                duration: 0.2,
                ease: 'power2.in',
                onComplete: () => setIsMinimized(true)
            });
        }
    };

    const handleRestore = () => {
        if (minimizedRef.current) {
            gsap.to(minimizedRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 0.2,
                ease: 'power2.in',
                onComplete: () => setIsMinimized(false)
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target);
        const phone = formData.get('phone');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setTimeout(() => {
                    handleClose();
                    setTimeout(() => setIsSubmitted(false), 300);
                }, 3000);
            } else {
                console.error('Failed to send email');
                // You might want to show an error state here, for now just keeping it simple
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isVisible) return null;

    if (isMinimized) {
        return (
            <div
                ref={minimizedRef}
                className="fixed bottom-6 right-6 z-[2000]"
            >
                <button
                    onClick={handleRestore}
                    className="bg-veda-primary hover:bg-red-600 text-white shadow-lg rounded-full px-6 py-4 flex items-center gap-3 transition-colors font-medium font-poppins"
                >
                    <MessageCircle size={24} />
                    <span>Admissions Open</span>
                </button>
            </div>
        )
    }

    return (
        <div className="fixed inset-0 top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-[2000] flex items-center justify-center">
            <div
                ref={popupRef}
                className="bg-white p-10 rounded-2xl w-[90%] max-w-[420px] relative shadow-2xl border border-gray-100"
            >
                <div className="absolute top-4 right-4 flex gap-2">
                    <button
                        className="bg-transparent border-none text-gray-400 cursor-pointer leading-none transition-colors w-9 h-9 rounded-xl flex items-center justify-center hover:text-gray-600 hover:bg-gray-100"
                        onClick={handleMinimize}
                        title="Minimize"
                    >
                        <Minus size={20} />
                    </button>
                    <button
                        className="bg-transparent border-none text-gray-400 cursor-pointer leading-none transition-colors w-9 h-9 rounded-xl flex items-center justify-center hover:text-gray-600 hover:bg-gray-100"
                        onClick={handleClose}
                        title="Close"
                    >
                        <X size={20} />
                    </button>
                </div>

                {!isSubmitted ? (
                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl text-gray-900 text-center font-bold font-poppins">Admissions Open Now</h2>
                        <p className="text-center text-gray-600 text-sm">Enrich your child's future starting today.</p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="font-medium text-gray-700 text-sm">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="w-full py-3 px-5 border-2 border-gray-200 rounded-xl text-base text-gray-900 transition-all outline-none bg-gray-50 focus:border-veda-primary focus:bg-white focus:shadow-soft placeholder:text-gray-400"
                                    placeholder="+91 98765 43210"
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                            <Button type="submit" fullWidth disabled={isLoading}>
                                {isLoading ? 'Sending...' : 'Request Callback'}
                            </Button>
                        </form>
                    </div>
                ) : (
                    <div className="text-center py-6">
                        <div className="w-14 h-14 bg-green-500 text-white rounded-xl flex items-center justify-center mx-auto mb-5">
                            <Check size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 font-poppins">Thank You!</h3>
                        <p className="text-gray-600 text-sm">We will contact you shortly.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

"use client";

import { useState, useEffect } from 'react';
import Button from './Button';

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
        <div className="fixed inset-0 top-0 left-0 w-full h-full bg-black/60 backdrop-blur-[4px] z-[2000] flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
            <div className="bg-white p-12 rounded-[24px] w-[90%] max-w-[480px] relative shadow-2xl animate-[slideUp_0.4s_cubic-bezier(0.175,0.885,0.32,1.275)] border border-black/5">
                <button
                    className="absolute top-6 right-6 bg-transparent border-none text-3xl text-gray-400 cursor-pointer leading-none transition-colors w-10 h-10 rounded-full flex items-center justify-center hover:text-brand-red hover:bg-gray-100"
                    onClick={handleClose}
                >
                    &times;
                </button>

                {!isSubmitted ? (
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl text-brand-secondary mb-0 text-center font-bold">Admissions Now Open</h2>
                        <p className="text-center text-text-main mb-2 text-base">Enrich your child's future starting today.</p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone" className="font-semibold text-text-main text-sm ml-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full py-4 px-6 border-2 border-[#eee] rounded-full text-base font-inherit transition-all outline-none bg-gray-50 focus:border-brand-secondary focus:bg-white focus:shadow-[0_4px_12px_rgba(0,174,239,0.1)]"
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
                    <div className="text-center py-8">
                        <div className="w-[60px] h-[60px] bg-brand-green text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
                        <h3 className="text-2xl font-bold mb-2 text-brand-secondary">Thank You!</h3>
                        <p>We will contact you shortly.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

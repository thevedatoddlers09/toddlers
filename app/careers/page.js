'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Users, Sparkles, GraduationCap, MapPin, Clock, ArrowRight, CheckCircle, Mail, Phone, Baby, BookOpen, Palette, Shield, Star, Rocket, Smile, Trophy, Briefcase, Upload, Loader2, FileText, User, X } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
    const mainRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Hero animation
            gsap.from('.anim-hero-content', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            // Floating icons animation
            gsap.to('.anim-float-1', {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
            gsap.to('.anim-float-2', {
                y: 15,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            // Why Join cards stagger
            gsap.from('.anim-benefit-card', {
                y: 60,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: '.anim-benefits-section',
                    start: 'top 80%',
                }
            });

            // Job cards stagger
            gsap.from('.anim-job-card', {
                y: 40,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.anim-jobs-section',
                    start: 'top 80%',
                }
            });

            // Culture cards stagger
            gsap.from('.anim-culture-card', {
                scale: 0.9,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.anim-culture-section',
                    start: 'top 80%',
                }
            });

            // Diversity section
            gsap.from('.anim-diversity-content', {
                x: -40,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: '.anim-diversity-section',
                    start: 'top 75%',
                }
            });

            // CTA section
            gsap.from('.anim-cta-content', {
                y: 30,
                opacity: 0,
                duration: 0.7,
                scrollTrigger: {
                    trigger: '.anim-cta-section',
                    start: 'top 85%',
                }
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    // Why Join Us benefits
    const benefits = [
        {
            title: 'Growth & Learning',
            desc: 'Continuous professional development with training programs and workshops to help you excel.',
            Icon: GraduationCap,
            gradient: 'from-veda-primary to-veda-primary-dark',
            bgGradient: 'from-veda-secondary/20 via-white to-veda-secondary/10',
            iconBg: 'bg-veda-primary',
        },
        {
            title: 'Make an Impact',
            desc: 'Shape the future by nurturing young minds during their most formative years.',
            Icon: Sparkles,
            gradient: 'from-veda-accent to-amber-500',
            bgGradient: 'from-veda-accent/10 via-white to-amber-50',
            iconBg: 'bg-veda-accent',
        },
        {
            title: 'Supportive Community',
            desc: 'Join a warm, collaborative team that feels like family and celebrates every success.',
            Icon: Users,
            gradient: 'from-veda-playful-green to-green-600',
            bgGradient: 'from-veda-playful-green/15 via-white to-green-50',
            iconBg: 'bg-green-500',
        },
        {
            title: 'Work-Life Balance',
            desc: 'Enjoy flexible schedules and a positive work environment that respects your personal time.',
            Icon: Heart,
            gradient: 'from-veda-playful-peach to-rose-400',
            bgGradient: 'from-veda-playful-peach/15 via-white to-rose-50',
            iconBg: 'bg-rose-400',
        },
    ];

    // Open positions
    const positions = [
        { title: 'Pre-School Teacher', location: 'Mohali', type: 'Full-time', category: 'Teaching', icon: Baby, color: 'rose' },
        { title: 'Nursery Teacher', location: 'Mohali', type: 'Full-time', category: 'Teaching', icon: BookOpen, color: 'blue' },
        { title: 'Art & Craft Instructor', location: 'Mohali', type: 'Part-time', category: 'Creative', icon: Palette, color: 'purple' },
        { title: 'Center Coordinator', location: 'Mohali', type: 'Full-time', category: 'Leadership', icon: Users, color: 'amber' },
        { title: 'Admission Counselor', location: 'Mohali', type: 'Full-time', category: 'Outreach', icon: GraduationCap, color: 'green' },
        { title: 'Caretaker / Ayah', location: 'Mohali', type: 'Full-time', category: 'Support', icon: Heart, color: 'teal' },
    ];

    const colorClasses = {
        rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'border-rose-200', hover: 'hover:bg-rose-500' },
        blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200', hover: 'hover:bg-blue-500' },
        purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200', hover: 'hover:bg-purple-500' },
        amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200', hover: 'hover:bg-amber-500' },
        green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200', hover: 'hover:bg-green-500' },
        teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200', hover: 'hover:bg-teal-500' },
    };

    // Culture highlights
    const cultureHighlights = [
        { title: 'Warm Environment', desc: 'A nurturing space where everyone feels valued', Icon: Smile, color: 'text-rose-500', bg: 'bg-rose-50' },
        { title: 'Creative Freedom', desc: 'Bring your innovative ideas to the classroom', Icon: Palette, color: 'text-purple-500', bg: 'bg-purple-50' },
        { title: 'Team Celebrations', desc: 'We celebrate festivals, birthdays & milestones', Icon: Trophy, color: 'text-amber-500', bg: 'bg-amber-50' },
        { title: 'Professional Growth', desc: 'Regular training and development programs', Icon: Rocket, color: 'text-blue-500', bg: 'bg-blue-50' },
    ];

    // Modal and Application Form State
    const [selectedJob, setSelectedJob] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: '',
    });
    const [resumeFile, setResumeFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const openApplyModal = (jobTitle) => {
        setSelectedJob(jobTitle);
        setFormData(prev => ({ ...prev, position: jobTitle }));
        setSubmitStatus({ type: '', message: '' });
        document.body.style.overflow = 'hidden';
    };

    const closeApplyModal = () => {
        setSelectedJob(null);
        setFormData({ name: '', email: '', phone: '', position: '', message: '' });
        setResumeFile(null);
        setSubmitStatus({ type: '', message: '' });
        document.body.style.overflow = 'auto';
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!allowedTypes.includes(file.type)) {
                setSubmitStatus({ type: 'error', message: 'Please upload PDF or DOC/DOCX files only.' });
                return;
            }
            // Validate file size (5MB)
            if (file.size > 5 * 1024 * 1024) {
                setSubmitStatus({ type: 'error', message: 'File size must be less than 5MB.' });
                return;
            }
            setResumeFile(file);
            setSubmitStatus({ type: '', message: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('position', formData.position);
            formDataToSend.append('message', formData.message);
            if (resumeFile) {
                formDataToSend.append('resume', resumeFile);
            }

            const response = await fetch('/api/careers', {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: result.message });
                // Reset form
                setFormData({ name: '', email: '', phone: '', position: '', message: '' });
                setResumeFile(null);
                // Reset file input
                const fileInput = document.getElementById('resume-upload-modal');
                if (fileInput) fileInput.value = '';
                // Close modal after 3 seconds
                setTimeout(() => {
                    closeApplyModal();
                }, 3000);
            } else {
                setSubmitStatus({ type: 'error', message: result.error || 'Failed to submit application.' });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main ref={mainRef} className="bg-white overflow-hidden">
            {/* Hero Section - Creative with floating elements */}
            <section className="relative min-h-[55vh] bg-gradient-to-br from-veda-primary via-veda-primary-dark to-veda-primary-dark flex items-center justify-center text-center text-white py-24 px-4 overflow-hidden">
                {/* Decorative blurred circles */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-veda-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-veda-secondary/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

                {/* Floating icons */}
                <div className="anim-float-1 absolute top-20 left-[10%] text-white/20">
                    <Star size={48} className="fill-white/10" />
                </div>
                <div className="anim-float-2 absolute top-32 right-[15%] text-white/20">
                    <Heart size={40} className="fill-white/10" />
                </div>
                <div className="anim-float-1 absolute bottom-20 left-[20%] text-white/20">
                    <Sparkles size={36} />
                </div>
                <div className="anim-float-2 absolute bottom-32 right-[10%] text-white/20">
                    <Rocket size={44} />
                </div>

                <div className="anim-hero-content relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/15 text-white font-semibold text-sm mb-6 border border-white/20 backdrop-blur-sm">
                        <Briefcase size={16} />
                        <span>We're Hiring</span>
                    </div>
                    <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Join The <span className="text-veda-accent">Veda</span> Family
                    </h1>
                    <p className="font-opensans text-xl md:text-2xl max-w-2xl mx-auto font-light text-white/90 mb-10">
                        Be part of a team that's shaping the future, one child at a time.
                        Make a real difference in young lives every day.
                    </p>
                    <a
                        href="#positions"
                        className="inline-flex items-center gap-3 bg-white text-veda-primary font-bold py-4 px-10 rounded-full hover:bg-veda-accent hover:text-veda-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
                    >
                        View Open Positions
                        <ArrowRight size={22} />
                    </a>
                </div>
            </section>

            {/* Why Join Us Section - Rounded creative cards */}
            <section className="anim-benefits-section py-24 px-4 bg-veda-background-muted relative">
                {/* Decorative elements */}
                <div className="absolute top-10 right-10 text-veda-playful-peach/30 animate-pulse">
                    <Star size={56} className="fill-veda-playful-peach/20" />
                </div>
                <div className="absolute bottom-10 left-10 text-veda-playful-blue/30 animate-bounce">
                    <Rocket size={48} />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-veda-primary/10 px-4 py-2 rounded-full mb-4">
                            <Heart size={18} className="text-veda-primary" />
                            <span className="text-veda-primary font-semibold text-sm uppercase tracking-wider">Benefits</span>
                        </div>
                        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-veda-text-heading mb-4">
                            Why Join Us?
                        </h2>
                        <p className="text-veda-text-muted text-xl max-w-2xl mx-auto">
                            We believe in nurturing not just children, but also our amazing team members.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="anim-benefit-card">
                                <div className={`relative bg-gradient-to-br ${benefit.bgGradient} rounded-[2rem] p-8 h-full border border-white/60 shadow-soft hover:shadow-softer hover:-translate-y-3 transition-all duration-500 group overflow-hidden`}>
                                    {/* Decorative blur */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                                    <div className="relative z-10">
                                        <div className={`w-16 h-16 rounded-2xl ${benefit.iconBg} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                            <benefit.Icon size={30} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-veda-text-heading font-poppins">{benefit.title}</h3>
                                        <p className="text-veda-text-muted leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions Section - Creative rounded container */}
            <section id="positions" className="anim-jobs-section py-12 px-4 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-[3rem] p-8 md:p-12 shadow-soft border border-blue-100 relative overflow-hidden">
                        {/* Decorative blurs */}
                        <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-veda-secondary/30 rounded-full blur-3xl opacity-50"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row gap-4 items-center mb-12 text-center md:text-left">
                                <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-500">
                                    <Briefcase size={40} />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-veda-text-heading">Open Positions</h2>
                                    <p className="text-blue-600 font-medium">Find your perfect role and start making an impact</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {positions.map((job, idx) => {
                                    const colors = colorClasses[job.color];
                                    return (
                                        <div key={idx} className="anim-job-card group">
                                            <div className={`bg-white rounded-2xl p-6 border-2 ${colors.border} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}>
                                                <div className="flex items-start gap-4 mb-4">
                                                    <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                                        <job.icon size={26} />
                                                    </div>
                                                    <div>
                                                        <span className={`text-xs font-bold ${colors.text} uppercase tracking-wider`}>{job.category}</span>
                                                        <h3 className="text-lg font-bold text-veda-text-heading font-poppins">{job.title}</h3>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-5">
                                                    <span className="inline-flex items-center gap-1.5 text-sm text-veda-text-muted bg-gray-50 px-3 py-1.5 rounded-full">
                                                        <MapPin size={14} />
                                                        {job.location}
                                                    </span>
                                                    <span className="inline-flex items-center gap-1.5 text-sm text-veda-text-muted bg-gray-50 px-3 py-1.5 rounded-full">
                                                        <Clock size={14} />
                                                        {job.type}
                                                    </span>
                                                </div>

                                                <button
                                                    onClick={() => openApplyModal(job.title)}
                                                    className={`w-full inline-flex items-center justify-center gap-2 ${colors.bg} ${colors.text} font-semibold py-3 px-5 rounded-xl ${colors.hover} hover:text-white transition-all duration-300`}
                                                >
                                                    Apply Now
                                                    <ArrowRight size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Life at Veda Section - Creative layout */}
            <section className="anim-culture-section py-12 px-4 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="bg-gradient-to-br from-amber-50 to-white rounded-[3rem] p-8 md:p-12 shadow-soft border border-amber-100 relative overflow-hidden">
                        {/* Decorative blurs */}
                        <div className="absolute -left-20 -top-20 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-60"></div>
                        <div className="absolute -right-10 bottom-0 w-60 h-60 bg-veda-accent/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row gap-4 items-center mb-12 text-center md:text-left">
                                <div className="bg-white p-4 rounded-2xl shadow-sm text-amber-500">
                                    <Star size={40} className="fill-amber-100" />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-veda-text-heading">Life at The Veda</h2>
                                    <p className="text-amber-600 font-medium">More than a workplace — it's a community</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                {cultureHighlights.map((item, idx) => (
                                    <div key={idx} className="anim-culture-card">
                                        <div className="bg-white rounded-2xl p-6 text-center border-2 border-transparent hover:border-amber-200 shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 h-full group">
                                            <div className={`w-14 h-14 rounded-full ${item.bg} ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                                <item.Icon size={26} />
                                            </div>
                                            <h3 className="text-lg font-bold text-veda-text-heading mb-2 font-poppins">{item.title}</h3>
                                            <p className="text-sm text-veda-text-muted">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diversity & Inclusion Section - Creative */}
            <section className="anim-diversity-section py-12 px-4 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="anim-diversity-content bg-gradient-to-br from-green-50 to-white rounded-[3rem] p-8 md:p-12 shadow-soft border border-green-100 relative overflow-hidden">
                        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-xl">
                                <Shield size={48} />
                            </div>
                            <div className="text-center lg:text-left">
                                <h2 className="font-poppins text-3xl md:text-4xl font-bold text-veda-text-heading mb-4">
                                    Diversity, Equity & Inclusion
                                </h2>
                                <p className="text-veda-text-muted text-lg leading-relaxed mb-6 max-w-3xl">
                                    We believe in equal opportunities for everyone. At The Veda Toddlers, we welcome individuals from all backgrounds, abilities, and experiences. Our inclusive culture ensures that every team member feels valued, respected, and empowered.
                                </p>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-100 px-5 py-2.5 rounded-full border border-green-200">
                                        <CheckCircle size={18} /> Equal Opportunity
                                    </span>
                                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-100 px-5 py-2.5 rounded-full border border-green-200">
                                        <CheckCircle size={18} /> All Backgrounds Welcome
                                    </span>
                                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-100 px-5 py-2.5 rounded-full border border-green-200">
                                        <CheckCircle size={18} /> Supportive Culture
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section id="apply" className="py-12 px-4 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="bg-gradient-to-br from-purple-50 to-white rounded-[3rem] p-8 md:p-12 shadow-soft border border-purple-100 relative overflow-hidden">
                        {/* Decorative blurs */}
                        <div className="absolute -right-20 -top-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-veda-accent/20 rounded-full blur-3xl opacity-50"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row gap-4 items-center mb-12 text-center md:text-left">
                                <div className="bg-white p-4 rounded-2xl shadow-sm text-purple-500">
                                    <FileText size={40} />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-veda-text-heading">Apply Now</h2>
                                    <p className="text-purple-600 font-medium">Submit your application and resume</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-veda-text-heading mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your full name"
                                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold text-veda-text-heading mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="your@email.com"
                                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-semibold text-veda-text-heading mb-2">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="+91 98765 43210"
                                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white"
                                            />
                                        </div>
                                    </div>

                                    {/* Position */}
                                    <div>
                                        <label className="block text-sm font-semibold text-veda-text-heading mb-2">
                                            Position Applying For <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <Briefcase size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <select
                                                name="position"
                                                value={formData.position}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white appearance-none cursor-pointer"
                                            >
                                                <option value="">Select a position</option>
                                                {positions.map((pos, idx) => (
                                                    <option key={idx} value={pos.title}>{pos.title}</option>
                                                ))}
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-veda-text-heading mb-2">
                                        Cover Message (Optional)
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        placeholder="Tell us why you'd be a great fit for this role..."
                                        className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white resize-none"
                                    />
                                </div>

                                {/* Resume Upload */}
                                <div className="mb-8">
                                    <label className="block text-sm font-semibold text-veda-text-heading mb-2">
                                        Upload Resume <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            id="resume-upload"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            required
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="resume-upload"
                                            className={`flex items-center justify-center gap-3 w-full py-6 px-4 border-2 border-dashed rounded-xl cursor-pointer transition-all ${resumeFile
                                                ? 'border-green-400 bg-green-50 text-green-700'
                                                : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50'
                                                }`}
                                        >
                                            {resumeFile ? (
                                                <>
                                                    <CheckCircle size={24} />
                                                    <span className="font-medium">{resumeFile.name}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Upload size={24} className="text-gray-400" />
                                                    <span className="text-gray-600">
                                                        Click to upload PDF or DOC/DOCX (Max 5MB)
                                                    </span>
                                                </>
                                            )}
                                        </label>
                                    </div>
                                </div>

                                {/* Status Message */}
                                {submitStatus.message && (
                                    <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${submitStatus.type === 'success'
                                        ? 'bg-green-50 text-green-700 border border-green-200'
                                        : 'bg-red-50 text-red-700 border border-red-200'
                                        }`}>
                                        {submitStatus.type === 'success' ? (
                                            <CheckCircle size={20} />
                                        ) : (
                                            <span className="text-xl">⚠️</span>
                                        )}
                                        <span className="font-medium">{submitStatus.message}</span>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ${isSubmitting
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={22} className="animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <ArrowRight size={22} />
                                            Submit Application
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application CTA Section - Premium gradient */}
            <section className="anim-cta-section py-24 px-4 bg-gradient-to-br from-veda-primary via-veda-primary to-veda-primary-dark text-white text-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-veda-accent/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

                <div className="anim-cta-content max-w-4xl mx-auto relative z-10">
                    <div className="w-20 h-20 rounded-3xl bg-veda-accent text-veda-primary-dark flex items-center justify-center mx-auto mb-8 shadow-xl">
                        <Mail size={36} />
                    </div>
                    <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto">
                        Send us your resume and let's start a conversation about your future with The Veda Toddlers.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <a
                            href="mailto:career@thevedatoddlers.com"
                            className="inline-flex items-center gap-3 bg-white text-veda-primary font-bold py-4 px-8 rounded-full hover:bg-veda-accent hover:scale-105 transition-all duration-300 shadow-xl text-lg"
                        >
                            <Mail size={22} />
                            career@thevedatoddlers.com
                        </a>
                        <a
                            href="tel:+917009109149"
                            className="inline-flex items-center gap-3 bg-white/15 text-white font-bold py-4 px-8 rounded-full hover:bg-white/25 transition-all duration-300 border border-white/30 backdrop-blur-sm text-lg"
                        >
                            <Phone size={22} />
                            +91 70091 09149
                        </a>
                    </div>

                    <p className="text-white/60 text-sm">
                        We typically respond within 2-3 business days
                    </p>
                </div>
            </section>

            {/* Application Modal */}
            {selectedJob && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={closeApplyModal}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-t-3xl flex items-center justify-between z-10">
                            <div>
                                <h3 className="text-2xl font-bold font-poppins">Apply for Position</h3>
                                <p className="text-purple-100">{selectedJob}</p>
                            </div>
                            <button
                                onClick={closeApplyModal}
                                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Body - Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-5">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-semibold text-veda-text-heading mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your full name"
                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white"
                                    />
                                </div>
                            </div>

                            {/* Email & Phone Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-veda-text-heading mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="your@email.com"
                                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-veda-text-heading mb-2">
                                        Phone <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="+91 98765 43210"
                                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-semibold text-veda-text-heading mb-2">
                                    Cover Message (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={3}
                                    placeholder="Tell us why you'd be a great fit..."
                                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white resize-none"
                                />
                            </div>

                            {/* Resume Upload */}
                            <div>
                                <label className="block text-sm font-semibold text-veda-text-heading mb-2">
                                    Upload Resume <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="file"
                                    id="resume-upload-modal"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    required
                                    className="hidden"
                                />
                                <label
                                    htmlFor="resume-upload-modal"
                                    className={`flex items-center justify-center gap-3 w-full py-5 px-4 border-2 border-dashed rounded-xl cursor-pointer transition-all ${resumeFile
                                            ? 'border-green-400 bg-green-50 text-green-700'
                                            : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50'
                                        }`}
                                >
                                    {resumeFile ? (
                                        <>
                                            <CheckCircle size={22} />
                                            <span className="font-medium truncate max-w-[200px]">{resumeFile.name}</span>
                                        </>
                                    ) : (
                                        <>
                                            <Upload size={22} className="text-gray-400" />
                                            <span className="text-gray-600 text-sm">PDF or DOC/DOCX (Max 5MB)</span>
                                        </>
                                    )}
                                </label>
                            </div>

                            {/* Status Message */}
                            {submitStatus.message && (
                                <div className={`p-4 rounded-xl flex items-center gap-3 ${submitStatus.type === 'success'
                                        ? 'bg-green-50 text-green-700 border border-green-200'
                                        : 'bg-red-50 text-red-700 border border-red-200'
                                    }`}>
                                    {submitStatus.type === 'success' ? (
                                        <CheckCircle size={20} />
                                    ) : (
                                        <span className="text-xl">⚠️</span>
                                    )}
                                    <span className="font-medium text-sm">{submitStatus.message}</span>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ${isSubmitting
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={22} className="animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <ArrowRight size={22} />
                                        Submit Application
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}

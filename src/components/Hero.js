'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const container = useRef(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial state setup for things entering
    gsap.set('.hero-badge, .hero-title, .hero-desc, .hero-btns', { y: 50, opacity: 0 });
    gsap.set('.hero-dashboard', { y: 100, opacity: 0, scale: 0.95 });

    tl.to('.hero-badge', { y: 0, opacity: 1, duration: 0.8 })
      .to('.hero-title', { y: 0, opacity: 1, duration: 1 }, "-=0.6")
      .to('.hero-desc', { y: 0, opacity: 1, duration: 1 }, "-=0.8")
      .to('.hero-btns', { y: 0, opacity: 1, duration: 0.8 }, "-=0.8")
      .to('.hero-dashboard', { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out' }, "-=0.6");

    // Continuous floating animation on dashboard slightly out of sync
    gsap.to('.hero-dashboard-inner', {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1
    });

  }, { scope: container });

  return (
    <section ref={container} className="min-h-screen flex flex-col justify-center items-center px-6 pt-40 pb-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary opacity-10 blur-[120px] rounded-full animate-mesh"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary opacity-10 blur-[120px] rounded-full animate-mesh" style={{ animationDelay: '-12s' }}></div>
      </div>

      <div className="container-custom flex flex-col items-center text-center">
        <div className="hero-badge inline-flex items-center px-4 py-1.5 rounded-full glass border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-8">
          <span className="relative flex h-2 w-2 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          New: Multi-Tenant v2.0 is Live
        </div>
        
        <h1 className="hero-title text-[clamp(2.5rem,10vw,6rem)] leading-[0.9] font-black tracking-tighter mb-8 max-w-6xl">
          The Future of <br />
          <span className="text-gradient">Ecommerce is Here</span>
        </h1>
        
        <p className="hero-desc text-xl md:text-2xl text-foreground-muted leading-relaxed max-w-[800px] mb-12">
          Launch a high-performance, scalable marketplace with Tasel. 
          Manage thousands of vendors effortlessly on a single, unified engine.
        </p>
        
        <div className="hero-btns flex flex-col sm:flex-row gap-6 mb-24">
          <Link href="#get-started" className="btn-primary flex items-center gap-3 group">
            Start Your Journey
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
          <Link href="#demo" className="btn-secondary">
            Book a Demo
          </Link>
        </div>

        {/* Dashboard Preview Overlay */}
        <div className="hero-dashboard relative w-full max-w-6xl mx-auto">
          <div className="hero-dashboard-inner">
            <div className="absolute -inset-1 bg-linear-to-r from-primary/30 to-secondary/30 rounded-4xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass border-white/5 rounded-4xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/hero-dashboard.png" 
                alt="Tasel Dashboard" 
                width={1400} 
                height={800} 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

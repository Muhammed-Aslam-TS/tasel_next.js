'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Contact() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    gsap.set('.contact-header > *', { y: 30, opacity: 0 });
    gsap.set('.contact-form-container', { y: 60, opacity: 0, scale: 0.98 });
    gsap.set('.contact-input', { x: -20, opacity: 0 });
    gsap.set('.contact-btn', { y: 20, opacity: 0 });
    gsap.set('.contact-info > div', { y: 20, opacity: 0 });

    tl.to('.contact-header > *', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15
    })
    .to('.contact-form-container', {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power4.out'
    }, "-=0.4")
    .to('.contact-input', {
      x: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    }, "-=0.6")
    .to('.contact-btn', {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'back.out(1.5)'
    }, "-=0.4")
    .to('.contact-info > div', {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1
    }, "-=0.4");

  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen pt-40 pb-20 relative overflow-hidden">
      <div className="container-custom">
        <div className="contact-header text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-8">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
            Let's Build <span className="text-gradient">Something Great</span>
          </h1>
          <p className="text-xl text-foreground-muted">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-form-container max-w-[600px] mx-auto glass p-10 md:p-14 rounded-4xl border-white/5 relative">
          <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-secondary/20 rounded-4xl blur-xl opacity-30 -z-10"></div>
          
          <form>
            <div className="contact-input mb-8">
              <label htmlFor="name" className="block font-black tracking-tight mb-3 text-foreground/80 text-sm uppercase">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full py-5 px-5 border border-white/10 rounded-2xl bg-white/[0.03] text-foreground text-base transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white/[0.07] focus:ring-4 focus:ring-primary/10" 
                placeholder="John Doe" 
                required 
              />
            </div>

            <div className="contact-input mb-8">
              <label htmlFor="email" className="block font-black tracking-tight mb-3 text-foreground/80 text-sm uppercase">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full py-5 px-5 border border-white/10 rounded-2xl bg-white/[0.03] text-foreground text-base transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white/[0.07] focus:ring-4 focus:ring-primary/10" 
                placeholder="john@company.com" 
                required 
              />
            </div>

            <div className="contact-input mb-8">
              <label htmlFor="subject" className="block font-black tracking-tight mb-3 text-foreground/80 text-sm uppercase">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="w-full py-5 px-5 border border-white/10 rounded-2xl bg-white/[0.03] text-foreground text-base transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white/[0.07] focus:ring-4 focus:ring-primary/10" 
                placeholder="I need a new e-commerce platform" 
                required 
              />
            </div>

            <div className="contact-input mb-10">
              <label htmlFor="message" className="block font-black tracking-tight mb-3 text-foreground/80 text-sm uppercase">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="w-full min-h-[150px] py-5 px-5 border border-white/10 rounded-2xl bg-white/[0.03] text-foreground text-base resize-y transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white/[0.07] focus:ring-4 focus:ring-primary/10" 
                placeholder="Tell us about your project..." 
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="contact-btn btn-primary w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95 bg-primary text-white shadow-primary hover:bg-primary-hover hover:shadow-primary-lg"
            >
              Send Message
            </button>
          </form>

          <div className="contact-info mt-16 text-center flex flex-wrap justify-center gap-8 md:gap-12 text-foreground/60 text-sm font-bold tracking-widest uppercase">
            <div className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <a className="hover:text-primary transition-colors" href="mailto:hello@tasel.in">hello@tasel.in</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <a className="hover:text-primary transition-colors" href="tel:+911234567890">+91 123 456 7890</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

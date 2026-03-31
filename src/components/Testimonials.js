'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const testimonials = [
  {
    quote: "Tasel completely transformed how we handle our multi-vendor operations. The scalability is simply unmatched in the current market.",
    author: "Sarah Jenkins",
    title: "CTO, TechFlow",
    avatar: "S"
  },
  {
    quote: "The multi-tenant architecture allowed us to expand our marketplace rapidly without worrying about infrastructure scaling.",
    author: "Michael Chen",
    title: "Founder, OmniMarket",
    avatar: "M"
  },
  {
    quote: "Best-in-class support and a platform that truly understands modern e-commerce needs. The API documentation is a breeze to work with.",
    author: "Elena Rodriguez",
    title: "Lead Developer, FashionForward",
    avatar: "E"
  },
];

export default function Testimonials() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      }
    });

    gsap.set('.testimonial-header', { y: 40, opacity: 0 });
    gsap.set('.testimonial-card', { y: 60, opacity: 0, scale: 0.95 });

    tl.to('.testimonial-header', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    })
    .to('.testimonial-card', {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.2)'
    }, "-=0.4");

  }, { scope: container });

  return (
    <section ref={container} className="py-32 relative overflow-hidden">
      <div className="container-custom">
        <div className="testimonial-header text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Trusted by <span className="text-gradient">Innovators</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            See why leading companies choose Tasel to power their next-generation ecommerce platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="testimonial-card group glass p-10 rounded-4xl border-white/5 hover:border-white/10 transition-colors duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div className="mb-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-secondary"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed font-medium italic">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center font-black text-primary border border-white/10">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground">{t.author}</div>
                  <div className="text-sm text-foreground-muted font-medium">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const features = [
  {
    title: 'Idea Incubation',
    description: 'We help you refine your business concepts, validating them against market trends to ensure a solid foundation for growth.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
    )
  },
  {
    title: 'Business Solutions',
    description: 'Comprehensive strategies tailored to your needs. We provide the technology and guidance to streamline your operations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-1.9"/><path d="m3 19 2.1-2.1"/><path d="M7 15l1.9-1.9"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 7 7 17"/><path d="M17 17H7"/><path d="M17 17V7"/></svg>
    )
  },
  {
    title: 'Multi-Tenant Ecommerce',
    description: 'Launch your own marketplace with our powerful multi-tenant platform. Scalable, secure, and ready for global commerce.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
    )
  }
];

const Features = () => {
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

    gsap.set('.feature-header, .feature-card', { y: 50, opacity: 0 });

    tl.to('.feature-header', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    })
    .to('.feature-card', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.2)'
    }, "-=0.4");

  }, { scope: container });

  return (
    <section id="solutions" ref={container} className="py-32 px-6 relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
          <div className="feature-header px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Core Expertise
          </div>
          <h2 className="feature-header text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-[0.9]">
            Solutions Built <br />
            <span className="text-secondary">For Modern Business</span>
          </h2>
          <p className="feature-header text-xl text-foreground-muted">
            From initial concept to global expansion, we provide the architectural foundation and strategic tools to ensure your platform dominates the market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group glass p-10 rounded-4xl border-white/5 hover:border-white/10 transition-colors duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-8 border border-white/5 text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-foreground-muted text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

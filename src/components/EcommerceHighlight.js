'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const EcommerceHighlight = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play none none reverse',
      }
    });

    gsap.set('.eh-left > *', { y: 30, opacity: 0 });
    gsap.set('.eh-list-item', { x: -20, opacity: 0 });
    gsap.set('.eh-stat-card', { scale: 0.8, opacity: 0 });

    tl.to('.eh-left > *', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    })
    .to('.eh-list-item', {
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    }, "-=0.4")
    .to('.eh-stat-card', {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.5)'
    }, "-=0.5");

  }, { scope: container });

  return (
    <section id="ecommerce" ref={container} className="py-32 px-6 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="eh-left">
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
              A Powerful Engine for <br />
              <span className="text-gradient">Unlimited Growth</span>
            </h2>
            <p className="text-xl text-foreground-muted mb-12 max-w-xl">
              Launch your own high-scale marketplace. Tasel provides the infrastructure, while you focus on scaling your business and managing partners.
            </p>
            
            <div className="space-y-6">
              {[
                "Unified Multi-Vendor Dashboard",
                "Automated Commission & Splits",
                "Advanced Inventory Control",
                "Whitelabel Storefront Generation"
              ].map((item, i) => (
                <div key={i} className="eh-list-item flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <span className="text-lg font-semibold text-foreground/80 group-hover:text-foreground transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Vendors", value: "2.5k+", color: "primary" },
                { label: "Revenue", value: "$40M+", color: "secondary" },
                { label: "Uptime", value: "99.99%", color: "accent" },
                { label: "Support", value: "24/7", color: "primary" }
              ].map((stat, i) => (
                <div key={i} className={`eh-stat-card glass p-8 rounded-4xl border-white/5 hover:border-white/20 hover:-translate-y-2 transition-colors duration-500`}>
                  <div className={`text-4xl font-black mb-2 text-gradient`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-widest text-foreground/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceHighlight;

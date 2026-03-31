'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TrustedBy = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse',
      }
    });

    gsap.set('.trusted-title', { opacity: 0, y: 20 });
    gsap.set('.trusted-logo', { opacity: 0, scale: 0.8 });

    tl.to('.trusted-title', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    })
    .to('.trusted-logo', {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.5)'
    }, "-=0.3");

  }, { scope: container });

  return (
    <section ref={container} className="py-20 relative overflow-hidden">
      <div className="container-custom">
        <h3 className="trusted-title text-center text-xs uppercase tracking-[0.3em] text-foreground/30 mb-16 font-black">
          Powering the World's Most Innovative Teams
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-16 md:gap-24">
          {['Trivex', 'Nexus', 'Starlight', 'OmniTech', 'Zenith'].map((name) => (
            <div 
              key={name} 
              className="trusted-logo text-2xl font-black text-foreground/20 transition-all duration-500 flex items-center gap-3 tracking-tighter hover:text-primary hover:scale-110 cursor-default"
            >
              <span className="text-xl">✦</span> {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

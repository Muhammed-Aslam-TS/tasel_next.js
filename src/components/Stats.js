'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
  {
    value: '99.9%',
    label: 'Uptime SLA',
    description: 'Enterprise-grade reliability for your global operations.'
  },
  {
    value: '$500M+',
    label: 'GMV Processed',
    description: 'Scale securely with our battle-tested infrastructure.'
  },
  {
    value: '200+',
    label: 'App Integrations',
    description: 'Seamlessly connect with your existing tech stack.'
  }
];

const Stats = () => {
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

    gsap.set('.stat-box', { y: 40, opacity: 0 });

    tl.to('.stat-box', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.2)'
    });

  }, { scope: container });

  return (
    <section ref={container} className="py-24 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-box group p-12 glass rounded-4xl border-white/5 hover:border-white/10 transition-colors duration-500 hover:-translate-y-2"
            >
              <div className="text-5xl font-black text-gradient mb-4">
                {stat.value}
              </div>
              <div className="text-xl font-bold text-foreground mb-3 tracking-tight">
                {stat.label}
              </div>
              <p className="text-foreground-muted leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

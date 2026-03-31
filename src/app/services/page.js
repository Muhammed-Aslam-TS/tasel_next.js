'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const services = [
  {
    title: 'Custom E-Commerce',
    desc: 'Tailor-made e-commerce platforms designed to fit your unique business model and scale with your growth.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
    ),
  },
  {
    title: 'Cloud Solutions',
    desc: 'Secure, scalable, and reliable cloud infrastructure to keep your business running 24/7 without downtime.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a3.5 3.5 0 0 0 0-7h-1.5c0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8h1.5"/><path d="M12 21v-9"/><path d="m9 15 3-3 3 3"/></svg>
    ),
  },
  {
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile applications that provide seamless experiences for your customers on the go.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
    ),
  },
  {
    title: 'Data Analytics',
    desc: 'Turn your data into actionable insights with our advanced analytics and reporting tools.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
    ),
  },
  {
    title: 'UI/UX Design',
    desc: 'Award-winning design services that focus on user engagement, conversion optimization, and brand identity.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 18V6"/><path d="m16 8-4-4-4 4"/></svg>
    ),
  },
  {
    title: 'Cybersecurity',
    desc: 'Protect your business and customer data with our enterprise-grade security audits and implementations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
  },
];

export default function Services() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    gsap.set('.services-header > *', { y: 30, opacity: 0 });
    gsap.set('.service-card', { y: 50, opacity: 0 });

    tl.to('.services-header > *', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15
    })
    .to('.service-card', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(1.2)'
    }, "-=0.4");

  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen pt-40 pb-20 relative overflow-hidden">
      <div className="container-custom">
        <div className="services-header text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-8">
            Expert Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
            Enterprise-Grade <br />
            <span className="text-gradient">Digital Services</span>
          </h1>
          <p className="text-xl text-foreground-muted">
            We combine high-performance architecture with cutting-edge design to build digital products that scale to millions of users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group glass p-12 rounded-4xl border-white/5 hover:border-white/10 transition-colors duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-8 border border-white/5 text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-foreground-muted text-lg leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

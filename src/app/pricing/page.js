'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small teams and individual entrepreneurs.',
    features: ['Up to 5 Projects', 'Basic Analytics', '24/7 Support', '10GB Storage'],
    button: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$99',
    description: 'Ideal for growing businesses that need more power.',
    features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '100GB Storage', 'Custom Domain'],
    button: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Advanced features and support for large organizations.',
    features: ['Unlimited Everything', 'Dedicated Account Manager', 'SLA', 'SSO & Audit Logs', 'On-premise Options'],
    button: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    gsap.set('.pricing-header > *', { y: 30, opacity: 0 });
    gsap.set('.pricing-card', { y: 50, opacity: 0 });

    tl.to('.pricing-header > *', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15
    })
    .to('.pricing-card', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.2)'
    }, "-=0.4");

  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen pt-40 pb-20 relative overflow-hidden">
      <div className="container-custom">
        <div className="pricing-header text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-8">
            Pricing Plans
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
            Scale Your Business <br />
            <span className="text-gradient">Without Limits</span>
          </h1>
          <p className="text-xl text-foreground-muted">
            Choose the perfect plan for your business needs. Simple, transparent pricing that scales as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card group glass p-10 rounded-4xl border-white/5 flex flex-col transition-colors duration-500 relative hover:-translate-y-2 ${plan.popular ? 'border-primary/30 ring-1 ring-primary/20' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-primary">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10 text-center md:text-left">
                <div className="text-3xl font-black mb-3 tracking-tight">{plan.name}</div>
                <p className="text-foreground/50 text-sm mb-8 font-medium">{plan.description}</p>
                <div className="text-5xl font-black text-foreground mb-4 flex items-baseline justify-center md:justify-start">
                  {plan.price}
                  {plan.price !== 'Custom' && <span className="text-lg font-bold text-foreground/30 ml-2">/mo</span>}
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-foreground/70 font-semibold group/item">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-full font-black text-lg transition-all active:scale-95 ${plan.popular ? 'bg-primary text-white shadow-primary hover:bg-primary-hover hover:shadow-primary-lg' : 'bg-white/5 text-foreground hover:bg-white/10 border border-white/5 hover:border-white/10'}`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

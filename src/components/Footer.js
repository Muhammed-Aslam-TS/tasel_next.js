import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="animate-slideup">
            <Link href="/" className="text-4xl font-black text-gradient tracking-tighter mb-6 inline-block">
              Tasel
            </Link>
            <p className="text-foreground-muted leading-relaxed max-w-xs text-lg">
              Empowering the next generation of global commerce with high-performance, multi-tenant infrastructure.
            </p>
          </div>
          
          <div className="animate-slideup" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-black mb-8 tracking-tight">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="#solutions" className="text-foreground/60 hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#ecommerce" className="text-foreground/60 hover:text-primary transition-colors">Marketplace</Link></li>
              <li><Link href="/pricing" className="text-foreground/60 hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/services" className="text-foreground/60 hover:text-primary transition-colors">Services</Link></li>
            </ul>
          </div>
          
          <div className="animate-slideup" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-black mb-8 tracking-tight">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-foreground/60 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/careers" className="text-foreground/60 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-foreground/60 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-foreground/60 hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div className="animate-slideup" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-black mb-8 tracking-tight">Support</h4>
            <ul className="space-y-4">
              <li><Link href="/docs" className="text-foreground/60 hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="/help" className="text-foreground/60 hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/privacy" className="text-foreground/60 hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-foreground/60 hover:text-primary transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-foreground/30 text-sm font-bold tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} TASEL INC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-primary transition-colors">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

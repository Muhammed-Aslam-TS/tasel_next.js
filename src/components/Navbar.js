import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-container z-50 flex justify-between items-center px-10 py-5 glass rounded-full">
      <Link href="/" className="text-3xl font-black text-gradient tracking-tighter">
        Tasel
      </Link>
      
      <div className="hidden md:flex items-center gap-12">
        <Link href="/" className="text-sm font-semibold text-foreground/60 hover:text-primary transition-all duration-300">Home</Link>
        <Link href="/services" className="text-sm font-semibold text-foreground/60 hover:text-primary transition-all duration-300">Services</Link>
        <Link href="/pricing" className="text-sm font-semibold text-foreground/60 hover:text-primary transition-all duration-300">Pricing</Link>
        <Link href="/contact" className="text-sm font-semibold text-foreground/60 hover:text-primary transition-all duration-300">Contact</Link>
      </div>

      <div className="flex gap-5">
        <Link href="/contact" className="hidden sm:block px-6 py-3 rounded-full text-sm font-bold bg-white/5 hover:bg-white/10 border border-white/5 transition-all active:scale-95">
          Contact Sales
        </Link>
        <Link href="/pricing" className="px-7 py-3 rounded-full text-sm font-bold bg-primary text-white hover:bg-primary-hover shadow-primary transition-all active:scale-95">
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

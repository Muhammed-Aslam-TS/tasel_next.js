import Hero from "@/components/Hero";
import Features from "@/components/Features";
import EcommerceHighlight from "@/components/EcommerceHighlight";
import TrustedBy from "@/components/TrustedBy";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Features />
      <Stats />
      <EcommerceHighlight />
      <Testimonials />
    </main>
  );
}

import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import EcosystemOverview from "@/components/ecosystem-overview";
import MemeCoinSection from "@/components/meme-coin-section";
import NFTEcosystem from "@/components/nft-ecosystem";
import HomebaseCaseStudy from "@/components/homebase-case-study";
import TokenizationSolutions from "@/components/tokenization-solutions";
import CryptoPriceChart from "@/components/crypto-price-chart";
import InteractiveStats from "@/components/interactive-stats";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('animate-slide-up');
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all major sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const element = section as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'all 0.8s ease-out';
      observer.observe(section);
    });

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-crypto-dark text-white font-inter scroll-smooth" data-testid="home-page">
      <Navigation />
      <main>
        <HeroSection />
        <EcosystemOverview />
        <MemeCoinSection />
        <NFTEcosystem />
        <HomebaseCaseStudy />
        <TokenizationSolutions />
        <CryptoPriceChart />
        <InteractiveStats />
      </main>
      <Footer />
    </div>
  );
}

import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#ecosystem", label: "Ecosystem" },
    { href: "#memecoins", label: "Meme Coins" },
    { href: "#nfts", label: "NFTs" },
    { href: "#homebase", label: "Homebase" },
    { href: "#tokenization", label: "Tokenization" },
    { href: "#prices", label: "Prices" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism" data-testid="navigation">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer" data-testid="logo">
              <Sun className="h-8 w-8 text-gradient" />
              <span className="text-xl font-bold text-gradient">SmartSolarSolana</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="hover:text-solana-green transition-colors duration-300"
                data-testid={`nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </button>
            ))}
          </div>
          
          {/* Connect Wallet Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              className="bg-gradient-crypto text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300"
              data-testid="button-connect-wallet"
            >
              Connect Wallet
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 border-t border-border" data-testid="mobile-menu">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left hover:text-solana-green transition-colors duration-300"
                data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

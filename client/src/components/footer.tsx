import { Sun } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const ecosystemLinks = [
    { label: "Solana Overview", href: "#ecosystem" },
    { label: "Meme Coins", href: "#memecoins" },
    { label: "NFT Collections", href: "#nfts" },
    { label: "Homebase Case Study", href: "#homebase" },
    { label: "Real Estate Tokenization", href: "#tokenization" },
  ];

  const resourceLinks = [
    { label: "Solana Official", href: "https://solana.com", external: true },
    { label: "Homebase Platform", href: "https://www.homebasedao.io", external: true },
    { label: "Magic Eden NFTs", href: "https://magiceden.io", external: true },
    { label: "Jupiter DEX", href: "https://jup.ag", external: true },
    { label: "Phantom Wallet", href: "https://phantom.app", external: true },
  ];

  const socialLinks = [
    { icon: "𝕏", href: "#", label: "Twitter" },
    { icon: "💬", href: "#", label: "Discord" },
    { icon: "📁", href: "#", label: "GitHub" },
    { icon: "📱", href: "#", label: "Telegram" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Disclaimer", href: "#" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-crypto-gray py-16" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div data-testid="footer-brand">
            <div className="flex items-center space-x-2 mb-6">
              <Sun className="h-8 w-8 text-gradient" />
              <span className="text-xl font-bold text-gradient">SmartSolarSolana</span>
            </div>
            <p className="text-gray-300 mb-6">
              Exploring the Solana ecosystem through meme coins, NFTs, and real estate tokenization.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-solana-green transition-colors duration-300 text-xl"
                  aria-label={social.label}
                  data-testid={`social-link-${social.label.toLowerCase()}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Ecosystem */}
          <div data-testid="footer-ecosystem">
            <h4 className="text-lg font-semibold mb-6 text-white">Ecosystem</h4>
            <div className="space-y-3">
              {ecosystemLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-solana-green transition-colors duration-300 text-left"
                  data-testid={`ecosystem-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Resources */}
          <div data-testid="footer-resources">
            <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
            <div className="space-y-3">
              {resourceLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block text-gray-300 hover:text-solana-green transition-colors duration-300"
                  data-testid={`resource-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact */}
          <div data-testid="footer-contact">
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <div className="space-y-3">
              <div className="text-gray-300">
                <span className="text-solana-green mr-2">📧</span>
                hello@smartsolarsolana.com
              </div>
              <div className="text-gray-300">
                <span className="text-solana-green mr-2">🌐</span>
                Built on Solana
              </div>
              <div className="text-gray-300">
                <span className="text-solana-green mr-2">⏰</span>
                24/7 Blockchain
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8" data-testid="footer-bottom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SmartSolarSolana. Built for educational purposes. Not investment advice.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-solana-green transition-colors duration-300"
                  data-testid={`legal-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

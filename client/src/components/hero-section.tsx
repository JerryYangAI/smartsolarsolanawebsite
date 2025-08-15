import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const stats = [
    { value: "400ms", label: "Block Time", testId: "stat-block-time" },
    { value: "$0.00025", label: "Avg Fee", testId: "stat-avg-fee" },
    { value: "80M+", label: "Active Users", testId: "stat-active-users" },
    { value: "110M+", label: "NFTs Minted", testId: "stat-nfts-minted" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden pt-20" data-testid="hero-section">
      {/* Background animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-solana-purple rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-solana-green rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-electric-blue rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6" data-testid="hero-title">
            <span className="text-gradient">Solana</span><br />
            <span className="text-white">Ecosystem</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" data-testid="hero-description">
            Discover the fastest blockchain ecosystem with lightning-speed transactions, 
            explosive meme coins, revolutionary NFTs, and real estate tokenization.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glassmorphism rounded-xl p-6 hover:scale-105 transition-transform duration-300"
                data-testid={stat.testId}
              >
                <div className="text-3xl font-bold text-solana-green mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              className="bg-gradient-crypto text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 animate-glow"
              data-testid="button-explore-ecosystem"
            >
              Explore Ecosystem
            </Button>
            <Button 
              variant="outline"
              className="border border-gray-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-solana-green hover:text-solana-green transition-colors duration-300"
              data-testid="button-watch-demo"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

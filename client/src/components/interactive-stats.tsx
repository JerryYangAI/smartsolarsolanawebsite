import { Clock, Zap, DollarSign, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InteractiveStats() {
  const networkStats = [
    {
      icon: Clock,
      value: "400ms",
      label: "Block Time",
      detail: "99.9% Uptime",
      color: "text-solana-purple",
    },
    {
      icon: Zap,
      value: "65,000",
      label: "Max TPS",
      detail: "Current: 3,200",
      color: "text-solana-green",
    },
    {
      icon: DollarSign,
      value: "$0.00025",
      label: "Avg Fee",
      detail: "-90% vs ETH",
      color: "text-yellow-400",
    },
    {
      icon: Leaf,
      value: "0.166",
      label: "Wh per Tx",
      detail: "99.9% less than BTC",
      color: "text-electric-blue",
    },
  ];

  const growthMetrics = [
    {
      label: "Total Value Locked",
      value: "$4.8B",
      change: "+260% YoY Growth",
      progress: 85,
      color: "from-solana-purple to-solana-green",
    },
    {
      label: "Active Wallets (Monthly)",
      value: "15M",
      change: "Unique addresses",
      progress: 75,
      color: "from-blue-500 to-cyan-400",
    },
    {
      label: "NFTs Minted",
      value: "110M+",
      change: "State compression enabled",
      progress: 92,
      color: "from-purple-500 to-pink-400",
    },
  ];

  const marketPerformance = [
    {
      label: "Meme Coin Market Cap",
      value: "$13.0B",
      change: "70% of new tokens launch here",
      progress: 88,
      color: "from-yellow-500 to-orange-400",
    },
    {
      label: "DEX Volume (24h)",
      value: "$890M",
      change: "Surpassing Polygon & Avalanche",
      progress: 70,
      color: "from-cyan-500 to-blue-400",
    },
    {
      label: "Tokenized Real Estate",
      value: "$247K",
      change: "Early stage - massive growth potential",
      progress: 15,
      color: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <section className="py-20 bg-crypto-dark" data-testid="interactive-stats">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6" data-testid="stats-title">
            <span className="text-gradient">Real-Time</span> Statistics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="stats-description">
            Live data from the Solana ecosystem showing growth, adoption, and market performance
          </p>
        </div>
        
        {/* Network Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {networkStats.map((stat, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
              data-testid={`network-stat-${index}`}
            >
              <div className={`text-3xl mb-2 ${stat.color}`}>
                <stat.icon className="w-8 h-8 mx-auto" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
              <div className="text-xs text-green-400 mt-1">{stat.detail}</div>
            </div>
          ))}
        </div>
        
        {/* Ecosystem Growth Metrics */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glassmorphism rounded-2xl p-8" data-testid="ecosystem-growth">
            <h3 className="text-2xl font-bold mb-6 text-center">Ecosystem Growth</h3>
            <div className="space-y-6">
              {growthMetrics.map((metric, index) => (
                <div key={index} data-testid={`growth-metric-${index}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">{metric.label}</span>
                    <span className="text-xl font-bold text-green-400">{metric.value}</span>
                  </div>
                  <div className="bg-crypto-gray rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${metric.color} h-2 rounded-full transition-all duration-1000`}
                      style={{ width: `${metric.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{metric.change}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glassmorphism rounded-2xl p-8" data-testid="market-performance">
            <h3 className="text-2xl font-bold mb-6 text-center">Market Performance</h3>
            <div className="space-y-6">
              {marketPerformance.map((performance, index) => (
                <div key={index} data-testid={`market-metric-${index}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">{performance.label}</span>
                    <span className="text-xl font-bold text-blue-400">{performance.value}</span>
                  </div>
                  <div className="bg-crypto-gray rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${performance.color} h-2 rounded-full transition-all duration-1000`}
                      style={{ width: `${performance.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{performance.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="glassmorphism rounded-2xl p-8 text-center" data-testid="cta-section">
          <h3 className="text-3xl font-bold mb-4 text-gradient">Ready to Join the Solana Ecosystem?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your Web3 journey with the fastest, most efficient blockchain. From meme coins to NFTs to real estate tokenization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              className="bg-gradient-crypto text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300"
              data-testid="button-get-started"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline"
              className="border border-solana-green text-solana-green px-8 py-4 rounded-full text-lg font-semibold hover:bg-solana-green hover:text-white transition-colors duration-300"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

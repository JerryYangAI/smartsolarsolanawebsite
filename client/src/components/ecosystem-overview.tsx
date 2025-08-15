import { Zap, Coins, Leaf } from "lucide-react";

export default function EcosystemOverview() {
  const advantages = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process thousands of transactions per second with 400ms block times. No more waiting for confirmations.",
      metric: "65,000 TPS",
      metricLabel: "Transaction Throughput",
      color: "text-solana-purple",
    },
    {
      icon: Coins,
      title: "Ultra Low Fees",
      description: "Trade, mint, and transfer with fees under $0.01. Perfect for high-frequency DeFi and NFT activities.",
      metric: "$0.00025",
      metricLabel: "Average Fee",
      color: "text-solana-green",
    },
    {
      icon: Leaf,
      title: "Energy Efficient",
      description: "Proof-of-stake consensus mechanism that's 99.9% more energy efficient than proof-of-work blockchains.",
      metric: "0.166 Wh",
      metricLabel: "Energy Consumption",
      color: "text-electric-blue",
    },
  ];

  const growthStats = [
    { label: "Total Value Locked (TVL)", value: "$4.8B+", change: "↑ 260% YoY Growth", color: "text-solana-purple" },
    { label: "Monthly Active Wallets", value: "15M+", change: "Unique addresses monthly", color: "text-solana-green" },
  ];

  const comparisons = [
    { label: "vs Polygon", value: "+180%", color: "text-solana-green" },
    { label: "vs Avalanche", value: "+145%", color: "text-solana-green" },
  ];

  const userTypes = [
    { label: "DeFi Users", value: "8.2M", color: "text-blue-400" },
    { label: "NFT Traders", value: "3.8M", color: "text-purple-400" },
  ];

  return (
    <section id="ecosystem" className="py-20 bg-crypto-gray" data-testid="ecosystem-overview">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6" data-testid="ecosystem-title">
            <span className="text-gradient">Technical</span> Advantages
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="ecosystem-description">
            Why Solana is the preferred blockchain for the next generation of Web3 applications
          </p>
        </div>
        
        {/* Technical Advantages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
              data-testid={`advantage-${advantage.title.toLowerCase().replace(' ', '-')}`}
            >
              <div className={`text-4xl mb-4 ${advantage.color}`}>
                <advantage.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{advantage.title}</h3>
              <p className="text-gray-300 mb-6">{advantage.description}</p>
              <div className="bg-crypto-dark rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-2">{advantage.metricLabel}</div>
                <div className={`text-2xl font-bold ${advantage.color}`}>{advantage.metric}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Ecosystem Growth Chart */}
        <div className="glassmorphism rounded-2xl p-8" data-testid="ecosystem-growth">
          <h3 className="text-3xl font-bold mb-8 text-center">Ecosystem Growth 2025</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {growthStats.map((stat, index) => (
              <div key={index}>
                <h4 className={`text-xl font-semibold mb-4 ${stat.color}`}>{stat.label}</h4>
                <div className="text-4xl font-bold mb-2" data-testid={`growth-stat-${index}`}>{stat.value}</div>
                <div className="text-green-400 text-sm">{stat.change}</div>
                <div className="bg-crypto-dark rounded-lg p-4 mt-4">
                  {index === 0 ? (
                    comparisons.map((comp, compIndex) => (
                      <div key={compIndex} className="flex justify-between items-center">
                        <span className="text-gray-400">{comp.label}</span>
                        <span className={comp.color}>{comp.value}</span>
                      </div>
                    ))
                  ) : (
                    userTypes.map((type, typeIndex) => (
                      <div key={typeIndex} className="flex justify-between items-center">
                        <span className="text-gray-400">{type.label}</span>
                        <span className={type.color}>{type.value}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { TrendingUp, Rocket, DollarSign, Users } from "lucide-react";

export default function MemeCoinSection() {
  const memeCoins = [
    {
      name: "Dogwifhat",
      symbol: "WIF",
      marketCap: "$3.5B+",
      change24h: "+12.5%",
      changePositive: true,
      description: "The Dogecoin of Solana featuring a Shiba Inu with a hat, viral on TikTok",
      bgColor: "bg-solana-purple",
      imageAlt: "Dogwifhat meme token - Shiba Inu wearing a colorful knit hat",
    },
    {
      name: "Bonk",
      symbol: "BONK",
      marketCap: "$2.1B",
      change24h: "-5.2%",
      changePositive: false,
      description: "Dog-themed meme coin with exchange, lending platform, and wallet services",
      bgColor: "bg-yellow-500",
      imageAlt: "Bonk dog-themed meme token",
    },
    {
      name: "Official Trump",
      symbol: "TRUMP",
      marketCap: "$1.8B",
      change24h: "+45.3%",
      changePositive: true,
      description: "Presidential meme coin launched days before inauguration, highly volatile",
      bgColor: "bg-red-500",
      imageAlt: "Official Trump token political meme coin",
    },
    {
      name: "AI16Z",
      symbol: "AI16Z",
      marketCap: "$92M+",
      change24h: "+8.7%",
      changePositive: true,
      description: "AI meets meme coins - decentralized AI hedge fund with trading bots",
      bgColor: "bg-blue-500",
      imageAlt: "AI16Z artificial intelligence meme token",
    },
    {
      name: "Pudgy Penguins",
      symbol: "PENGU",
      marketCap: "$456M",
      change24h: "+18.9%",
      changePositive: true,
      description: "Born from NFT collection with community airdrops and Shopify integration",
      bgColor: "bg-purple-500",
      imageAlt: "Pudgy Penguins NFT collection token",
    },
    {
      name: "Popcat",
      symbol: "POPCAT",
      marketCap: "$234M",
      change24h: "+15.4%",
      changePositive: true,
      description: "Based on viral cat meme with Binance listing and strong Twitter momentum",
      bgColor: "bg-orange-500",
      imageAlt: "Popcat viral cat meme token",
    },
  ];

  const whySolana = [
    {
      icon: Rocket,
      title: "Instant Hype Trading",
      description: "400ms block times enable instant reactions to viral trends and social media hype cycles",
      color: "text-yellow-400",
    },
    {
      icon: DollarSign,
      title: "Ultra Low Fees",
      description: "$0.00025 transaction costs make small trades profitable, perfect for meme coin speculation",
      color: "text-green-400",
    },
    {
      icon: Users,
      title: "Massive Community",
      description: "80M+ active users drive viral retail trends, with 70% of new meme tokens launching here",
      color: "text-purple-400",
    },
  ];

  return (
    <section id="memecoins" className="py-20 bg-crypto-dark" data-testid="meme-coin-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6" data-testid="meme-coins-title">
            <span className="text-gradient">Meme Coins</span> on Solana
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="meme-coins-description">
            The explosive meme coin market with $13B+ market cap, powered by Solana's speed and low fees
          </p>
          <div className="mt-8 glassmorphism rounded-xl p-6 inline-block">
            <div className="text-3xl font-bold text-yellow-400" data-testid="total-market-cap">$13.0B</div>
            <div className="text-sm text-gray-400">Total Market Cap</div>
          </div>
        </div>
        
        {/* Top Meme Coins Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {memeCoins.map((coin, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              data-testid={`meme-coin-${coin.symbol.toLowerCase()}`}
            >
              {/* Placeholder for token imagery */}
              <div className="w-full h-48 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-gray-300 text-sm text-center px-4">{coin.imageAlt}</span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold" data-testid={`coin-name-${coin.symbol.toLowerCase()}`}>{coin.name}</h3>
                <span className={`text-sm ${coin.bgColor} px-3 py-1 rounded-full ${coin.bgColor.includes('yellow') ? 'text-black' : 'text-white'}`}>
                  {coin.symbol}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-2xl font-bold text-solana-green" data-testid={`market-cap-${coin.symbol.toLowerCase()}`}>
                    {coin.marketCap}
                  </div>
                  <div className="text-xs text-gray-400">Market Cap</div>
                </div>
                <div>
                  <div className={`text-lg font-semibold ${coin.changePositive ? 'text-green-400' : 'text-red-400'}`} data-testid={`change-24h-${coin.symbol.toLowerCase()}`}>
                    {coin.change24h}
                  </div>
                  <div className="text-xs text-gray-400">24h Change</div>
                </div>
              </div>
              
              <p className="text-sm text-gray-300" data-testid={`description-${coin.symbol.toLowerCase()}`}>{coin.description}</p>
            </div>
          ))}
        </div>
        
        {/* Why Solana for Meme Coins */}
        <div className="glassmorphism rounded-2xl p-8" data-testid="why-solana-meme-coins">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Solana for Meme Coins?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whySolana.map((feature, index) => (
              <div key={index} className="text-center" data-testid={`solana-feature-${index}`}>
                <div className={`text-4xl mb-4 ${feature.color}`}>
                  <feature.icon className="w-10 h-10 mx-auto" />
                </div>
                <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

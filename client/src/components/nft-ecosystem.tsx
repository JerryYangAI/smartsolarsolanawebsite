
export default function NFTEcosystem() {
  const nftStats = [
    { value: "110M+", label: "NFTs Minted", color: "text-purple-400" },
    { value: "3.8M", label: "Monthly Traders", color: "text-blue-400" },
    { value: "$0.01", label: "Avg Mint Cost", color: "text-green-400" },
    { value: "99%", label: "Cost Reduction", color: "text-yellow-400" },
  ];

  const nftCollections = [
    {
      name: "Mad Lads",
      badge: "xNFT",
      floorPrice: "78 SOL",
      change: "↑ from 28 SOL",
      description: "Largest by market cap. xNFTs with embedded code, stakeable from Backpack wallet",
      badgeColor: "bg-red-500",
      imageAlt: "Mad Lads NFT collection street art style characters",
    },
    {
      name: "Degenerate Ape Academy",
      badge: "DAA",
      floorPrice: "45 SOL",
      change: "12.3K SOL",
      changeLabel: "24h Volume",
      description: "Iconic ape-themed collection with vibrant designs and strong community engagement",
      badgeColor: "bg-yellow-500 text-black",
      imageAlt: "Degenerate Ape Academy NFT collection",
    },
    {
      name: "Lifinity Flares",
      badge: "UTILITY",
      floorPrice: "12+ SOL",
      change: "+300%",
      changeLabel: "March Growth",
      description: "DeFi utility NFT with trading fee discounts and liquidity pool earnings",
      badgeColor: "bg-blue-500",
      imageAlt: "Lifinity Flares DeFi utility NFT",
    },
    {
      name: "Famous Fox Federation",
      badge: "FFF",
      floorPrice: "8.5 SOL",
      change: "4.2K",
      changeLabel: "Holders",
      description: "Community-focused collection with utility tools including messaging system",
      badgeColor: "bg-orange-500",
      imageAlt: "Famous Fox Federation NFT collection",
    },
    {
      name: "Pudgy Penguins",
      badge: "PENGU",
      floorPrice: "15.8 SOL",
      change: "Growing",
      changeLabel: "Trend",
      description: "Penguin caricatures with token integration and community airdrops",
      badgeColor: "bg-cyan-500",
      imageAlt: "Pudgy Penguins NFT collection cute characters",
    },
    {
      name: "State Compression",
      badge: "TECH",
      floorPrice: "1M NFTs",
      change: "99% Savings",
      changeLabel: "Cost Reduction",
      description: "Revolutionary technology enabling massive NFT collections at fraction of the cost",
      badgeColor: "bg-green-500",
      imageAlt: "Solana state compression technology visualization",
    },
  ];

  const marketplaces = [
    {
      name: "Magic Eden",
      share: "90%",
      description: "Market share with easy-to-use tools and lowest fees",
      icon: "🎭",
      color: "text-purple-400",
    },
    {
      name: "Tensor",
      share: "Pro",
      description: "Professional features with floor charts and market-making orders",
      icon: "📈",
      color: "text-blue-400",
    },
    {
      name: "Solanart",
      share: "First",
      description: "Original Solana marketplace with largest collection variety",
      icon: "🎨",
      color: "text-green-400",
    },
    {
      name: "Hyperspace",
      share: "Agg",
      description: "Aggregator browsing across multiple Solana marketplaces",
      icon: "🔍",
      color: "text-yellow-400",
    },
  ];

  return (
    <section id="nfts" className="py-20 bg-crypto-gray" data-testid="nft-ecosystem">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6" data-testid="nft-ecosystem-title">
            <span className="text-gradient">NFT Ecosystem</span> on Solana
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="nft-ecosystem-description">
            110M+ NFTs minted with state-of-the-art compression technology and the lowest fees in Web3
          </p>
        </div>
        
        {/* NFT Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {nftStats.map((stat, index) => (
            <div key={index} className="glassmorphism rounded-xl p-6 text-center" data-testid={`nft-stat-${index}`}>
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Top NFT Collections */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Top Collections 2025</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nftCollections.map((collection, index) => (
              <div 
                key={index}
                className="glassmorphism rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                data-testid={`nft-collection-${collection.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Placeholder for NFT imagery */}
                <div className="w-full h-48 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-white text-sm text-center px-4">{collection.imageAlt}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold" data-testid={`collection-name-${index}`}>{collection.name}</h4>
                  <span className={`text-sm ${collection.badgeColor} px-3 py-1 rounded-full`}>
                    {collection.badge}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xl font-bold text-solana-green" data-testid={`floor-price-${index}`}>
                      {collection.floorPrice}
                    </div>
                    <div className="text-xs text-gray-400">Floor Price</div>
                  </div>
                  <div>
                    <div className="text-lg text-green-400" data-testid={`change-${index}`}>
                      {collection.change}
                    </div>
                    <div className="text-xs text-gray-400">{collection.changeLabel || "Recent Growth"}</div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-300" data-testid={`collection-description-${index}`}>{collection.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* NFT Marketplaces */}
        <div className="glassmorphism rounded-2xl p-8" data-testid="nft-marketplaces">
          <h3 className="text-3xl font-bold mb-8 text-center">Leading NFT Marketplaces</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {marketplaces.map((marketplace, index) => (
              <div key={index} className="text-center" data-testid={`marketplace-${marketplace.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className={`text-3xl mb-4 ${marketplace.color}`}>
                  {marketplace.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{marketplace.name}</h4>
                <div className={`text-2xl font-bold ${marketplace.color} mb-2`}>{marketplace.share}</div>
                <p className="text-sm text-gray-300">{marketplace.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

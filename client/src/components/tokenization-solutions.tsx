
export default function TokenizationSolutions() {
  const marketOutlook = [
    {
      value: "$3.5B",
      label: "Current Market Size (2024)",
      imageAlt: "Current real estate tokenization market",
      color: "text-green-400",
    },
    {
      value: "$19.4B",
      label: "Projected 2033 Market",
      imageAlt: "Projected real estate tokenization growth",
      color: "text-yellow-400",
    },
    {
      value: "27%",
      label: "CAGR 2024-2035",
      imageAlt: "Real estate tokenization growth chart",
      color: "text-purple-400",
    },
  ];

  const useCases = [
    {
      title: "Residential Properties",
      description: "Single-family homes, condos, and apartment buildings. Start investing with as little as $100.",
      minInvestment: "$100",
      expectedYield: "4-8%",
      color: "text-blue-400",
      imageAlt: "Residential property tokenization",
    },
    {
      title: "Commercial Real Estate",
      description: "Office buildings, retail spaces, and industrial properties with institutional-grade returns.",
      minInvestment: "$500",
      expectedYield: "6-12%",
      color: "text-purple-400",
      imageAlt: "Commercial real estate tokenization",
    },
    {
      title: "Tokenized REITs",
      description: "Diversified real estate portfolios with instant liquidity and transparent blockchain records.",
      minInvestment: "$50",
      expectedYield: "5-9%",
      color: "text-green-400",
      imageAlt: "REIT tokenization portfolio",
    },
    {
      title: "International Properties",
      description: "Access global real estate markets from emerging economies to developed nations.",
      minInvestment: "$200",
      expectedYield: "3-15%",
      color: "text-yellow-400",
      imageAlt: "International real estate tokenization",
    },
    {
      title: "Fractional Ownership",
      description: "Own fractions of high-value properties like luxury homes and prime real estate.",
      minInvestment: "$1,000",
      expectedYield: "2-10%",
      color: "text-red-400",
      imageAlt: "Fractional property ownership tokenization",
    },
    {
      title: "Development Projects",
      description: "Invest in real estate development from ground-up with shared profits upon completion.",
      minInvestment: "$2,500",
      expectedYield: "8-25%",
      color: "text-orange-400",
      imageAlt: "Real estate development project tokenization",
    },
  ];

  const competitors = [
    {
      name: "RealT",
      blockchain: "Ethereum",
      minInvestment: "$50",
      focus: "US Residential",
      color: "text-blue-400",
    },
    {
      name: "RealBlocks",
      blockchain: "Multi-chain",
      minInvestment: "$25,000",
      focus: "Commercial",
      color: "text-purple-400",
    },
    {
      name: "Homebase",
      blockchain: "Solana",
      minInvestment: "$100",
      focus: "Residential + Commercial",
      highlighted: true,
      color: "text-solana-green",
    },
  ];

  return (
    <section id="tokenization" className="py-20 bg-crypto-gray" data-testid="tokenization-solutions">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6" data-testid="tokenization-title">
            <span className="text-gradient">Real Estate</span> Tokenization
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="tokenization-description">
            The future of real estate investment: $3 trillion market by 2030 with 27% CAGR growth
          </p>
        </div>
        
        {/* Market Outlook */}
        <div className="glassmorphism rounded-2xl p-8 mb-16" data-testid="market-outlook">
          <h3 className="text-3xl font-bold mb-8 text-center">2025 Market Outlook</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {marketOutlook.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`market-stat-${index}`}>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm text-gray-400 mb-4">{stat.label}</div>
                {/* Placeholder for market visualization */}
                <div className="w-full h-32 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-gray-300 text-xs text-center px-2">{stat.imageAlt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Use Cases */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Tokenization Use Cases</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="glassmorphism rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                data-testid={`use-case-${useCase.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Placeholder for use case imagery */}
                <div className="w-full h-48 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-white text-sm text-center px-4">{useCase.imageAlt}</span>
                </div>
                
                <h4 className={`text-xl font-bold mb-4 ${useCase.color}`}>{useCase.title}</h4>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Min Investment:</span>
                    <span className="text-sm font-semibold text-green-400">{useCase.minInvestment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Expected Yield:</span>
                    <span className="text-sm font-semibold text-yellow-400">{useCase.expectedYield}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Competitive Landscape */}
        <div className="glassmorphism rounded-2xl p-8" data-testid="competitive-landscape">
          <h3 className="text-3xl font-bold mb-8 text-center">Competitive Landscape</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {competitors.map((competitor, index) => (
              <div 
                key={index}
                className={`text-center ${competitor.highlighted ? 'border-2 border-solana-green rounded-lg p-4' : ''}`}
                data-testid={`competitor-${competitor.name.toLowerCase()}`}
              >
                <div className={`text-3xl mb-4 ${competitor.color}`}>
                  {competitor.name === 'RealT' ? '🏠' : competitor.name === 'RealBlocks' ? '🏢' : '⭐'}
                </div>
                <h4 className={`text-xl font-semibold mb-4 ${competitor.highlighted ? 'text-solana-green' : 'text-white'}`}>
                  {competitor.name}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Blockchain:</span>
                    <span className={competitor.highlighted ? 'text-solana-purple font-bold' : 'text-white'}>
                      {competitor.blockchain}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Min Investment:</span>
                    <span className={competitor.highlighted ? 'text-green-400 font-bold' : 'text-green-400'}>
                      {competitor.minInvestment}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Focus:</span>
                    <span className="text-white">{competitor.focus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

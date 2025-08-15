import { Check, X, Shield, Search, Ban, Percent, Calendar } from "lucide-react";

export default function HomebaseCaseStudy() {
  const successMetrics = [
    { value: "$246,800", label: "Total Raised", color: "text-solana-green" },
    { value: "< 2 weeks", label: "Funding Time", color: "text-purple-400" },
    { value: "76", label: "Total Investors", color: "text-blue-400" },
    { value: "$100", label: "Min Investment", color: "text-yellow-400" },
  ];

  const cardinalDetails = [
    { label: "Location:", value: "McAllen, South Texas" },
    { label: "Property Value:", value: "$235,000", color: "text-green-400" },
    { label: "Amount Raised:", value: "$246,800", color: "text-solana-purple" },
    { label: "Investors:", value: "38 (30 non-accredited)" },
    { label: "Avg Investment:", value: "$1,200", color: "text-blue-400" },
  ];

  const blockchainComparisons = [
    {
      name: "Ethereum",
      icon: "Ξ",
      status: "rejected",
      reason: "❌ Rejected due to high, volatile gas fees making small investments unprofitable",
      color: "text-red-400",
    },
    {
      name: "Polygon",
      icon: "♦",
      status: "rejected",
      reason: "❌ Rejected due to bridge complexity causing funds to \"disappear for 15 minutes\"",
      color: "text-purple-400",
    },
    {
      name: "Solana",
      icon: "◉",
      status: "selected",
      reason: "✅ Selected for fast transactions, low fees, and native USDC support",
      color: "text-solana-green",
    },
  ];

  const technicalFeatures = [
    { icon: "🔷", label: "Built using Metaplex protocol" },
    { icon: "🪙", label: "NFTs representing fractional ownership" },
    { icon: "🛡️", label: "Smart contracts with freeze/burn/reissue capabilities" },
    { icon: "⏰", label: "One-year lockup period (Regulation D compliance)" },
  ];

  const investmentFeatures = [
    { icon: "🔍", label: "Comprehensive property due diligence" },
    { icon: "🚫", label: "No existing liens or mortgages (debt-free)" },
    { icon: "📊", label: "Property owners retain 80% equity" },
    { icon: "📅", label: "Monthly rental income distributions via USDC" },
  ];

  const complianceFeatures = [
    "Filed under Regulation D exemption",
    "Marketed to both accredited and non-accredited investors",
    "Partnered with Hunton Andrews Kurth (Top 100 US law firm)",
    "One-year lockup period for all tokens",
  ];

  const protectionFeatures = [
    "Hack protection with token reissuance capabilities",
    "Full fund returns if properties don't reach funding goals",
    "Secondary trading after one-year lockup",
    "Platform-facilitated buyer-seller matching",
  ];

  return (
    <section id="homebase" className="py-20 bg-crypto-dark" data-testid="homebase-case-study">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6" data-testid="homebase-title">
            <span className="text-gradient">Homebase</span> Case Study
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="homebase-description">
            The first successful real estate tokenization platform on Solana, democratizing property investment with $100 minimums
          </p>
        </div>
        
        {/* Success Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {successMetrics.map((metric, index) => (
            <div key={index} className="glassmorphism rounded-xl p-6 text-center" data-testid={`success-metric-${index}`}>
              <div className={`text-3xl font-bold ${metric.color}`}>{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>
        
        {/* The Cardinal Property Details */}
        <div className="glassmorphism rounded-2xl p-8 mb-12" data-testid="cardinal-property">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              {/* Placeholder for property image */}
              <div className="w-full h-64 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-center px-4">The Cardinal - first tokenized property on Homebase</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient">The Cardinal Property</h3>
              <div className="space-y-4">
                {cardinalDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between" data-testid={`cardinal-detail-${index}`}>
                    <span className="text-gray-300">{detail.label}</span>
                    <span className={`font-semibold ${detail.color || 'text-white'}`}>{detail.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-crypto-gray rounded-lg">
                <p className="text-sm text-gray-300" data-testid="cardinal-highlight">
                  <Check className="inline w-4 h-4 text-green-400 mr-2" />
                  Fully funded in under 2 weeks with 78% non-institutional investors
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Why Solana Choice */}
        <div className="glassmorphism rounded-2xl p-8 mb-12" data-testid="blockchain-comparison">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Homebase Chose Solana</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {blockchainComparisons.map((blockchain, index) => (
              <div key={index} className="text-center" data-testid={`blockchain-${blockchain.name.toLowerCase()}`}>
                <div className={`text-4xl mb-4 ${blockchain.color}`}>
                  {blockchain.icon}
                </div>
                <h4 className={`text-xl font-semibold mb-4 ${blockchain.color}`}>{blockchain.name}</h4>
                <p className="text-gray-300">{blockchain.reason}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Technical Implementation */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glassmorphism rounded-2xl p-8" data-testid="technical-stack">
            <h3 className="text-2xl font-bold mb-6 text-solana-purple">Technical Stack</h3>
            <div className="space-y-4">
              {technicalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3" data-testid={`technical-feature-${index}`}>
                  <span className="text-2xl">{feature.icon}</span>
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glassmorphism rounded-2xl p-8" data-testid="investment-process">
            <h3 className="text-2xl font-bold mb-6 text-solana-green">Investment Process</h3>
            <div className="space-y-4">
              {investmentFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3" data-testid={`investment-feature-${index}`}>
                  <span className="text-2xl">{feature.icon}</span>
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Legal Compliance */}
        <div className="glassmorphism rounded-2xl p-8" data-testid="legal-compliance">
          <h3 className="text-3xl font-bold mb-8 text-center">SEC Compliance & Legal Framework</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Regulatory Compliance</h4>
              <ul className="space-y-3 text-gray-300">
                {complianceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center" data-testid={`compliance-feature-${index}`}>
                    <Check className="w-4 h-4 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-purple-400">Investor Protections</h4>
              <ul className="space-y-3 text-gray-300">
                {protectionFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center" data-testid={`protection-feature-${index}`}>
                    <Shield className="w-4 h-4 text-blue-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

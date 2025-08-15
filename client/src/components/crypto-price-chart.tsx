import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

interface PriceData {
  bitcoin: { usd: number; usd_24h_change: number };
  ethereum: { usd: number; usd_24h_change: number };
  solana: { usd: number; usd_24h_change: number };
}

interface HistoricalPrice {
  timestamp: number;
  price: number;
  date: string;
}

interface ChartData {
  date: string;
  timestamp: number;
  BTC: number;
  ETH: number;
  SOL: number;
}

const COIN_GECKO_API = "https://api.coingecko.com/api/v3";

export default function CryptoPriceChart() {
  const [timeRange, setTimeRange] = useState("7"); // 1, 7, 30, 90 days
  const [selectedCoin, setSelectedCoin] = useState("all");

  // Fetch current prices
  const { data: currentPrices, isLoading: pricesLoading } = useQuery({
    queryKey: ["crypto-prices"],
    queryFn: async (): Promise<PriceData> => {
      const response = await fetch(
        `${COIN_GECKO_API}/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true`
      );
      if (!response.ok) throw new Error("Failed to fetch prices");
      return response.json();
    },
    refetchInterval: 60000, // Update every minute
  });

  // Fetch historical data
  const { data: historicalData, isLoading: historyLoading } = useQuery({
    queryKey: ["crypto-history", timeRange],
    queryFn: async (): Promise<ChartData[]> => {
      const coins = ["bitcoin", "ethereum", "solana"];
      const promises = coins.map(async (coin) => {
        const response = await fetch(
          `${COIN_GECKO_API}/coins/${coin}/market_chart?vs_currency=usd&days=${timeRange}&interval=${
            timeRange === "1" ? "hourly" : "daily"
          }`
        );
        if (!response.ok) throw new Error(`Failed to fetch ${coin} history`);
        const data = await response.json();
        return { coin, prices: data.prices };
      });

      const results = await Promise.all(promises);
      
      // Combine all coin data into chart format
      const btcPrices = results[0].prices;
      const ethPrices = results[1].prices;
      const solPrices = results[2].prices;

      return btcPrices.map(([timestamp, btcPrice]: [number, number], index: number) => ({
        timestamp,
        date: new Date(timestamp).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          ...(timeRange === "1" && { hour: "2-digit", minute: "2-digit" }),
        }),
        BTC: Math.round(btcPrice * 100) / 100,
        ETH: Math.round(ethPrices[index]?.[1] * 100) / 100,
        SOL: Math.round(solPrices[index]?.[1] * 100) / 100,
      }));
    },
    refetchInterval: 300000, // Update every 5 minutes
  });

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${price.toLocaleString()}`;
    }
    return `$${price.toFixed(2)}`;
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change.toFixed(2)}%`;
  };

  const getPriceColor = (change: number) => {
    return change >= 0 ? "text-green-400" : "text-red-400";
  };

  const coins = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      price: currentPrices?.bitcoin.usd,
      change: currentPrices?.bitcoin.usd_24h_change,
      color: "#F7931A",
    },
    {
      id: "ethereum", 
      name: "Ethereum",
      symbol: "ETH",
      price: currentPrices?.ethereum.usd,
      change: currentPrices?.ethereum.usd_24h_change,
      color: "#627EEA",
    },
    {
      id: "solana",
      name: "Solana",
      symbol: "SOL", 
      price: currentPrices?.solana.usd,
      change: currentPrices?.solana.usd_24h_change,
      color: "#9945FF",
    },
  ];

  const timeRanges = [
    { value: "1", label: "24H" },
    { value: "7", label: "7D" },
    { value: "30", label: "30D" },
    { value: "90", label: "90D" },
  ];

  return (
    <section id="prices" className="py-20 bg-crypto-gray" data-testid="crypto-price-chart">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6" data-testid="price-chart-title">
            <span className="text-gradient">Live Crypto</span> Prices
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="price-chart-description">
            Real-time price data for Bitcoin, Ethereum, and Solana powered by CoinGecko API
          </p>
        </div>

        {/* Current Prices Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {coins.map((coin) => (
            <Card key={coin.id} className="glassmorphism border-0" data-testid={`price-card-${coin.symbol.toLowerCase()}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">{coin.name}</CardTitle>
                  <span className="text-sm text-gray-400">{coin.symbol}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-3xl font-bold" style={{ color: coin.color }}>
                    {pricesLoading ? "Loading..." : formatPrice(coin.price || 0)}
                  </div>
                  <div className={`flex items-center space-x-2 ${getPriceColor(coin.change || 0)}`}>
                    {(coin.change || 0) >= 0 ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="text-sm font-semibold">
                      {pricesLoading ? "..." : formatChange(coin.change || 0)} (24h)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Price Chart */}
        <Card className="glassmorphism border-0" data-testid="price-chart-container">
          <CardHeader>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
              <div>
                <CardTitle className="text-2xl font-bold flex items-center space-x-2">
                  <Activity className="w-6 h-6 text-solana-purple" />
                  <span>Price History</span>
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Historical price movements for BTC, ETH, and SOL
                </CardDescription>
              </div>
              
              {/* Time Range Buttons */}
              <div className="flex space-x-2">
                {timeRanges.map((range) => (
                  <Button
                    key={range.value}
                    variant={timeRange === range.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTimeRange(range.value)}
                    className={timeRange === range.value ? "bg-solana-purple" : ""}
                    data-testid={`timerange-${range.value}`}
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="h-96">
              {historyLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-400">Loading chart data...</div>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="date" 
                      stroke="#9CA3AF"
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      stroke="#9CA3AF"
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) => formatPrice(value)}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                        color: "#F3F4F6",
                      }}
                      formatter={(value: number, name: string) => [
                        formatPrice(value),
                        name,
                      ]}
                      labelStyle={{ color: "#9CA3AF" }}
                    />
                    <Legend />
                    {selectedCoin === "all" || selectedCoin === "BTC" ? (
                      <Line
                        type="monotone"
                        dataKey="BTC"
                        stroke="#F7931A"
                        strokeWidth={2}
                        dot={false}
                        name="Bitcoin"
                      />
                    ) : null}
                    {selectedCoin === "all" || selectedCoin === "ETH" ? (
                      <Line
                        type="monotone"
                        dataKey="ETH"
                        stroke="#627EEA"
                        strokeWidth={2}
                        dot={false}
                        name="Ethereum"
                      />
                    ) : null}
                    {selectedCoin === "all" || selectedCoin === "SOL" ? (
                      <Line
                        type="monotone"
                        dataKey="SOL"
                        stroke="#9945FF"
                        strokeWidth={2}
                        dot={false}
                        name="Solana"
                      />
                    ) : null}
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>
            
            {/* Coin Filter Buttons */}
            <div className="flex justify-center space-x-2 mt-4">
              <Button
                variant={selectedCoin === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCoin("all")}
                className={selectedCoin === "all" ? "bg-solana-green" : ""}
                data-testid="filter-all"
              >
                All
              </Button>
              {coins.map((coin) => (
                <Button
                  key={coin.symbol}
                  variant={selectedCoin === coin.symbol ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCoin(coin.symbol)}
                  style={{
                    backgroundColor: selectedCoin === coin.symbol ? coin.color : undefined,
                  }}
                  data-testid={`filter-${coin.symbol.toLowerCase()}`}
                >
                  {coin.symbol}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Source Attribution */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            Price data provided by{" "}
            <a
              href="https://www.coingecko.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-solana-green hover:text-solana-purple transition-colors"
            >
              CoinGecko API
            </a>{" "}
            • Updates every minute
          </p>
        </div>
      </div>
    </section>
  );
}
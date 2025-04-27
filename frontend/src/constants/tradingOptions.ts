
// Interface pour les options avec label et value
export interface Option {
    value: string;
    label: string;
  }
  
  // Interface pour l'objet tradingOptions
  export interface TradingOptions {
    symbols: string[];
    platforms: string[];
    sides: Option[];
    types: Option[];
  }
  
  export const tradingOptions: TradingOptions = {
    symbols: ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'BNB/USDT', 'ADA/USDT', 'XRP/USDT', 'DOT/USDT', 'DOGE/USDT'],
    
    platforms: ['Binance', 'Coinbase', 'Kraken', 'Kucoin', 'Huobi', 'Bitfinex', 'ByBit'],
    
    sides: [
      { value: 'buy', label: 'Buy' },
      { value: 'sell', label: 'Sell' }
    ],
    
    types: [
      { value: 'market', label: 'Market' },
      { value: 'limit', label: 'Limit' },
      { value: 'stop_limit', label: 'Stop-Limit' },
      { value: 'take_profit', label: 'Take-Profit' },
      { value: 'trailing_stop', label: 'Trailing Stop' }
    ]
  };
export interface TradingPair {
    value: string;
    label: string;
    baseAsset: string;
    quoteAsset: string;
    minLeverage?: number;
    maxLeverage?: number;
  }
  
  export const TRADING_PAIRS: TradingPair[] = [
    {
      value: 'BTC/USDT',
      label: 'BTC/USDT',
      baseAsset: 'BTC',
      quoteAsset: 'USDT',
      minLeverage: 1,
      maxLeverage: 125
    },
    {
      value: 'ETH/USDT',
      label: 'ETH/USDT',
      baseAsset: 'ETH',
      quoteAsset: 'USDT',
      minLeverage: 1,
      maxLeverage: 75
    },
    {
        value: 'SOL/USDT',
        label: 'SOL/USDT',
        baseAsset: 'SOL',
        quoteAsset: 'USDT',
        minLeverage: 1,
        maxLeverage: 75
      },
    // Ajoutez de nouvelles paires ici
  ];
export interface Platform {
    value: string;
    label: string;
    icon?: string;
    apiDocs?: string;
  }
  
  export const PLATFORMS: Platform[] = [
    {
      value: 'binance',
      label: 'Binance',
      apiDocs: 'https://binance-docs.github.io/apidocs/spot/en/'
    },
    {
      value: 'coinbase',
      label: 'Coinbase Pro',
      apiDocs: 'https://docs.pro.coinbase.com/'
    },
    {
      value: 'kraken',
      label: 'Kraken',
      apiDocs: 'https://docs.kraken.com/rest/'
    },
    // Ajoutez de nouvelles plateformes ici
  ];
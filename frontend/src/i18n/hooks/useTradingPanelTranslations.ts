import { useTranslation } from 'react-i18next';

export interface TradingPanelTranslations {
  title: () => string;
  platform: () => string;
  tradingPair: () => string;
  initialBalance: () => string;
  leverage: () => string;
  side: () => string;
  type: () => string;
  amount: () => string;
  takeProfit: () => string;
  stopLoss: () => string;
}

export const useTradingPanelTranslations = (): TradingPanelTranslations => {
  const { t } = useTranslation('tradingPanel');
  return {
    title: () => t('title'),
    platform: () => t('platform'),
    tradingPair: () => t('tradingPair'),
    initialBalance: () => t('initialBalance'),
    leverage: () => t('leverage'),
    side: () => t('side'),
    type: () => t('type'),
    amount: () => t('amount'),
    takeProfit: () => t('takeProfit'),
    stopLoss: () => t('stopLoss'),
  };
};
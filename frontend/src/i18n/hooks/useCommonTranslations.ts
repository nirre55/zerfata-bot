import { useTranslation } from 'react-i18next';

export interface CommonTranslations {
  welcome: () => string;
}

export const useCommonTranslations = (): CommonTranslations => {
  const { t } = useTranslation('common');
  return {
    welcome: () => t('welcome'),
  };
};
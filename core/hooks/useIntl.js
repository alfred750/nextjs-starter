import { useNextIntl } from '@moxy/next-intl';

export const useIntl = () => {
  const { changeLocale, intl } = useNextIntl();

  const t = (id) => intl.formatMessage({ id, defaultMessage: '' });

  const { locale } = intl;

  return {
    locale, changeLocale, intl, t,
  };
};

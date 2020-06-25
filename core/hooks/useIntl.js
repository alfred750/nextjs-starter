import React from 'react'
import { useNextIntl } from '@moxy/next-intl';

export const useIntl = () => {
  const { changeLocale, intl } = useNextIntl();

  const t = (id) => {
    return intl.formatMessage({ id, defaultMessage: '' });
  };

  const locale = intl.locale;

  return { locale, changeLocale, intl, t }
}

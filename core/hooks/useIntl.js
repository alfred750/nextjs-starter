import React from 'react'
import { useIntl as useIntlOrigin } from 'react-intl'
import {LocaleContext} from '../../components/Common/IntlProvider'

const useLocale = () => React.useContext(LocaleContext)

export const useIntl = () => {
  const intl = useIntlOrigin()
  const { setLocale } = useLocale()
  const t = (id) => {
    return intl.formatMessage({ id, defaultMessage: '' });
  };
  const locale = intl.locale
  return { locale, setLocale, intl, t }
}

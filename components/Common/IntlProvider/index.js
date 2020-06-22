import React, { useState, useEffect } from 'react'
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl'
import cookie from 'js-cookie'
import { getMessages } from '../../../core/helpers'

export const LocaleContext = React.createContext({})

const cache = createIntlCache()

const IntlProvider = ({ children, locale, messages }) => {
  const [intl, setIntl] = useState(createIntl({ locale, messages }, cache))

  const setLocale = async (nextLocale) => {
    const nextMessages = await getMessages(nextLocale)
    setIntl(createIntl({ locale: nextLocale, messages: nextMessages }, cache))
    cookie.set('locale', nextLocale, { expires: 365 })
  }

  useEffect(() => {
    setIntl(createIntl({ locale, messages }, cache))
  }, [locale])

  return (
    <LocaleContext.Provider value={{ setLocale }}>
      <RawIntlProvider value={intl}>
        {children}
      </RawIntlProvider>
    </LocaleContext.Provider>
  )
}
export default IntlProvider

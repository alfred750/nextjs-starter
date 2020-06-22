import React from 'react'
import { Provider } from 'react-redux'
import App from 'next/app'
import IntlProvider from '../components/Common/IntlProvider'
import { getLocale, getMessages } from '../core/helpers'
import store from '../core/store'
import {getSelf} from '../core/actions/session'

import 'antd/dist/antd.css'
import '../theme/styles/styles.scss'

store.dispatch(getSelf())

const MyApp = ({ Component, pageProps, locale, messages }) => (
  <Provider store={store}>
    <IntlProvider locale={locale} messages={messages}>
      <Component {...pageProps} />
    </IntlProvider>
  </Provider>
)

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const locale = await getLocale(appContext.ctx)
  const messages = await getMessages(locale)
  return { ...appProps, locale, messages }
}

export default MyApp

import React from 'react'
import { Provider } from 'react-redux'
import App from 'next/app'
import { withNextIntlSetup } from '@moxy/next-intl';
import nextIntlConfig from '../intl';
import store from '../core/store'
import {getSelf} from '../core/actions/session'

import 'antd/dist/antd.css'
import '../theme/styles/styles.scss'

if (typeof window !== 'undefined') {
  store.dispatch(getSelf())
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component { ...pageProps } />
      </Provider>
    );
  }
}

export default withNextIntlSetup(nextIntlConfig)(MyApp)


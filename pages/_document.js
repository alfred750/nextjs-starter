import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { NextIntlScript } from '@moxy/next-intl';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <meta charSet='utf-8'/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="theme-color" content="#673ab7" />
          <meta name='description' content='Description'/>
          <meta name='keywords' content='Keywords'/>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/icons/favicon.ico" />
          <link href='/icons/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16'/>
          <link href='/icons/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32'/>
          <link rel="apple-touch-icon" href="/icons/apple-icon.png"></link>
        </Head>
        <body>
          <Main />
          <NextIntlScript />
          <NextScript />
        </body>
      </Html>
    )
  }
}

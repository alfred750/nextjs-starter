import React from 'react'
import Head from 'next/head'
import SiteLayout from '../components/Site/Layout'

export default function About() {
  return (
    <SiteLayout>
      <Head>
        <title>About</title>
      </Head>
      <div>
        About
      </div>
    </SiteLayout>
  )
}

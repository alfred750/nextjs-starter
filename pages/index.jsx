import React from 'react';
import Head from 'next/head';
import SiteLayout from '../components/Site/Layout';

export default function Home() {
  return (
    <SiteLayout>
      <Head>
        <title>Next.js starter</title>
      </Head>
      <div>Page content</div>
    </SiteLayout>
  );
}

import React from 'react';
import Head from 'next/head';
import MyLayout from '../../components/My/Layout';

export default function Admin() {
  return (
    <MyLayout>
      <Head>
        <title>My</title>
      </Head>
      <div>
        My
      </div>
    </MyLayout>
  );
}

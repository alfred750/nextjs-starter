import React from 'react'
import Head from 'next/head'
import AdminLayout from '../../components/Admin/Layout'

export default function Admin() {
  return (
    <AdminLayout>
      <Head>
        <title>Admin</title>
      </Head>
      <div>
        Admin
      </div>
    </AdminLayout>
  )
}

import React from 'react'

import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'

import withAnalytics from '../src/hocs/withAnalytics'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="./static/weed.jpg" width={200} alt="" />
    <h1>Hola</h1>
    <Link href="/users">
      <a>Usuarios</a>
    </Link>
  </div>
)

export default withAnalytics()(Home)

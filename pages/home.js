import React from 'react'
import styled from 'styled-components'

import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'

import withAnalytics from '../src/hocs/withAnalytics'

const Title = styled.h1`
  color: #006400;
  font-size: 40px;
`

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="./static/weed.jpg" width={200} alt="" />
    <Title>Hola</Title>
    <Link href="/users">
      <a>Usuarios</a>
    </Link>
  </div>
)

export default withAnalytics()(Home)

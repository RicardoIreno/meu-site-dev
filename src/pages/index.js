import Head from 'next/head'
import Image from 'next/image'
import { SiteFooter, SiteHeader } from '../components'
import { DefaultWrapper } from '../layouts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Construindo meu site</title>
        <meta name="description" content="Portfólio Ricardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultWrapper>

        <p>oi</p>

      </DefaultWrapper>

    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { SiteFooter, SiteHeader } from '../components'
import SiteMain from '../components/HomeCard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Construindo meu site</title>
        <meta name="description" content="Portfólio Ricardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />

      <SiteMain />
        
      <SiteFooter />
    </div>
  )
}

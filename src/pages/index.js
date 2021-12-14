import Head from 'next/head'
import Image from 'next/image'
import { SiteHeader } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Construindo meu site</title>
        <meta name="description" content="Portfólio Ricardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />

      <main>
        <h1>Home</h1>

      </main>

      <footer>

      </footer>
    </div>
  )
}

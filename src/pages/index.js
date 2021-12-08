import Head from 'next/head'
import Image from 'next/image'
import { Template, SiteHeader } from '../components'

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
        <h1>Rodou?</h1>

        <Template>Deu certo?</Template>
      </main>

      <footer>

      </footer>
    </div>
  )
}

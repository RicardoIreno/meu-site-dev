import Head from 'next/head'
import Image from 'next/image'
import { HomeCard, SiteFooter, SiteHeader } from '../components'
import { DefaultWrapper } from '../layouts'
import img1 from '../../public/test.jpg'

// const img1 = '../../public/test.jpg'

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
        <HomeCard img={img1.src}>
          
        </HomeCard>


      </DefaultWrapper>

    </>
  )
}

import Head from 'next/head'
import HomeCard from '../components/molecules/HomeCard'
import Default from '../components/templates/Default'
import img1 from '../../public/test.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Construindo meu site</title>
        <meta name="description" content="Portfólio Ricardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <Default>

        <p>oi</p>
        <HomeCard img={img1.src}>
          
        </HomeCard>


      </Default>

    </>
  )
}

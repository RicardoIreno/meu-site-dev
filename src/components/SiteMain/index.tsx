import React, { ReactNode } from 'react'
import { Wrapper } from './style'
import Link from 'next/link'
import { HomeCard } from '..'
import Image from 'next/image'

import img1 from '../../../public/test.jpg'
const img = '/test.jpg'

type Props = {
  children?: ReactNode
}

const SiteMain = () => {
  return(
    <Wrapper>
      <HomeCard title={'test'}>

        <Image src={img1} />

        testando

      </HomeCard>

    </Wrapper>
  )
}

export default SiteMain
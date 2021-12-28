import { prependOnceListener } from 'process'
import React, { ReactNode } from 'react'
import { Title, Wrapper } from './style'
import Image, { ImageProps } from 'next/image'


type Props = {
  children?: ReactNode
  title: string
  img: string
}

const HomeCard = ({children, title, img}: Props) => {
  return(
    <Wrapper img={img}>

        {children}

    </Wrapper>
  )
}

export default HomeCard
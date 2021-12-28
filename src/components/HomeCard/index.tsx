import { prependOnceListener } from 'process'
import React, { ReactNode } from 'react'
import { Title, Wrapper } from './style'


type Props = {
  children?: ReactNode
  title: string
}

const HomeCard = ({children, title}: Props) => {
  return(
    <Wrapper>
       <p>{title}</p>
      
        {children}

    </Wrapper>
  )
}

export default HomeCard
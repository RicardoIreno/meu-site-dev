import React, { ReactNode } from 'react'
import styled from 'styled-components'
import {theme} from '../../configs'
import Wrapper from '../atoms/Wrapper'


type StyleProps = {
  img?: string
}

const MyWrapper = styled(Wrapper)<StyleProps>`
  width: 300px;
  height: 400px;
  margin: 1rem;
  align-items: center;
  background-image: url(${ props => props.img });
  background-size: cover;
`

const Title = styled.span`
  font-size: ${theme.sizes.HomeCardTitle};
  font-family: ${theme.tipography.special};
  color: ${theme.colors.HomeCardTitle};
`


type Props = {
  children?: ReactNode
  title: string
  img: string
}

const HomeCard = ({children, title, img}: Props) => {
  return(
    <MyWrapper img={img}>
      <Title>{title}</Title>

        {children}

    </MyWrapper>
  )
}

export default HomeCard



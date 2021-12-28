import styled from 'styled-components'
import theme from '../../styles/theme'
import Image, { ImageProps } from 'next/image'

type Props = {
  img?: string
}

export const Wrapper = styled.div<Props>`
  display: flex;
  width: 300px;
  height: 400px;
  margin: 1rem;
  flex-direction: column;
  align-items: center;
  background-image: url(${ props => props.img });
  background-size: cover;
`

export const Title = styled.span`
  font-size: ${theme.sizes.HomeCardTitle};
  font-family: ${theme.tipography.special};
  color: ${theme.colors.HomeCardTitle};
`



import styled from 'styled-components'
import theme from '../../styles/theme'

// type props = {
//   img: string
// }

export const Wrapper = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  border: 1px solid red;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.span`
  font-size: ${theme.sizes.HomeCardTitle};
  font-family: ${theme.tipography.special};
  color: ${theme.colors.HomeCardTitle};
`

export const Img = styled.img`
  width: 100%;
  box-sizing: border-box;

`


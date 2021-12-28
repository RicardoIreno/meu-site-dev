import styled from 'styled-components'
import theme from '../../styles/theme'
import { breakpoint } from '../../configs'

export const Wrapper = styled.header`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media ${breakpoint.mdUp} {
    flex-direction: row;
    justify-content: space-between;
  } 
  `

export const SiteTitle = styled.span`
  font-size: ${theme.sizes.sitetitle};
  color: ${theme.colors.headings};
  font-family: ${theme.tipography.special};
  font-size: ${theme.sizes.special};
`
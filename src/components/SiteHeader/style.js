import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.header`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  border: solid 1px red;
  `

export const SiteName = styled.span`
  font-size: ${theme.sizes.h2};
  color: ${theme.colors.headings};
`
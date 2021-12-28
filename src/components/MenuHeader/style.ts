import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

`

export const Nav = styled.nav`
  font-size: ${theme.sizes.h2};
  color: ${theme.colors.menus};
  font-family: ${theme.tipography.special};
  font-size: ${theme.sizes.special};
`

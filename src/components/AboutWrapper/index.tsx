import React, { Children, ReactNode } from 'react'
import { Wrapper } from './style'

type Props = {
  children: ReactNode
}

const MenuHeader = ({children}: Props ) => {
	return (

		<Wrapper>

      {children}

		</Wrapper>
	)
}

export default MenuHeader
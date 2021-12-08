import React, {ReactNode} from 'react'
import { SomeStyled } from './style'

interface Props {
	children?: ReactNode
}

export default function Template( { children }: Props ) {
	return (
		<SomeStyled>
		  {children}
		</SomeStyled>
		)
	}
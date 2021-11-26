import * as React from 'react'
import { SomeStyled } from './style'

interface TemplateProps {
	children: JSX.Element | JSX.Element[];
  important: boolean;
}

export default function Template( { children, important }: TemplateProps ) {
	return (
		<SomeStyled>
		  {children}
		</SomeStyled>
		)
	}
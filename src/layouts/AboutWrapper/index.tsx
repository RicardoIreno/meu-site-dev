import React, { Children, ReactNode } from 'react'
import { Wrapper } from './style'
import { DefaultWrapper } from '../index'

type Props = {
  children: ReactNode
}


export default function AboutWrapper({children}: Props )  {
	return (

		<DefaultWrapper>

			<Wrapper>

				{children}

			</Wrapper>

		</DefaultWrapper>
	)
}



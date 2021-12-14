import React, { Children, ReactNode } from 'react'
import { SiteHeader, SiteFooter } from '../../components'
import { Wrapper } from './style'

type Props = {
  children: ReactNode
}

export default function DefaultWrapper ({children}: Props ) {
	return (
		<>
			<SiteHeader />
			
			<Wrapper>

				{children}

			</Wrapper>

			<SiteFooter />
		</>
	)
}


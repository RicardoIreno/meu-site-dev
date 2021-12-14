import React, { Children, ReactNode } from 'react'
import { SiteHeader, SiteFooter } from '../../components'
import { Wrapper } from './style'

type Props = {
  children: ReactNode
}

const DefaultWrapper = ({children}: Props ) => {
	return (
		<>
			<SiteHeader />
			<h3>lala</h3>
			
			<Wrapper>

				{children}

			</Wrapper>

			<SiteFooter />
		</>
	)
}

export default DefaultWrapper
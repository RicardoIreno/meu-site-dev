import React, { ReactNode } from 'react'
import SiteHeader from '../organisms/SiteHeader'
import SiteFooter from '../organisms/SiteFooter'
import styled from 'styled-components'

const MyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  padding: 2rem;
`


type Props = {
  children: ReactNode
}

export default function Default({children}: Props ) {
	return (
		<>
			<SiteHeader />
			
			<MyWrapper>

				{children}

			</MyWrapper>

			<SiteFooter />
		</>
	)
}


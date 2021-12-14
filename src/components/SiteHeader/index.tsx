import React from 'react'
import { Wrapper } from './style'
import Link from 'next/link'
import MenuHeader from '../MenuHeader'


const SiteHeader = () => {
	return (

		<Wrapper>

			<Link href={'/'}>
				<a>
					<h2>Ricado Ireno</h2>
				</a>
			</Link>

			<MenuHeader />
			
		</Wrapper>
	)
}

export default SiteHeader
import React from 'react'
import { Wrapper, SiteTitle } from './style'
import Link from 'next/link'
import MenuHeader from '../MenuHeader'
import configs from '../../configs/configs' 


const SiteHeader = () => {
	return (

		<Wrapper>

			<Link href={'/'}>
				<a>
					<SiteTitle>{configs.site.name}</SiteTitle>
				</a>
			</Link>

			<MenuHeader />
			
		</Wrapper>
	)
}

export default SiteHeader
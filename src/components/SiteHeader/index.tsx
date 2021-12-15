import React from 'react'
import { Wrapper, SiteName } from './style'
import Link from 'next/link'
import MenuHeader from '../MenuHeader'
import configs from '../../configs/configs' 


const SiteHeader = () => {
	return (

		<Wrapper>

			<Link href={'/'}>
				<a>
					<SiteName>{configs.site.name}</SiteName>
				</a>
			</Link>

			<MenuHeader />
			
		</Wrapper>
	)
}

export default SiteHeader
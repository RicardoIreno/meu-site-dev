import React from 'react'
import { Wrapper } from './style'
import Link from 'next/link'
import MenuHeader from '../MenuHeader'


const SiteHeader = () => {
	return (

		<Wrapper>

			<h2>Oi, eu sou o Header!</h2>

			<MenuHeader />
			
		</Wrapper>
	)
}

export default SiteHeader
import React, {ReactNode} from 'react'
import { SiteHeaderStyle } from './style'
import Link from 'next/link'

interface Props {
	children?: ReactNode
}

const MenuHeader = ({children}: Props) => {
	return (

		<SiteHeaderStyle>

			<Link href="/">
				<a>Home</a>
			</Link>{' '}
			<Link href="/">
				<a>About</a>
			</Link>{' '}

		</SiteHeaderStyle>
	)
}

export default MenuHeader
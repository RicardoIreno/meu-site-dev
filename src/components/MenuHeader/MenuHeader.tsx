import React, {ReactNode} from 'react'
import { MenuHS } from './style'
import Link from 'next/link'

interface Props {
	children?: ReactNode
}

const SiteHeader = ({children}: Props) => {
	return (

		<MenuHS>
			<h2>Oi, eu sou o SiteHeader!!</h2>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
      </nav>

		</MenuHS>
	)
}

export default SiteHeader
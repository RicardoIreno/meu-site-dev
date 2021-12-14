import React from 'react'
import { Wrapper } from './style'
import Link from 'next/link' 

const MenuHeader = () => {
	return (

		<Wrapper>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>{' | '}
        <Link href='/About'>
          <a>About</a>
        </Link>
      </nav>

		</Wrapper>
	)
}

export default MenuHeader
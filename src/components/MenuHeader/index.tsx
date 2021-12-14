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
        <Link href='/about'>
          <a>About</a>
        </Link>{' | '}
        <Link href='/test'>
          <a>Test</a>
        </Link>
      </nav>

		</Wrapper>
	)
}

export default MenuHeader
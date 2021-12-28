import React from 'react'
import { Wrapper, Nav } from './style'
import Link from 'next/link' 

const MenuHeader = () => {
	return (

		<Wrapper>
      <Nav>
        <Link href='/'>
          <a>Home</a>
        </Link>{' | '}
        <Link href='/about'>
          <a>About</a>
        </Link>{' | '}
        <Link href='/test'>
          <a>Test</a>
        </Link>
      </Nav>

		</Wrapper>
	)
}

export default MenuHeader
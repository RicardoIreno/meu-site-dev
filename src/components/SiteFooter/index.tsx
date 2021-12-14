import React from 'react'
import { Wrapper } from './style'
import Link from 'next/link'

const SiteFooter = () => {
	return (

		<Wrapper>

			<span>Oi, eu sou o Footer</span>
      <Link href={'https://github.com/RicardoIreno'}>
        <a>Github</a>
      </Link>

		</Wrapper>
	)
}

export default SiteFooter
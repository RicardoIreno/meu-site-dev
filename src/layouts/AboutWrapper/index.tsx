import React, { Children, ReactNode } from 'react'
import { Wrapper } from './style'
import { DefaultWrapper } from '../index'

type Props = {
  children: ReactNode
}

const AboutWrapper = ({children}: Props ) => {
	return (

		<Wrapper>

      {children}

		</Wrapper>
	)
}

// export default AboutWrapper
export default ({ children }: Props) => <DefaultWrapper>{children}</DefaultWrapper>
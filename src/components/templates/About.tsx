import React, {  ReactNode } from 'react'
import Default from './Default'
import styled from 'styled-components'


const MyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  padding: 2rem;
  border: solid 1px red;
`


type Props = {
  children: ReactNode
}


export default function About({children}: Props )  {
	return (

		<Default>

			<MyWrapper>

				{children}

			</MyWrapper>

		</Default>
	)
}



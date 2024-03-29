import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`

export default function Container(props: { children: React.ReactNode }) {
	return <Root>{props.children}</Root>
}

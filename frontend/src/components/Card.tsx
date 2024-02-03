import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(3.5px);
	-webkit-backdrop-filter: blur(3.5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	padding: 20px;
`
export default function Card(props: { children: React.ReactNode }) {
	return <Container>{props.children}</Container>
}

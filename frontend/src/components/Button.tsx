import styled from 'styled-components'

export const StyledButton = styled.button`
	margin-bottom: 0;
	text-transform: uppercase;
	width: 100%;
	border-radius: 5px;
	height: 35px;
	border-color: transparent;
	box-shadow: 0px;
	outline: none;
	transition: 0.15s;
	text-align: center;
	background-color: #4caf50;
	color: white;
	&:hover {
		background-color: #45a049;
	}
	&:active {
		background-color: #3e8e41;
	}
	cursor: pointer;
`

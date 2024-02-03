import React from 'react'
import styled from 'styled-components'
import useWeatherStore from '../store/useWeatherStore'

const Container = styled.div`
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 10px;
	padding: 10px;
`

interface Props {
	day: string
	temperature: string | number
}

export default function ForcastCard({ day, temperature }: Props) {
	const { preference } = useWeatherStore()
	return (
		<Container>
			<div className='temperature'>
				{preference === 'C' ? (
					<span>{temperature}°C</span>
				) : (
					<span>{temperature}°F</span>
				)}
			</div>
			<div className='day'>
				<span>{day}</span>
			</div>
		</Container>
	)
}

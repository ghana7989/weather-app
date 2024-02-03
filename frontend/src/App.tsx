import React, { useState } from 'react'
import { CardContent } from './App.styles'
import { StyledButton } from './components/Button'
import Card from './components/Card'
import Container from './components/Container'
import { StyledInput } from './components/Input'
import './index.css'
import useWeatherStore from './store/useWeatherStore'
import { format } from 'date-fns'
import { lazy } from 'react'

const ForcastCard = lazy(() => import('./components/ForcastCard'))

const App = () => {
	const [location, setLocation] = useState('')
	const {
		preference,
		fetchWeatherData,
		currentWeatherData,
		getBackgroundImage,
		currentBackgroundImage,
		forcastWeatherData,
		fetchForcastWeatherData,
		updatePreference,
	} = useWeatherStore()
	const handleSearchClick = async () => {
		await fetchForcastWeatherData(location)
		await fetchWeatherData(location).then(() => {
			;(async function () {
				await getBackgroundImage()
			})()
		})
	}
	return (
		<>
			<div
				style={{
					position: 'absolute',
					top: '10px',
					right: '10px',
				}}
			>
				<input
					type='checkbox'
					id='temp-unit'
					onChange={(e) => {
						if (e.target.checked) {
							updatePreference('F')
						} else {
							updatePreference('C')
						}
					}}
				/>
				<label htmlFor='temp-unit'>Check for Fahrenheit</label>
			</div>
			<Container>
				<Card>
					<CardContent
						leftbgimage={
							currentBackgroundImage ||
							'https://www.w3schools.com/w3images/lights.jpg'
						}
					>
						<div className='left'>
							<div className='top'>
								<h1>Weather App</h1>
								<h2>Find the current weather in your city</h2>
							</div>
							<div className='middle'>
								{forcastWeatherData &&
									forcastWeatherData.forecast.forecastday.map((day) => {
										return (
											<ForcastCard
												key={day.date_epoch}
												day={format(day.date, 'EEEE')}
												temperature={
													preference === 'C'
														? day.day.avgtemp_c
														: day.day.avgtemp_f
												}
											/>
										)
									})}
							</div>
							{currentWeatherData && (
								<div className='bottom'>
									<h1 className='temp'>
										{preference === 'C'
											? currentWeatherData.current.temp_c + '°C'
											: currentWeatherData.current.temp_f + '°F'}
									</h1>
									<div className='location'>
										<h2>{currentWeatherData.location.name}</h2>
										<span>{currentWeatherData.location.country}</span>
									</div>
									<span className='info'>
										{currentWeatherData.current.condition.text}
										<br />
										Feels like{' '}
										{preference === 'C'
											? currentWeatherData.current.feelslike_c + '°C'
											: currentWeatherData.current.feelslike_f + '°F'}
										<br />
										Humidity: {currentWeatherData.current.humidity}%<br />
										Wind: {currentWeatherData.current.wind_kph} km/h
									</span>
								</div>
							)}
						</div>
						<div className='right'>
							<div className='search'>
								<StyledInput
									type='text'
									placeholder='Enter location'
									value={location}
									onChange={(e) => setLocation(e.target.value)}
								/>
								<StyledButton disabled={!location} onClick={handleSearchClick}>
									Search
								</StyledButton>
							</div>
							<div className='popular'>
								<h2>Popular Locations</h2>
								<ul>
									<li onClick={() => setLocation('Delhi')}>Delhi</li>
									<li onClick={() => setLocation('Hyderabad')}>Hyderabad</li>
									<li onClick={() => setLocation('Bangalore')}>Bangalore</li>
									<li onClick={() => setLocation('Las Vegas')}>Las Vegas</li>
									<li onClick={() => setLocation('New York')}>New York</li>
									<li onClick={() => setLocation('Miami')}>Miami</li>
								</ul>
							</div>
						</div>
					</CardContent>
				</Card>
			</Container>
		</>
	)
}

export default App

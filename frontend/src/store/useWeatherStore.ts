import { create } from 'zustand'
import {
	CurrentWeatherAPIResponse,
	ForcastWeatherAPIResponse,
} from '../types/weather.types'
import axios from 'axios'
import { BACKEND_URL } from '../constants'
import imageClient from '../utils/pexels'
import { ErrorResponse, PhotosWithTotalResults } from 'pexels'
import { persist } from 'zustand/middleware'

interface WeatherStore {
	preference: 'C' | 'F'
	updatePreference: (preference: 'C' | 'F') => void
	currentWeatherData: CurrentWeatherAPIResponse | null
	forcastWeatherData: ForcastWeatherAPIResponse | null
	currentBackgroundImage: string | null
	fetchWeatherData: (city: string) => Promise<void>
	fetchForcastWeatherData: (city: string) => Promise<void>
	getBackgroundImage: () => Promise<void> // for the weather background condition
}

const useWeatherStore = create(
	persist<WeatherStore>(
		(set, get) => ({
			preference: 'C',
			updatePreference: (preference) => {
				set({ preference })
			},
			currentWeatherData: null,
			currentBackgroundImage: null,
			forcastWeatherData: null,
			fetchWeatherData: async (query) => {
				const data = await axios
					.get<CurrentWeatherAPIResponse>(`${BACKEND_URL}/weather`, {
						params: {
							query,
						},
					})
					.then((res) => res.data)
				set({ currentWeatherData: data })
			},
			fetchForcastWeatherData: async (query) => {
				const data = await axios
					.get<ForcastWeatherAPIResponse>(`${BACKEND_URL}/weather/forcast`, {
						params: {
							query,
						},
					})
					.then((res) => res.data)
				set({ forcastWeatherData: data })
			},
			getBackgroundImage: async () => {
				const description = get().currentWeatherData.current.condition.text
				const data = (await imageClient.photos
					.search({
						query: description + ' weather',
					})
					.catch((err) => {
						console.error(err)
						return err
					})) as PhotosWithTotalResults | ErrorResponse
				if ('photos' in data) {
					const randomIndex = Math.floor(Math.random() * data.photos.length)
					set({ currentBackgroundImage: data.photos[randomIndex].src.large })
				}
			},
		}),
		{
			name: 'weather-store',
		}
	)
)

export default useWeatherStore

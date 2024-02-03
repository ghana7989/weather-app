import { Request, Response } from 'express'
import { WEATHER_API_BASE_URL } from '../constants'
import axios from 'axios'
import {
	CurrentWeatherAPIResponse,
	ForcastWeatherAPIResponse,
} from '../types/weather.types'

export const getCurrentWeather = async (req: Request, res: Response) => {
	const { query } = req.query
	if (!query) {
		return res.status(400).json({
			message: 'Query is required',
		})
	}
	const currentWeatherUrl = `${WEATHER_API_BASE_URL}/current.json`
	const data: CurrentWeatherAPIResponse = await axios
		.get(currentWeatherUrl, {
			params: {
				q: query,
				key: process.env.WEATHER_API_KEY,
			},
		})
		.then((response) => response.data)
	return res.status(200).json(data)
}

export const getWeatherForecast = async (req: Request, res: Response) => {
	const { query, days } = req.query
	if (!query) {
		return res.status(400).json({
			message: 'Query is required',
		})
	}
	const forcastWeatherUrl = `${WEATHER_API_BASE_URL}/forecast.json`
	const data: ForcastWeatherAPIResponse = await axios
		.get(forcastWeatherUrl, {
			params: {
				q: query,
				days: days || 6,
				key: process.env.WEATHER_API_KEY,
			},
		})
		.then((response) => response.data)
		.catch((err) => {
			console.error(err)
			return err
		})
	return res.status(200).json(data)
}

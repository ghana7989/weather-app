import express from 'express'
import {
	getCurrentWeather,
	getWeatherForecast,
} from '../controllers/weather.controller'

const weatherRouter = express.Router()
weatherRouter.get('/', getCurrentWeather)
weatherRouter.get('/forcast', getWeatherForecast)

export default weatherRouter

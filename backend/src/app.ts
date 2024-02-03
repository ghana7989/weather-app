import 'dotenv/config'
import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import morgan from 'morgan'
import { connectDB } from './db/connectDB'
import weatherRouter from './routes/weather.route'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000
app.use(cors())
;(async function () {
	await connectDB()
})()

app.use(helmet())
app.use(morgan('tiny'))
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/weather', weatherRouter)

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})

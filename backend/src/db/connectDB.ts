import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI!)
		await mongoose.connection.db.admin().command({ ping: 1 })
		console.log(
			'Pinged your deployment. You successfully connected to MongoDB!'
		)
	} catch (error: any) {
		console.error(`Error: ${error.message}`)
		process.exit(1)
	}
}

export { connectDB }

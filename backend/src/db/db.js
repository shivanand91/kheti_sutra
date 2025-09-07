import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("MongoDB Connected Successfully!");
        
    } catch (error) {
        console.log("MongoDB not connected!", error)
        process.exit(1)        
    }
}

export default connectDB
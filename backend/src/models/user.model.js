import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        length: [6, "Password must be greater than or equal to 6"]
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

export default User
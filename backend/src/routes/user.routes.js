import express from 'express'
import { getDetails, logIn, signUp } from "../controllers/user.controller.js"
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router()

router.post("/signup", signUp)
router.post("/login", logIn)
router.get("/getdetails", authMiddleware, getDetails)
export default router
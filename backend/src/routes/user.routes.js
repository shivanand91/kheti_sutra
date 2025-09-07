import express from 'express'
import { getDetails, logIn, signUp } from "../controllers/user.controller.js"

const router = express.Router()

router.post("/signup", signUp)
router.post("/login", logIn)
router.get("/getdetails", getDetails)
export default router
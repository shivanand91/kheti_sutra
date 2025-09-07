import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { genToken } from "../utiils/token.js";

const signUp = async (req, res) => {
   try {
      const { name, email, password } = req.body;
      console.log(name, email, password);

      if (!name || !email || !password) {
         return res.status(400).json({ message: "All credentials required!" });
      }

      const existingUser = await User.findOne({ email });

      if (existingUser) {
         return res.status(400).json({ message: "User already exist!" });
      }

      const hashPassword = await bcryptjs.hash(password, 10);

      const user = await User.create({
         name,
         email,
         password: hashPassword,
      });
      const token = await genToken(user._id);
      res.cookie("token", token);

      console.log(user);
      return res
         .status(200)
         .json({
            message: "User sign up successfully!",
            user: user,
            success: true,
         });
   } catch (error) {
      console.log(error);
      console.log("Error in sign up");
   }
};

const logIn = async (req, res) => {
   try {
      const { email, password } = req.body;

      if (!email || !password) {
         return res.status(400).json({ message: "All credentials required!" });
      }

      const existingUser = await User.findOne({ email });

      if (!existingUser) {
         return res.status(400).json({ message: "User doesn't exist!" });
      }

      const isMatch = await bcryptjs.compare(password, existingUser.password);

      if (!isMatch) {
         return res.status(400).json({ message: "Invalid credentials" });
      }
      console.log("user logged in");

      return res
         .status(200)
         .json({ message: "User login successfully!", user: existingUser });
   } catch (error) {
      console.log("Error in Login");
   }
};

const getDetails = async (req, res) => {
   try {
      // Assuming email is provided in the request body.
      const { email } = req.query;

      if (!email) {
         return res
            .status(400)
            .json({ message: "Email required to fetch details!" });
      }

      const user = await User.findOne({ email }).select("-password");

      if (!user) {
         return res
            .status(404)
            .json({ message: "User not found!", success: false });
      }

      return res.status(200).json({
         message: "User details fetched successfully!",
         user: user,
         success: true,
      });
   } catch (error) {
      console.log("Error while fetching the details of the user");
      return res.status(500).json({ message: "Server error" });
   }
};

export { signUp, logIn, getDetails };

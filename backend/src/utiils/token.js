import jwt from "jsonwebtoken"

export const genToken = async (userId) => {
  try {
      const token = await jwt.sign(
        {_id: userId},
        process.env.JWT_SECRET,
        { expiresIn: '365d' }
      )
      return token;
  } catch (error) {
    console.log("Error while generating the token");    
  }
}

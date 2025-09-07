import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            if (email === '') {
                return setError("Email is required!")
            }
            // await axios.post("http://localhost:8000/api/user/login", { email})
            // console.log(email)
            navigate('/forgot-password-response')
        } catch (error) {
            return setError("login in error")

        }
    }


    return (
        <div className='bg-gray-700 text-white p-5 rounded-md w-full max-w-sm'>
            <h1 className='text-xl text-center font-bold'>Forgot Password</h1>
            <div className='flex flex-col gap-3 mt-3'>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Email</label>
                    <input className='border outline-none px-2 py-2 placeholder:text-md placeholder:text-amber-700 rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email' required />
                </div>
                <p className='text-red-500 transition-all duration-300'>{error}</p>

            </div>
            <button onClick={handleSubmit} className='w-full mt-3 p-2 bg-blue-600 rounded-full text-lg font-bold hover:bg-blue-900 transition-all duration-300 cursor-pointer'>Send Email</button>
            <p className='text-sm mt-2 text-center'>Back to <Link to="/login" className='text-green-500 font-bold'>Login</Link></p>
        </div>
    )
}

export default ForgotPassword

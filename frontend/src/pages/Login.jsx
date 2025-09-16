import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            if (email === '' || password === '') {
                return setError("All fields required!")
            }
            await axios.post("http://localhost:8000/api/user/login", { email, password },{ withCredentials: true })
            // console.log(email, password)
            navigate('/home')
        } catch (error) {
            return setError("login in error")

        }
    }


    return (
        <div className='bg-gray-700 text-white p-5 rounded-md w-full max-w-sm'>
            <h1 className='text-xl text-center font-bold'>Login</h1>
            <div className='flex flex-col gap-3 mt-3'>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Email</label>
                    <input className='border outline-none px-2 py-2 placeholder:text-md placeholder:text-amber-700 rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email' required />
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Password</label>
                    <input className='border outline-none px-2 py-2 placeholder:text-md placeholder:text-amber-700 rounded-md' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password' required />
                    <Link className='text-right text-blue-500 hover:text-green-500' to="/forgot-password">forgot password?</Link>
                </div>
                <p className='text-red-500 transition-all duration-300'>{error}</p>

            </div>
            <button onClick={handleSubmit} className='w-full mt-3 p-2 bg-blue-600 rounded-full text-lg font-bold hover:bg-blue-900 transition-all duration-300 cursor-pointer'>Login</button>
            <p className='text-sm mt-2 text-center'>Don't have an <Link to="/" className='text-green-500 font-bold'>Account</Link></p>
        </div>
    )
}

export default Login

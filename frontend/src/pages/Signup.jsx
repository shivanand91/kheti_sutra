import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            if (name === '' || email === '' || password === '') {
                return setError("All the fields required!")
            }
            console.log(name, email, password)
            const res =await axios.post("http://localhost:8000/api/user/signup", { name, email, password })
            console.log(res.data)
            navigate('/login')
        } catch (error) {
            console.error("Error while signing up", error);
            setError(error.response?.data?.message || "Signup failed!");

        }
    }


    return (
        <div className='bg-gray-700 text-white p-5 rounded-md w-full max-w-sm'>
            <h1 className='text-xl text-center font-bold'>Sign up</h1>
            <div className='flex flex-col gap-3 mt-3'>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input className='border outline-none px-2 py-2 placeholder:text-md placeholder:text-amber-700 rounded-md' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter your name' required />
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Email</label>
                    <input className='border outline-none px-2 py-2 placeholder:text-md placeholder:text-amber-700 rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your email' required />
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Password</label>
                    <input className='border outline-none px-2 py-2 placeholder:text-md placeholder:text-amber-700 rounded-md' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password' required />
                </div>
                <p className='text-red-500'>{error}</p>
            </div>
            <button onClick={handleSubmit} className='cursor-pointer w-full mt-3 p-2 bg-blue-600 rounded-full text-lg font-bold hover:bg-blue-900 transition-all duration-300'>Sign up</button>
            <p className='text-sm mt-2 text-center'>Already have an <Link to="/login" className='text-green-500 font-bold'>Account</Link></p>
        </div>
    )
}

export default Signup

import React, { useState } from 'react'
import axios from 'axios'


const Home = () => {

  const [email, setEmail] = useState('')
  const [data, setData] = useState({})
  
  const handleSubmit = async(e) => {
    try {
      e.preventDefault()
      const response = await axios.get("http://localhost:8000/api/user/getdetails", { email })
      setData(response.data)
    } catch (error) {
      console.log("error while fetching the data");      
    }
  }
  
  return (
    <div className=''>
      <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Get Details</button>
      <p>{ data.name }</p>
    </div>
  )
}

export default Home

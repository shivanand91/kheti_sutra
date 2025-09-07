import React, { useState } from 'react'
import axios from 'axios'


const Home = () => {

  const [email, setEmail] = useState('')
  const [data, setData] = useState({})
  console.log(data)
  const handleSubmit = async(e) => {
    try {
      e.preventDefault()
      const response = await axios.get("http://localhost:8000/api/user/getdetails", { params :{email} })
      setData(response.data.user)
    } catch (error) {
      console.log(error,"error while fetching the data");      
    }
  }
  
  return (
    <div className=''>
      <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Get Details</button>
      <br />
      <br />
      <p>{ data.name }</p>
      <p>{ data.email }</p>
      <p>{ data.createdAt }</p>
      <p>{ data.updatedAt }</p>
    </div>
  )
}

export default Home

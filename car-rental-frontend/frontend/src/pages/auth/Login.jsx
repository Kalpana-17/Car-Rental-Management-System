import React, { useState } from 'react'
import AuthCard from '../../components/auth/AuthCard'
import InputField from '../../components/auth/InputField'
import "../../styles/auth/Auth.css"
import "../../styles/auth/InputField.css"
import { useNavigate } from 'react-router-dom'
import { loginUser } from "../../services/authService"
import { saveUser } from "../../utils/auth"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  
  const handleLogin = async () => {
    if(!email.trim() || !password.trim()) {
      alert("Please fill all fields!!")
      return
    }

    try {
      setLoading(true)

      const response = await loginUser({email, password})
      saveUser(response.data)

      alert("Login Successful!")
      navigate("/")

    } catch(error) {
      console.error(error);
      alert(error.response?.data?.message || "Login Failed!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='auth-page'>
      <AuthCard
        title='Welcome'
        subtitle='Continue your journy with CarGo Rentals'
      >
        <InputField
          label='Email'
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          type='password'
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
          className='auth-btn'
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Please wait..." : "Login"}
        </button>
      </AuthCard>
    </div>
  )
}

export default Login
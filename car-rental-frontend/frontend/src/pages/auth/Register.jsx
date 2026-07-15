import React, { useState } from 'react'
import AuthCard from '../../components/auth/AuthCard'
import InputField from '../../components/auth/InputField'
import '../../styles/auth/Auth.css'
import '../../styles/auth/InputField.css'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from "../../services/authService"

const Register = () => {

  const [formData, setformData] = useState({
    fullName: '',
    email: '',
    phone: '',
    licenseNumber: '',
    password: '',
    confirmPassword: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setformData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const handleRegister = async () => {
    if (
        !formData.fullName ||
        !formData.email ||
        !formData.phone ||
        !formData.licenseNumber ||
        !formData.password ||
        !formData.confirmPassword
    ) {
      alert("Please fill all fields.")
      return
    }

    if(formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.")
      return
    }

    try {
      await registerUser(formData)
      alert("Registration Successful")
      navigate("/login")
    } catch (error) {
      console.error(error)
      alert(error.response?.data?.message || "Registration Failed")
    }
  }

  return (
    <div className='auth-page'>
      <AuthCard
        title='Create Account'
        subtitle='Start your journey with CarGo Rentals'
      >
        <InputField
          label='Full Name'
          name='fullName'
          value={formData.fullName}
          onChange={handleChange}
          placeholder='Enter your full name'
        />
        <InputField
          label='Email'
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email'
        />

        <InputField
          label='Phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          placeholder='Enter phone number'
        />

        <InputField
          label='Driving License'
          name='licenseNumber'
          value={formData.licenseNumber}
          onChange={handleChange}
          placeholder='License number'
        />

        <InputField
          label='Password'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Password'
        />

        <InputField
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder='Confirm password'
        />

        <button className='auth-btn' onClick={handleRegister}>Register</button>

        <div className='auth-footer'>
          Already have an account?{' '}
          <Link to='/login'>Login</Link>
        </div>
      </AuthCard>
    </div>
  )
}

export default Register
import React, { useEffect, useState } from 'react'
import { getCurrentUserId } from '../../utils/auth'
import { getUserById } from '../../services/userService'

const Profile = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchProfile();
  }, [])

  const fetchProfile = async () => {
    try {
      const response = await getUserById(getCurrentUserId())
      setUser(response.data)
    } catch(error) {
      console.error(error)
    }
  }

  if(!user)
    return <h3 className='text-center mt-5'>Loading...</h3>

  return (
    <div className='container py-5'>
      <div className='card shadow p-4'>
        <h2 className='mb-4'>My Profile</h2>

        <hr />

        <p><strong>Name:</strong> {user.fullName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>License:</strong> {user.licenseNumber}</p>
        <p><strong>Role:</strong> {user.role}</p>

        <button
          className='btn btn-secondary mt-3'
          disabled
        >
          Edit Profile(Coming soon)
        </button>
      </div>
    </div>
  )
}

export default Profile
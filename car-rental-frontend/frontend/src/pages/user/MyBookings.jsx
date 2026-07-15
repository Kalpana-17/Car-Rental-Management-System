import React, { useEffect, useState } from 'react'
import { getUserBookings } from '../../services/bookingService'
import BookingCard from '../../components/common/BookingCard'
import { getCurrentUserId } from '../../utils/auth'

const MyBookings = () => {

  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUserBookings();
  }, [])

  const fetchUserBookings = async () => {
    try {
      const response = await getUserBookings(getCurrentUserId())
      setBookings(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <h3 className='text-center mt-5'>Loading...</h3>
    )
  }

  return (
    <div className='container py-5'>
      <h2 className='mb-4'>My Bookings</h2>
      {
        bookings.length === 0 ? 
          (<h5>No bookings found!</h5>) : ( bookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))
        )
      }
    </div>
  )
}

export default MyBookings
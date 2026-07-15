import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookingCard = ({ booking }) => {

    const navigate = useNavigate()

  return (
    <div className='card shadow-sm mb-4'>
        <div className='card-body'>
            <h5>
                {booking.car.variant.company.companyName}{" "}
                {booking.car.variant.variantName}
            </h5>
            <p>
                <strong>Pickup:</strong> {booking.pickupDate}
            </p>
            <p>
                <strong>Return:</strong> {booking.returnDate}
            </p>
            <p>
                <strong>Total amount:</strong> ₹{booking.totalAmount}
            </p>
            <p>
                <strong>Booking status:</strong> {booking.bookingStatus}
            </p>
            <p>
                <strong>Payment status:</strong> {booking.paymentStatus}
            </p>
            {
                booking.paymentStatus === 'PENDING' ? (
                    <button 
                        className='btn btn-warning w-100 mt-3'
                        onClick={() => navigate(`/payments/${booking.id}`)}
                    >
                        Pay Now
                    </button>
                ) : (
                    <button 
                        className='btn btn-success w-100 mt-3'
                        disabled
                    >
                        Payment Completed
                    </button>
                )
            }
        </div>
    </div>
  )
}

export default BookingCard
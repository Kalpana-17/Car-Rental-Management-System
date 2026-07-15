import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCarById } from '../services/carService'
import { createBooking, getBookingSummary } from '../services/bookingService'
import { getCurrentUserId } from '../utils/auth'

const Booking = () => {

    const { id } = useParams()

    const [car, setCar] = useState(null);
    const [pickupDate, setPickupDate] = useState("")
    const [returnDate, setReturnDate] = useState("")
    const [summary, setSummary] = useState(null)

    const navigate = useNavigate()

    const bookingRequest = {
        userId: getCurrentUserId(),
        carId: Number(id),
        pickupDate,
        returnDate
    }

    useEffect(() => {
        loadCar()
    }, [])

    const loadCar = async () => {
        const response = await getCarById(id)
        setCar(response.data)
    }

    const handleContinue = async () => {
        if (!pickupDate || !returnDate) {
            alert("Please select both dates.")
            return
        }

        const today = new Date()
        const pickup = new Date(pickupDate)
        const drop = new Date(returnDate)

        if (pickup < today.setHours(0, 0, 0, 0)) {
            alert("Pickup date cannot be in the past.")
            return
        }

        if (drop <= pickup) {
            alert("Return date must be at least one day after pickup.");
            return;
        }

        try {
            const response = await getBookingSummary(bookingRequest)
            console.log(bookingRequest)
            setSummary(response.data)
        } catch(error) {
            console.error(error)
            alert(error.response?.data?.message || "Unable to generate booking summary.")
        }
    }

    const handleConfirmBooking = async () => {
        try {
            const response = await createBooking(bookingRequest)
            console.log(response.data)
            alert("Booking successful!")
            navigate("/my-bookings")
        } catch (error) {
            console.error(error)
            alert(error.response?.data?.message ||"Booking Failed!")
        }
    }

    if (!car)
        return <h3 className="text-center mt-5">Loading...</h3>;

    return (
        <div className="container py-5">
            <h2>Book {car.variant.company.companyName} {car.variant.variantName}</h2>
            <div className="row mt-4">
                <div className="col-md-6">
                    <label>Pickup Date</label>
                    <input
                        type="date"
                        className="form-control"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                    />
                </div>

                <div className="col-md-6">
                    <label>Return Date</label>
                    <input
                        type="date"
                        className="form-control"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                    />
                </div>
            </div>

            <button 
                className="btn btn-success mt-4"
                onClick={handleContinue}
            >
                Continue
            </button>
            {
                summary && (
                    <div className="card mt-4 shadow">
                        <div className="card-body">
                            <h4>Booking Summary</h4>
                            <hr />
                            <p>
                                <strong>Car:</strong> {summary.companyName} {summary.variantName}
                            </p>
                            <p>
                                <strong>Pickup:</strong> {summary.pickupDate}
                            </p>
                            <p>
                                <strong>Return:</strong> {summary.returnDate}
                            </p>
                            <p>
                                <strong>Total Days:</strong> {summary.totalDays}
                            </p>
                            <p>
                                <strong>Price / Day:</strong> ₹{summary.pricePerDay}
                            </p>
                            <h5 className="text-success">
                                Total: ₹{summary.totalAmount}
                            </h5>
                            <button
                                className="btn btn-success w-100"
                                onClick={handleConfirmBooking}
                            >
                                Confirm Booking
                            </button>
                        </div>

                    </div>

                )
            }
        </div>
    )
}

export default Booking
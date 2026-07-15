import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { makePayment } from '../../services/paymentService';

const Payment = () => {

    const { bookingId } = useParams();

    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState("UPI")

    const handlePayment = async () => {
        try {
            const paymentRequest = {
                bookingId: Number(bookingId),
                paymentMethod,
                idempotencyKey: crypto.randomUUID()
            }
            const response = await makePayment(paymentRequest)
            alert(response.data.message)
            navigate("/my-bookings")
        } catch (error) {
            console.error(error)
            alert(error.response?.data?.message || "Payment Failed")
        }
    }

    return (
        <div className='container py-5'>
            <div className='card shadow'>
                <div className='card-body'>
                    <h2>Payment</h2>
                    <hr />
                    <label>Payment Method</label>
                    <select 
                        className='form-select'
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <option value="UPI">UPI</option>
                        <option value="CREDIT_CARD">Credit Card</option>
                        <option value="DEBIT_CARD">Debit Card</option>
                        <option value="NET_BANKING">Net Banking</option>
                    </select>
                    <button
                        className='btn btn-success mt-4 w-100'
                        onClick={handlePayment}
                    >Pay Now</button>
                </div>
            </div>
        </div>
    )
}

export default Payment
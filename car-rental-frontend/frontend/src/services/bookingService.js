import axios from "axios"

const BASE_URL = "http://localhost:8080"

export const getBookingSummary = (bookingRequest) => {
    return axios.post(
        `${BASE_URL}/bookings/summary`,
        bookingRequest
    )
}

export const createBooking = (bookingRequest) => {
    return axios.post(
        `${BASE_URL}/bookings`,
        bookingRequest
    )
}

export const getUserBookings = (userId) => {
    return axios.get(`${BASE_URL}/bookings/user/${userId}`)
}
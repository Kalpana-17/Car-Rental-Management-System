import Home from "../pages/home/Home"
import Cars from "../pages/Cars"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import Profile from "../pages/user/Profile"
import MyBookings from "../pages/user/MyBookings"
import { Routes, Route } from "react-router-dom"
import Booking from "../pages/Booking"
import Payment from "../pages/payment/Payment"
import NotFound from "../pages/NotFound"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/booking/:id" element={<Booking />} />
      <Route path="/payments/:bookingId" element={<Payment />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
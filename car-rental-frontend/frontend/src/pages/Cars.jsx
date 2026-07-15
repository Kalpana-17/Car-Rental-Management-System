import React, { use, useEffect, useState } from 'react'
import  { getAllCars } from '../services/carService'
import CarCard from "../components/common/CarCard"


const Cars = () => {

  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchCars();
  }, [])

  const fetchCars = async () => {
    try {
      setLoading(true)
      const response = await getAllCars()
      setCars(response.data)
      setError("")
    } catch (error) {
      setError("Unable to fetch cars.")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className='container py-5 text-center'>
        <h4>Loading cars...</h4>
      </div>
    )
  }

  if (error) {
    return (
      <div className='container py-5'>
        <div className='alert alert-danger'>{error}</div>
      </div>
    )
  }

  if (cars.length === 0) {
    return (
      <div className='container py-5 text-center'>
        <h4>No cars available!</h4>
      </div>
    )
  }

  return (
    <div className='container py-5'>
      <h2 className='mb-4'>Available cars</h2>
      <div className='row'>
        {cars.map((car) => (
          <div
            className='col-lg-4 mb-4'
            key={car.id}
          >
            <CarCard car={car}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cars
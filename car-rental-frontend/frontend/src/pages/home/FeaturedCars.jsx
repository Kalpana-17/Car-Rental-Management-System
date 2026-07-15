import React, { useEffect, useState } from 'react'
import { getAllCars } from '../../services/carService'
import CarCard from '../../components/common/CarCard'

const FeaturedCars = () => {
  
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedCars()
  }, [])

  const fetchFeaturedCars = async () => {
    try {
      const response =await getAllCars();
      setCars(response.data.slice(0, 3))
    } catch(error) {
      console.error("Unable to fetch featured cars.", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className='container py-5 text-center'>
        <h4>Loading Featured Cars...</h4>
      </section>
    )
  }

  return (
    <section className='container py-5'>
      <h2 className='text-center mb-5'> Featured Cars</h2>
      <div className='row'>
        {cars.map((car) => (
          <div className='col-lg-4 mb-4' key={car.id}>
            <CarCard car={car}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedCars
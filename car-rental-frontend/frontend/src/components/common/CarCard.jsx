import React from 'react'
import { useNavigate } from 'react-router-dom'

const CarCard = ({ car }) => {
  const navigate = useNavigate()

  const image = car.imageURL && car.imageURL.trim() !== "" 
                ? car.imageURL : "https://placehold.co/600x400?text=Car"
  // console.log("Car: ",car)

  return (
    <div className='card h-100 shadow-sm'>
      <img 
        src={image}
        className='card-img-top'
        alt={car.variant.variantName}
        style={{height: "220px", objectFit: "cover"}}
      />
      <div className='card-body'>
        <h5 className='card-title'>{car.variant.variantName}</h5>
        <p className='text-muted mb-1'>
          {car.variant.company.companyName}
        </p>
        <p className="mb-1">
          {car.variant.fuelType} • {car.variant.seats} Seats
        </p>
        <p className="mb-1">
          {car.color} • {car.modelYear}
        </p>
        <h5 className='text-primary'>₹ {car.pricePerDay} / day</h5>
        <p className="mb-3">
          <strong>Status:</strong>
          {car.carStatus === "AVAILABLE" && (
            <span className="badge bg-success ms-2">
              Available
            </span>
          )}

          {car.carStatus === "BOOKED" && (
            <span className="badge bg-danger ms-2">
              Booked
            </span>
          )}

          {car.carStatus === "MAINTENANCE" && (
            <span className="badge bg-warning text-dark ms-2">
              Under Maintenance
            </span>
          )}
        </p>
        {
          car.carStatus === "AVAILABLE" ? (
            <button
              className="btn btn-primary btn-lg w-100 mt-2"
              onClick={() => navigate(`/booking/${car.id}`)}
            >
              Book Now
            </button>
          ) : (
            <button
              className="btn btn-secondary btn-lg w-100 mt-2"
              disabled
            >
              Currently Unavailable
            </button>
          )
        }
      </div>
    </div>
  )
}

export default CarCard
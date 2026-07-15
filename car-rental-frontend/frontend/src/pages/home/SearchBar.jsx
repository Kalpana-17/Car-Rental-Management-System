import React from 'react'

const SearchBar = () => {
  return (
    <>
        <div className='card shadow-lg border-0 p-4'>
            <div className='row g-3'>
                <div className='col-lg-3'>
                    <label className='form-label fw-semibold'>Pickup Location</label>
                    <input className='form-control' type='text' placeholder='Enter city'/>
                </div>
                <div className='col-lg-3'>
                    <label className='form-label fw-semibold'>Pickup Date</label>
                    <input className='form-control' type='date'/>
                </div>
                <div className='col-lg-3'>
                    <label className='form-label fw-semibold'>Return Date</label>
                    <input className='form-control' type='date'/>
                </div>
                <div className='col-lg-3 d-flex align-items-end'>
                    <button className='btn btn-primary w-100'> Search cars</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchBar
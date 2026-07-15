import React from 'react'
import SearchBar from './SearchBar'
import '../../styles/components/Hero.css'

const Hero = () => {
  return (
    <section className='cargo-hero'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7'>
                    <h1 className='display-3 fw-bold text-white'>
                        Drive Beyond <br/> Boundaries
                    </h1>
                    <p className='lead text-white my-4'>
                        Book premium rental cars at affordable prices. 
                        Fast, secure and hassle-free.
                    </p>

                    <SearchBar/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
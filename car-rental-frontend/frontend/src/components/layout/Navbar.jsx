import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-white shadow-sm'>
        <div className='container'>
            <Link className='navbar-brand fw-bold' to='/'>
            Car Rental Services
            </Link>
        </div>

        <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
        >
            <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/cars'>Cars</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/about'>About</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/login'>Login</Link>
                </li>
                <li className='nav-item'>
                    <Link className='btn btn-primary ms-2' to='/register'>Register</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
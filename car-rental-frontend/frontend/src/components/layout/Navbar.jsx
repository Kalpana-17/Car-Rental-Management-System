import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { isLoggedIn, logout } from '../../utils/auth'
import '../../styles/components/navbar.css'

const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/")
    } 

  return (
    <nav className='navbar navbar-expand-lg cargo-navbar'>
        <div className='container-fluid px-4'>
            <Link className='navbar-brand cargo-logo' to='/'>
                <span>CarGo</span>
                <small>Rentals</small>
            </Link>

            <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbar'
            >
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbar'>
                <ul className='navbar-nav ms-auto align-items-lg-center'>
                    <li className='nav-item'>
                        <NavLink 
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink 
                            className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        } 
                        to='/cars'
                        >
                        Cars
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink 
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }  
                            to='/about'>
                            About
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink 
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }  
                            to='/contact'
                        >
                            Contact
                        </NavLink>
                    </li>
                    
                    {
                        isLoggedIn() ? (
                            <>
                                <li className='nav-item'>
                                    <NavLink className={({ isActive }) =>
                                            isActive ? 'nav-link active' : 'nav-link'
                                        }
                                        to='/my-bookings'
                                    >
                                        My Bookings
                                    </NavLink>
                                </li>

                                <li className='nav-item'>
                                    <NavLink className={({ isActive }) =>
                                            isActive ? 'nav-link active' : 'nav-link'
                                        }
                                        to='/profile'
                                    >
                                        Profile
                                    </NavLink>
                                </li>

                                <li className='nav-item ms-lg-3'>
                                    <button 
                                        className='btn cargo-btn'
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className='nav-item ms-lg-3'>
                                    <NavLink 
                                        className='btn cargo-btn-outline'
                                        to='/login'
                                    >
                                        Login
                                    </NavLink>
                                </li>

                                <li className='nav-item ms-lg-2 mt-2 mt-lg-0'>
                                    <NavLink 
                                        className='btn cargo-btn'
                                        to='/register'
                                    >
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
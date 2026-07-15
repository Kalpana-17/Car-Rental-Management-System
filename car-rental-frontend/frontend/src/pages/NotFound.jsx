import React from 'react'
import Layout from "../components/layout/Layout"
import AppRoutes from '../routes/AppRoutes'

const NotFound = () => {
  return (
    <div className='container text-center py-5'>
        <h1 className='display-1'>404</h1>
        <h3>Page Not Found</h3>
        <p>The page you're looking for doesn't exist.</p>
    </div>
  )
}

export default NotFound
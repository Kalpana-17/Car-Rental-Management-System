import React from 'react'

const AuthCard = ({ title, subtitle, children }) => {
  return (
    <div className='auth-card'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {children}
    </div>
  )
}

export default AuthCard
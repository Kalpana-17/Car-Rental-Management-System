import { useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/layout/Layout'

const App = () => {

  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  )
}

export default App

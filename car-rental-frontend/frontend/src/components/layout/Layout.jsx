import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{paddingTop:'30px'}}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout
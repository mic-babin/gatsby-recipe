import React from "react"
import Navbar from "./navbar"
import Footer from "./Footer"

import '../assets/css/normalize.css'
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout

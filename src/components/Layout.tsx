import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer"
import Navbar from "./Navbar"

import "../assets/css/index.css"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="This is the Hot Oven's Backery's website"
        />
        <meta name="keywords" content="backery" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <title>Hot Oven's Backery</title>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout

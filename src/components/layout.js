import React from "react"
import PropTypes from "prop-types"
import PageTransition from 'gatsby-plugin-page-transitions'

import "../styles/layout.sass"

import Header from "./header"
import Footer from "./footer"
import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <PageTransition>
      <Header />
      <main>
        <div className="container">
          <Nav/>
          {children}
        </div>
      </main>
      <Footer />
    </PageTransition>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

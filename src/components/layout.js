import React from "react"
import PropTypes from "prop-types"
import PageTransition from 'gatsby-plugin-page-transitions'

import "../styles/layout.sass"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <PageTransition>
      <Header />
      <main >{children}</main>
      <Footer />
    </PageTransition>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

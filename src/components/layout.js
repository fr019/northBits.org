import React from "react"
import PropTypes from "prop-types"

import "../styles/layout.sass"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return [
    <Header/>,
    <main>
      {children}
    </main>,
    <Footer/>,
  ]
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

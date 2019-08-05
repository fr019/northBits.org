import React from "react"
import PropTypes from "prop-types"

import "../styles/layout.sass"

import Header from "./header"
import Footer from "./footer"
import Nav from "./nav"

const Layout = ({ children }) => {
  return [
    <Header key={0}/>,
    <main key={1}>
      <div className="container">
        <Nav/>
        {children}
      </div>
    </main>,
    <Footer key={2}/>,
  ]
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

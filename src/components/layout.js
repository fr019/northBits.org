import React from "react"
import PropTypes from "prop-types"

import "../styles/layout.sass"

import Header from "./header"

const Layout = ({ children }) => {
  return [
    <Header key={0}/>,
    <main key={1}>
      <div className="container">
        {children}
      </div>
    </main>
  ]
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"
import PropTypes from "prop-types"

import "../styles/layout.sass"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return [
    <Header key={"1"} />,
    <main key={"2"}>{children}</main>,
    <Footer key={"3"} />,
  ]
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

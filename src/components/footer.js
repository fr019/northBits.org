import React from "react"

const Footer = () => (
  <footer className={"container"}>
    {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer

import React from "react"

const Footer = () => (
  <footer>
    <div className={"container"}>
      {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer

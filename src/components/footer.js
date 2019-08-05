import React from "react"

import gatsbyLogo from "./../images/gatsby.svg"


const Footer = () => (
  <footer>
    <div className={"container"}>
      <div className={"made"}>
        Made with
        <a className={"link-icon"} href="https://gatsbyjs.org">
          <img src={gatsbyLogo} alt="gatsbyjs-icon"/>
        </a>
        by Valera Andriyanov, {" " + new Date().getFullYear()}
      </div>
    </div>
  </footer>
)

export default Footer

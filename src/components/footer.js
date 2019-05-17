import React from "react"
import { globalHistory } from "@reach/router"
import { Link, navigate } from "gatsby"

import gatsbyLogo from "./../images/gatsby.svg"

const langHandler = e => {
  e.preventDefault()
  console.log("click")
  // change current url
  let url = globalHistory.location.pathname.split("/")
  if (e.target.dataset.lang !== "en") url[1] = e.target.dataset.lang
  navigate(url.join("/"))
}

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
      <ul className={"lang-menu"}>
        <li key={"eng"}>
          <Link
            to={"/"}
            className={"lang-menu__item"}
            onClick={e => langHandler(e)}
            data-lang={"en"}
          >
            Eng
          </Link>
        </li>
        <li key={"heb"}>
          <Link
            to={"/he/"}
            className={"lang-menu__item"}
            onClick={e => langHandler(e)}
            data-lang={"he"}
          >
            He
          </Link>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer

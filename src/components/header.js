import { graphql, Link, useStaticQuery, navigate } from "gatsby"
import { globalHistory } from "@reach/router"
import PropTypes from "prop-types"
import React from "react"

const langHandler = e => {
  e.preventDefault()
  console.log("click")
  // change current url
  let url = globalHistory.location.pathname.split("/")
  if (e.target.dataset.lang !== "en") url[1] = e.target.dataset.lang
  navigate(url.join("/"))
}

const Header = () => {
  let currentLang = "en"
  if (globalHistory.location.pathname.split("/", 3)[1].includes("he"))
    currentLang = "he"

  const data = useStaticQuery(graphql`
    query {
      allUrlsJson {
        edges {
          node {
            id
            name
            path
            lang
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header>
      <div className={"container"}>
        <nav>
          <ul className={"nav-menu"}>
            {data.allUrlsJson.edges
              .filter(el => el.node.lang === currentLang)
              .map(({ node: { id, name, path } }) => (
                <li key={id}>
                  <Link
                    className={"nav-menu__item"}
                    to={path}
                    activeClassName="active"
                  >
                    {name}
                  </Link>
                </li>
              ))}
          </ul>
          <ul className={"nav-menu lang"}>
            <li key={"eng"}>
              <Link
                to={"/"}
                className={"nav-menu__item"}
                onClick={e => langHandler(e)}
                data-lang={"en"}
              >
                Eng
              </Link>
            </li>
            <li key={"heb"}>
              <Link
                to={"/he/"}
                className={"nav-menu__item"}
                onClick={e => langHandler(e)}
                data-lang={"he"}
              >
                He
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

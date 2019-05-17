import { graphql, Link, useStaticQuery } from "gatsby"
import { globalHistory } from "@reach/router"
import PropTypes from "prop-types"
import React from "react"

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

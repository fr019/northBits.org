import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import "../styles/components/_nav.sass"

const Nav = () => {
  let currentLang = "en"
  // if (globalHistory.location.pathname.split("/", 3)[1].includes("he")) currentLang = "he"

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
  )
}

export default Nav

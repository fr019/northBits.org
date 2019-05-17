import { graphql, Link, useStaticQuery, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const langHandler = (e) => {
  e.preventDefault()


  // change current url
  let url = window.location.pathname.split("/", 3)
  url[1] = e.target.dataset.lang
  navigate(url.join("/"))
}

const Header = () => {
  const currentLang = window.location.pathname.split("/", 3)[1]
  console.log("currentLang", currentLang)
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
              .filter((el) => el.node.lang === currentLang)
              .map(({ node: { id, name, path } }) => (
                <li key={id}>
                  <Link className={"nav-menu__item"}
                        to={path}
                        activeClassName="active">{name}</Link>
                </li>
              ))}
          </ul>
          <ul className={"nav-menu lang"}>
            <li key={"eng"}>
              <a href=""
                 data-lang={"en"}
                 onClick={e => langHandler(e)}
                 className={"nav-menu__item"}>En</a>
            </li>
            <li key={"heb"}>
              <a href=""
                 data-lang={"he"}
                 onClick={e => langHandler(e)}
                 className={"nav-menu__item"}>He</a>
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

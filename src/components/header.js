import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const langHandler = (e) => {
  e.preventDefault()
  window.history.pushState('page2', 'Title', '/' + e.target.dataset.lang);
  console.log('click', e.target.dataset.lang);
}

const Header = (e) => {
  const data = useStaticQuery(graphql`
    query {
     allUrlsJson {
        edges {
          node {
            id
            name
            path
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
            {data.allUrlsJson.edges.map(({ node: { id, name, path } }) => (
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

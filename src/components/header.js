import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const langHandler = (e) => {
  e.preventDefault()
  console.log('click');
}

const Header = (e) => {
  const data = useStaticQuery(graphql`
    query {
     allUrlsJson {
        edges {
          node {
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
            {/*<li>*/}
            {/*  <a href=""*/}
            {/*     onClick={e => langHandler}*/}
            {/*     className={"nav-menu__item"}>En</a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a href=""*/}
            {/*     onClick={e => langHandler}*/}
            {/*     className={"nav-menu__item"}>He</a>*/}
            {/*</li>*/}
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

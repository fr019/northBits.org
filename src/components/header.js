import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
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
    <header style={{ background: "white" }}>
      <div className={"container"}>
        <h1 style={{ margin: 0 }}>
          <Link to="/" style={{ textDecoration: `none` }}>
            {/*{siteTitle}*/}
          </Link>
        </h1>

        <ul>
          {data.allUrlsJson.edges.map(({ node: { id, name, path } }) => (
            <li key={id}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
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

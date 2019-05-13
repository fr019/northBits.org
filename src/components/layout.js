import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/layout.sass"
import { Link } from "@reach/router"

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <ul>
            {data.allSitePage.edges.map(({ node: { id, path } }) => (
              <li key={id}>
                <Link to={path}>{id}</Link>
              </li>
            ))}
          </ul>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const query = graphql`
  query {
    allSitePage {
      edges {
        node {
          id
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
`

export default Layout

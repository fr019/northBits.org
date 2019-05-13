import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`north`, `bits`, `portfolio`, "developer"]}/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image/>
      <ul>
        {data.allProjectsJson.edges.map(({ node: { id, name, site } }) => (
          <li key={id}>
            <a href={site}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export const query = graphql`query {
  allProjectsJson {
    edges {
      node {
        id
        name
        site
      }
    }
  }
}`


export default IndexPage

import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            id
            name
            site
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`north`, `bits`, `portfolio`, "developer"]}
      />
      <div className={"container"}>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
          <ul>
            {data.allProjectsJson.edges.map(({ node: { id, name, site } }) => (
              <li key={id}>
                <a href={site}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

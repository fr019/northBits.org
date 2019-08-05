import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/info"
import Projects from "../components/projects"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            id
            name
            slug
            site
          }
        }
      }
    }
  `)

  return (<Layout>
    <SEO title="About" keywords={[`north`, `bits`, `portfolio`, "developer"]}/>
    <div id={"about"} className={"page"}>
      <Info author={"author"}/>
      <Projects projects={data.allProjectsJson.edges}/>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>)
}

export default AboutPage

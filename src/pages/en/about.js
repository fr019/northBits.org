import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Page two"/>
    <div className={"container"}>
      <h1>Hi from the AboutPage ENG</h1>
      <p>Welcome to AboutPage</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default AboutPage

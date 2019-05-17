import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Page two"/>
    <div className={"container"}>
      <h1>Hi from the ContactPage HEBREW</h1>
      <p>Welcome to ContactPage</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default ContactPage

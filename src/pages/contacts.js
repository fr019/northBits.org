import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      keywords={[`north`, `bits`, `portfolio`, "developer"]}
    />
    <div id={"contacts"} className={"page"}>
      <h1>Hi from the ContactPage ENG</h1>
      <p>Welcome to ContactPage</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default ContactPage

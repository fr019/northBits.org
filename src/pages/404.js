import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="404: Not found"
      keywords={[`north`, `bits`, `portfolio`, "developer"]}
    />
    <div id={"error"} className={"page"}>
      <h1>NOT FOUND EN</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage

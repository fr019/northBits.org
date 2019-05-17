import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const One = () => (
  <Layout>
    <SEO
      title="One project"
      keywords={[`north`, `bits`, `portfolio`, "developer"]}
    />
    <div className={"container"}>
      <h1>One</h1>
    </div>
  </Layout>
)

export default One

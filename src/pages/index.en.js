import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/home.sass"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`north`, `bits`, `portfolio`, "developer"]}
      />
      <div id={"home"} className={"page"}>
        <h1>Graphic designer &</h1>
        <h1>Front-end developer</h1>
      </div>
    </Layout>
  )
}

export default IndexPage

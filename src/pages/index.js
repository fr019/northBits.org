import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialIcons from "../components/social-icons"

import "../styles/home.sass"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`north`, `bits`, `portfolio`, "developer"]}
      />
      <div id={"home"} className={"page"}>
        <h1>Valera Andriyanov</h1>
        <h2>I am a full-stack java-script developer </h2>
        <SocialIcons />
      </div>
    </Layout>
  )
}

export default IndexPage

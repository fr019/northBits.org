import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "../styles/components/_social-icons.sass"
import { ReactSVG } from "react-svg"

const SocialIcons = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: {eq: "icons"} } ) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `).allFile.edges

  const icons = [
    { name: "phone", href: "tel:+972539020563" },
    { name: "mail", href: "mailto:mprint85@gmail.com" },
    { name: "linkedin", href: "https://www.linkedin.com/in/valera-andriyanov/" },
    { name: "github", href: "https://github.com/fr019/" },
    { name: "facebook", href: "https://www.facebook.com/NorthBits" },
    { name: "behance", href: "https://www.behance.net/valeraandriya" },
  ]

  return (
    <nav>
      <ul className={"social-icons"}>
        {icons.map((icon, index) => {
          return (
            <li key={`svg-${index}`}>
              <a href={icon.href}>
                <ReactSVG
                  src={data.find((it) => icon.name === it.node.name).node.publicURL}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SocialIcons

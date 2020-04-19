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
    { name: "linkedin", href: "mailto:mprint85@gmail.com" },
    { name: "github", href: "mailto:mprint85@gmail.com" },
    { name: "facebook", href: "mailto:mprint85@gmail.com" },
    { name: "behance", href: "mailto:mprint85@gmail.com" },
  ]

  console.log(data)
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

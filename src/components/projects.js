import React from "react"
import { Link } from "gatsby"

const Projects = ({projects}) => (
  <div className={"information"}>
    <ul>
      {projects.map(
        ({ node: { id, name, slug, site } }) => (
          <li key={id}>
            <Link to={"/projects" + slug}>
              {name}
            </Link>
            <br/>
            <a href={site}>{site}</a>
          </li>
        ),
      )}
    </ul>
  </div>
)

export default Projects

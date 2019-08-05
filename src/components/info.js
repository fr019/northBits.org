import React from "react"
import Image from "./image"

const Info = ({author}) => (

  <div className={"information"}>
    <h1 className={"title"}>Graphic Designer & Front-End Developer</h1>
    <div className="info">
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Architecto eos illo inventore ipsam molestiae praesentium reprehenderit unde.
        Ab accusamus autem deleniti exercitationem molestiae, mollitia perferendis quas rem reprehenderit, saepe temporibus.
      </div>
      <div className={"img"}>
        <Image />
      </div>
    </div>
  </div>
)

export default Info

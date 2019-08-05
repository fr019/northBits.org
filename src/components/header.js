import PropTypes from "prop-types"
import React from "react"

const Header = () => {
  // let currentLang = "en"

  return (
    <header>
      <div className={"container"}>
        <div className="logo">
          NorthBits
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import { navigate } from "gatsby"
import { useEffect } from "react"

const IndexPage = () => {
  useEffect(() => {
    navigate("/en/")
  }, [])
  return null
}

export default IndexPage

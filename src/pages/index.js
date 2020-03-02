import React, { useEffect } from "react"
import Layout from "src/components/layout"
import { navigate } from "gatsby"

export default () => {
  useEffect(() => {
    navigate("/about")
  }, [])
  return <Layout></Layout>
}

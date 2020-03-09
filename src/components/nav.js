import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BaseLayout = styled.div`
  width: 100%;
`

const DesktopLayout = styled(BaseLayout)`
  height: fit-content;
  background: lightcoral;
  position: sticky;
  top: 0;
  @media (max-width: 768px) {
    display: none;
  }
`

const MobileLayout = styled(BaseLayout)`
  background: lightskyblue;
  height: 25px;
  @media (min-width: 769px) {
    display: none;
  }
`

const Layout = ({ children }) => (
  <>
    <MobileLayout>{children}</MobileLayout>
    <DesktopLayout>{children}</DesktopLayout>
  </>
)

export default () => {
  return (
    <Layout>
      <Link to="/aspb">aspb</Link>
      <Link to="/unum">unum</Link>
      <Link to="/about">about</Link>
      <Link to="/photography">photography</Link>
    </Layout>
  )
}

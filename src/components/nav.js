import React from "react"
import styled from "styled-components"
import useBreakpoint from "src/hooks/useBreakpoint"
import { Link } from "gatsby"

const Layout = styled.div`
  width: 100%;
`

const DesktopLayout = styled(Layout)`
  height: 400px;
  background: lightcoral;
  position: sticky;
  top: 0;
`

const MobileLayout = styled.div`
  background: lightskyblue;
  height: 25px;
`

export default () => {
  const { breakpoint } = useBreakpoint()
  if (breakpoint === "xs" || breakpoint === "sm") {
    return (
      <MobileLayout>
        <Link to="/aspb">aspb</Link>
        <Link to="/unum">unum</Link>
        <Link to="/about">about</Link>
        <Link to="/photography">photography</Link>
      </MobileLayout>
    )
  } else {
    return (
      <DesktopLayout>
        <Link to="/aspb">aspb</Link>
        <Link to="/unum">unum</Link>
        <Link to="/about">about</Link>
        <Link to="/photography">photography</Link>
      </DesktopLayout>
    )
  }
}

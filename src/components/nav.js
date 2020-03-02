import React, { useEffect } from "react"
import styled from "styled-components"
import useBreakpoint from "src/hooks/useBreakpoint"

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
  background: lightslategrey;
  height: 25px;
`

export default () => {
  const { breakpoint } = useBreakpoint()
  if (breakpoint === "xs" || breakpoint === "sm") {
    return <MobileLayout />
  } else {
    return <DesktopLayout />
  }
}

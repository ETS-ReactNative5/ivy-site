import React from "react"
import Text from "src/components/text"
import styled from "styled-components"

const Layout = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 30vh 15vw;
`

const DesktopLayout = styled(Layout)`
  @media (max-width: 768px) {
    display: none;
  }
`

const MobileLayout = styled(Layout)`
  padding: 20vh 10vw;
  @media (min-width: 769px) {
    display: none;
  }
`

const Desktop = ({ children }) => (
  <DesktopLayout>
    <Text center md>
      {children}
    </Text>
  </DesktopLayout>
)

const Mobile = ({ children }) => (
  <MobileLayout>
    <Text md>{children}</Text>
  </MobileLayout>
)

const ResponsiveLayout = ({ children }) => (
  <>
    <Mobile>{children}</Mobile>
    <Desktop>{children}</Desktop>
  </>
)

export default () => (
  <ResponsiveLayout>
    UNUM Inc. began in 2016 in Hollywood. In those four years, the app gained
    over 11 million users since its start and continues to grow at an
    exponential rate. I’m responsible for creating and designing our robust
    template, overlay, and photo preset collections. In the span of four month,
    the approval rating on the app store went from 4.3 to 4.5 stars and
    continues to quickly rise, due to new features I introduced to the app.
  </ResponsiveLayout>
)

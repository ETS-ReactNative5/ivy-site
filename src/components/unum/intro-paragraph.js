import React from "react"
import Text from "src/components/text"
import styled from "styled-components"

const Layout = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 30vh 15vw;
`

export default () => (
  <Layout>
    <Text center md>
      UNUM Inc. began in 2016 in Hollywood. In those four years, the app gained
      over 11 million users since its start and continues to grow at an
      exponential rate. I’m responsible for creating and designing our robust
      template, overlay, and photo preset collections. In the span of four
      month, the approval rating on the app store went from 4.3 to 4.5 stars and
      continues to quickly rise, due to new features I introduced to the app.
    </Text>
  </Layout>
)

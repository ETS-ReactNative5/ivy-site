import React from "react"
import Layout from "src/components/layout"
import Text from "src/components/text"
import styled from "styled-components"

const AboutLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 12vh;
  padding-left: 6vw;
  padding-right: 30vw;
  & > *:first-child {
    margin-bottom: 3px;
  }
  & > *:last-child {
    margin-left: 20px;
    margin-top: 20px;
  }
`

export default () => {
  return (
    <Layout>
      <AboutLayout>
        <Text uppercase>Ivy Son</Text>
        <Text uppercase>UI Designer / Photographer</Text>
        <Text>
          Hi! My name is Ivy and I’m a UI Designer and Photographer. I graduated
          from the University of California, Riverside with a B.A. Art History.
          I’ve navigated my career through art and music and ultimately found
          myself at UI/UX design.
        </Text>
      </AboutLayout>
    </Layout>
  )
}

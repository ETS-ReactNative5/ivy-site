import React from "react"
import Img from "src/components/img"
import styled from "styled-components"
import Text from "src/components/text"

const Layout = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template: max-content / 1fr 1fr;
  grid-gap: 6vw;
  padding: 30vh 6vw;
  padding-left: 12vw;
  padding-top: 20vh;
`

const TextLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: 1fr / 1fr;
  align-items: center;
`
export default () => (
  <Layout>
    <TextLayout>
      <div>
        <Text uppercase lg right>
          220 Photo Filters
        </Text>
        <Text right>
          Created and manage a library of over 200+ photo presets. I create up
          to 10 different presets weekly, testing them through a rigorous test
          on over 20 photos to ensure that they are exceptional.
        </Text>
      </div>
    </TextLayout>
    <Img src="https://dl.airtable.com/.attachmentThumbnails/12f9d15d2f313d049ec7bd12ee497f2b/c13ee8bb" />
  </Layout>
)

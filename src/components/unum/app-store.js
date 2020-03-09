import React from "react"
import Text from "src/components/text"
import styled from "styled-components"

const Layout = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template: max-content / 1fr 1fr;
  padding-left: 6vw;
  padding-right: 6vw;
  @media (max-width: 768px) {
    grid-template: max-content max-content / 1fr;
    grid-gap: 10px;
  }
`

const TextLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: 1fr / 1fr;
  align-items: center;
`

const Image = styled.img`
  max-width: 100%;
`

export default () => (
  <Layout>
    <Image src="https://dl.airtable.com/.attachmentThumbnails/55ba86c126e4597b5c6c8755dfb088b2/f9e7602e" />
    <TextLayout>
      <div>
        <Text lg uppercase>
          App Store Screens
        </Text>
        <Text>
          Assembled a 10-page presentation of key features to display on the
          Apple app store.
        </Text>
      </div>
    </TextLayout>
  </Layout>
)

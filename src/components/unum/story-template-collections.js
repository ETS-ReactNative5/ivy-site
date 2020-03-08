import React from "react"
import Img from "src/components/img"
import styled from "styled-components"
import Text from "src/components/text"

const Layout = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template: max-content / 70% 30%;
  padding: 30vh 6vw;
`

const TextLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: 1fr / 1fr;
  align-items: center;
  & > *:first-child > *:first-child {
    margin-bottom: 10px;
  }
`
export default () => (
  <Layout>
    <Img src="https://dl.airtable.com/.attachmentThumbnails/32bbcdeee129f4d17f6eef426815ef58/44d171d1" />
    <TextLayout>
      <div>
        <Text uppercase lg>
          Story Template Collections
        </Text>
        <Text>
          The objective of this design was to create a user nterface that sorted
          templates into collections and made it easily digestible for users.
        </Text>
      </div>
    </TextLayout>
  </Layout>
)

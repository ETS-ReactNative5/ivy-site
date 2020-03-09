import React from "react"
import Img from "src/components/img"
import styled from "styled-components"
import Text from "src/components/text"

const ImgLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template: 1fr /1fr;
  justify-items: center;
`

const MainLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 50vh 6vw;
  @media (max-width: 768px) {
    padding: 30vh 0;
  }
`

const TextLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-right: 9vw;
  padding-left: 9vw;
`

export default () => (
  <MainLayout>
    <ImgLayout>
      <Img src="https://dl.airtable.com/.attachmentThumbnails/c3553e390db1b8b9b2997028c94b636c/324bf8bb" />
    </ImgLayout>
    <TextLayout>
      <Text uppercase lg center>
        Export Page Redesign
      </Text>
      <Text center>
        The objective of this design was to keep the same elements of UNUM’s
        original export page while recommending other features (i.e. captions,
        editing, analytics, and more). This was my first UI project at this
        company and I was able to design, approve, deliver this product.
      </Text>
    </TextLayout>
  </MainLayout>
)

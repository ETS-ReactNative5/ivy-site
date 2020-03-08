import React from "react"
import Img from "src/components/img"
import styled from "styled-components"
import Text from "src/components/text"

const PhotoLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template: 1fr / repeat(auto-fill, minmax(calc(33% - 100px), 1fr));
  grid-gap: 50px;
  padding-left: 6vw;
  padding-right: 6vw;
`

const TextLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 15vw;
  padding-right: 15vw;
`

const MainLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 30vh;
  padding-bottom: 30vh;
  & > *:first-child {
    margin-bottom: 10vh;
  }
`

export default () => (
  <MainLayout>
    <PhotoLayout>
      <Img src="https://dl.airtable.com/.attachmentThumbnails/dd3a4013f75dcb645053c5cbae196fa8/f0e30e28" />
      <Img src="https://dl.airtable.com/.attachmentThumbnails/7e815cbd3d3a5adb2b90ef82001cf8a6/ce3bc62a" />
      <Img src="https://dl.airtable.com/.attachmentThumbnails/b893412dc9c854374aee8a82543152c9/d2766afc" />
      <Img src="https://dl.airtable.com/.attachmentThumbnails/69d3cc36dca9fb0f63681133674c5e24/701f655c" />
      <Img src="https://dl.airtable.com/.attachmentThumbnails/d16288c050732ed40cf6786ddae547e7/5ef0ca49" />
      <Img src="https://dl.airtable.com/.attachmentThumbnails/6716685156d1b5ef3562db1394d46020/5d963406" />
      <Img src="https://dl.airtable.com/.attachmentThumbnails/b8f34e650132e654426e4d7ac172ae42/41d56b86" />
      <Img src="https://dl.airtable.com/.attachmentThumbnails/1538d4f4f6a4874026c386de3e72f1ad/eacdce8f" />
      <Img src="https://dl.airtable.com/.attachmentThumbnails/e1e5c7d4a879dbecdce0ff313c43501f/649bc3f8" />
    </PhotoLayout>
    <TextLayout>
      <Text center lg uppercase>
        425 Story Templates
      </Text>
      <Text center>
        I produced and manage more that 425 unique templates accessible for our
        11 million users. Every Tuesdays and Fridays, I coordinate and head the
        release of each collection by gathering the necessary assets from a team
        of five.
      </Text>
    </TextLayout>
  </MainLayout>
)

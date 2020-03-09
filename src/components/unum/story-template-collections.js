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
  @media (max-width: 768px) {
    grid-template: max-content max-content / 1fr;
    padding-top: 20vh;
    padding-bottom: 20vh;
  }
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

const DesktopTextLayout = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

const MobileTextLayout = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`

const DesktopTextHeader = ({ children }) => (
  <Text uppercase lg>
    {children}
  </Text>
)

const MobileTextHeader = ({ children }) => (
  <Text uppercase center lg>
    {children}
  </Text>
)

const DesktopTextBody = ({ children }) => <Text>{children}</Text>

const MobileTextBody = ({ children }) => <Text center>{children}</Text>

const TextHeader = ({ children }) => (
  <>
    <DesktopTextLayout>
      <DesktopTextHeader>{children}</DesktopTextHeader>
    </DesktopTextLayout>
    <MobileTextLayout>
      <MobileTextHeader>{children}</MobileTextHeader>
    </MobileTextLayout>
  </>
)

const TextBody = ({ children }) => (
  <>
    <DesktopTextLayout>
      <DesktopTextBody>{children}</DesktopTextBody>
    </DesktopTextLayout>
    <MobileTextLayout>
      <MobileTextBody>{children}</MobileTextBody>
    </MobileTextLayout>
  </>
)
export default () => (
  <Layout>
    <Img src="https://dl.airtable.com/.attachmentThumbnails/32bbcdeee129f4d17f6eef426815ef58/44d171d1" />
    <TextLayout>
      <div>
        <TextHeader>Story Template Collections</TextHeader>
        <TextBody>
          The objective of this design was to create a user interface that
          sorted templates into collections and made it easily digestible for
          users.
        </TextBody>
      </div>
    </TextLayout>
  </Layout>
)

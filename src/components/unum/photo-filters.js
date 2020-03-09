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
  direction: rtl;
  @media (max-width: 768px) {
    grid-template: max-content max-content / 1fr;
    padding: 20vh 9vw;
    grid-gap: 80px;
    direction: ltr;
    justify-items: center;
  }
`

const TextLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: 1fr / 1fr;
  align-items: center;
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
  <Text uppercase lg right>
    {children}
  </Text>
)

const MobileTextHeader = ({ children }) => (
  <Text uppercase center lg>
    {children}
  </Text>
)

const DesktopTextBody = ({ children }) => <Text right>{children}</Text>

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
    <Img src="https://dl.airtable.com/.attachmentThumbnails/12f9d15d2f313d049ec7bd12ee497f2b/c13ee8bb" />
    <TextLayout>
      <div>
        <TextHeader>220 Photo Filters</TextHeader>
        <TextBody>
          Created and manage a library of over 200+ photo presets. I create up
          to 10 different presets weekly, testing them through a rigorous test
          on over 20 photos to ensure that they are exceptional.
        </TextBody>
      </div>
    </TextLayout>
  </Layout>
)

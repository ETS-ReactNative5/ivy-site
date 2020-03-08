import React, { useState, useMemo } from "react"
import styled from "styled-components"

const IntroPhotoLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 12vh;
  padding-left: 6vw;
  padding-right: 6vw;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template: 1fr / 1fr 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`

const MobileCarousel = styled.div`
  width: 100%;
  padding-top: 12vh;
  box-sizing: border-box;
  position: relative;
  & > *:nth-child(2) {
    width: 100%;
    box-sizing: border-box;
    padding-left: 20vw;
    padding-right: 20vw;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

const IntroPhoto = styled.img`
  max-width: 100%;
`

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <IntroPhotoLayout>{children}</IntroPhotoLayout>
      <Mobile>{children}</Mobile>
    </React.Fragment>
  )
}

const Arrow = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background: red;
  cursor: pointer;
  top: calc(50% + 25px);
  bottom: calc(50% - 25px);
  display: ${({ isVisible }) => (isVisible ? "initial" : "none")};
`

const RightArrow = styled(Arrow)`
  right: 0;
`

const LeftArrow = styled(Arrow)`
  left: 0;
`

const Mobile = ({ children }) => {
  const [activeIndex, setIndex] = useState(0)
  const count = useMemo(() => React.Children.count(children), [children])
  return (
    <MobileCarousel>
      <LeftArrow
        isVisible={activeIndex > 0}
        onClick={() => setIndex(prevIndex => prevIndex - 1)}
      />
      {children[activeIndex]}
      <RightArrow
        isVisible={activeIndex < count - 1}
        onClick={() => setIndex(prevIndex => prevIndex + 1)}
      />
    </MobileCarousel>
  )
}

export default () => {
  return (
    <Layout>
      <IntroPhoto src="https://dl.airtable.com/.attachmentThumbnails/bb2033f31053c832bb69830b7b12c299/b31e6acd" />
      <IntroPhoto src="https://dl.airtable.com/.attachmentThumbnails/c9087db6876ed94579b2012786e927a4/4b58cc18" />
      <IntroPhoto src="https://dl.airtable.com/.attachmentThumbnails/482fc59b24493b72817db8e519c54c57/83a9bbd8" />
    </Layout>
  )
}

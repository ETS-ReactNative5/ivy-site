import React from "react"
import Layout from "src/components/layout"
import IntroPhotos from "src/components/unum/intro-photos"
import IntroParagraph from "src/components/unum/intro-paragraph"
import AppStore from "src/components/unum/app-store"
import AppStoreCarousel from "src/components/unum/app-store-carousel"
import ExportRedesignIntro from "src/components/unum/export-redesign-intro"
import PhotoFilters from "src/components/unum/photo-filters"
import StoryTemplates from "src/components/unum/story-templates"
import StoryTemplateCollections from "src/components/unum/story-template-collections"
import styled from "styled-components"

const VerticalLayout = styled.div`
  & > * {
    padding-top: 15vh !important;
    padding-bottom: 15vh !important;
  }
`

export default () => {
  return (
    <Layout>
      <VerticalLayout>
        <IntroPhotos />
        <IntroParagraph />
        <AppStore />
        <AppStoreCarousel />
        <ExportRedesignIntro />
        <PhotoFilters />
        <StoryTemplates />
        <StoryTemplateCollections />
      </VerticalLayout>
    </Layout>
  )
}

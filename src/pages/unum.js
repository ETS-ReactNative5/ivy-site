import React from "react"
import Layout from "src/components/layout"
import IntroPhotos from "src/components/unum/intro-photos"
import IntroParagraph from "src/components/unum/intro-paragraph"
import AppStore from "src/components/unum/app-store"
import AppStoreCarousel from "src/components/unum/app-store-carousel"

export default () => {
  return (
    <Layout>
      <IntroPhotos />
      <IntroParagraph />
      <AppStore />
      <AppStoreCarousel />
    </Layout>
  )
}

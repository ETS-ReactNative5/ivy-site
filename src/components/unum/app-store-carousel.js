import React from "react"
import styled from "styled-components"

const Layout = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  justify-items: center;
  grid-template: max-content / repeat(5, 1fr);
  grid-gap: 10px;
  padding: 10vh 6vw;
  @media (max-width: 768px) {
    grid-template: max-content / repeat(5, 60%);
    overflow: auto;
  }
`

const Image = styled.img`
  max-width: 100%;
`

export default () => (
  <Layout>
    <Image src="https://dl.airtable.com/.attachmentThumbnails/f950f00be390c3005623b85c916de9bd/261d3926" />
    <Image src="https://dl.airtable.com/.attachmentThumbnails/58101a432c8904706f7f8a0877d0f338/959d732f" />
    <Image src="https://dl.airtable.com/.attachmentThumbnails/bbe1edd7d64ca39e9957c8af01cdd3ab/a435969e" />
    <Image src="https://dl.airtable.com/.attachmentThumbnails/732404723f096211c44cc0d081c34f8c/978c6b7d" />
    <Image src="https://dl.airtable.com/.attachmentThumbnails/55c792b3b7907d9ba7647acce1feb06c/979d216a" />
  </Layout>
)

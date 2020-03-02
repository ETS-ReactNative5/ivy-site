import React from "react"
import styled from "styled-components"
import Nav from "src/components/nav"
import "./index.css"

const MasterContainer = styled.div`
  width: 100vw;
  box-sizing: border-box;
  min-height: 100vh;
  background: lightgreen;
  display: grid;
  grid-template: 1fr / 200px 1fr;
  @media (max-width: 768px) {
    grid-template: max-content 1fr / 1fr;
  }
`

export default ({ children }) => (
  <MasterContainer>
    <Nav />
    <div>{children}</div>
  </MasterContainer>
)

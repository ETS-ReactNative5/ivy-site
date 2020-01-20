import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allAirtable {
      nodes {
        data {
          name
          photo {
            thumbnails {
              full {
                height
                url
                width
              }
              small {
                height
                url
                width
              }
              large {
                height
                url
                width
              }
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  return (
    <React.Fragment>
      {data.allAirtable.nodes.map(node => (
        <div>
          <h1>{node.data.name}</h1>
          <img src={node.data.photo[0].thumbnails.small.url} />
        </div>
      ))}
    </React.Fragment>
  )
}

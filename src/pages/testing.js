import React from 'react'
import { graphql } from 'gatsby'

const Testing = (props) => {
    console.log(props)
  return (
    <h2>testing</h2>
  )
}

export const data = graphql` 
query {
    site {
        siteMetadata {
          title
          author
          description
          person {
            age
            name
          }
          simpleData
        }
      }
}`
export default Testing
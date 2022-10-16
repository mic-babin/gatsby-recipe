import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
        query hello{
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
        }
       
    `

const FetchData = () => {
    const data = useStaticQuery(getData)
    console.log(data)
  return (
    <h1>Hello From FetchData1</h1>
  )
}

export default FetchData
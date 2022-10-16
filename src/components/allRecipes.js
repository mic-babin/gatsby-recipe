import React from 'react'
import TagsList from './tagsList'
import RecipesList from './recipesList'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
query {
  allContentfulRecipes(sort: {fields: title, order: ASC}) {
    nodes {
      prepTime
      cookTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      title
      id
      content {
        tags
      }
    }
  }
}
`

const AllRecipes = () => {
    const {allContentfulRecipes: { nodes: recipes}} = useStaticQuery(query)

  return (
    <section className="recipes-container">
        <TagsList recipes={recipes} />
        <RecipesList recipes={recipes}/>
    </section>    
   
  )
}

export default AllRecipes
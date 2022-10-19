import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import RecipesList from "../components/recipesList"
import SEO from "../components/SEO"

const featuredRecipes = graphql`
  {
    allContentfulRecipes(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        title
        id
      }
    }
  }
`

const About = () => {
  const {allContentfulRecipes: { nodes: recipes}} = useStaticQuery(featuredRecipes)
  return (
    <Layout>
      <SEO title='About' />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.</p>
            <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
            <Link to='/contact' className="btn">
              Contact
            </Link>
          </article>
          <article>
            <StaticImage src='../assets/images/about.jpeg' alt="Person pouring salt in bowl" className="about-img" placeholder="blurred"/>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesomesauce!</h5>
          <RecipesList recipes={recipes}/>
        </section>
      </main>
    </Layout>
  )
}



export default About

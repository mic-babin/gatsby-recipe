import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import RecipesList from "../components/recipesList"

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

const Contact = () => {
  const {allContentfulRecipes: { nodes: recipes}} = useStaticQuery(featuredRecipes)
  return (
    <Layout>
      <main className="page">
          <section className="contact-page">
          <article className="contact-info">
            <h1>Want To Get In Touch?</h1>
            <p>Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.</p>
            <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
            <p>Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke.</p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                  <label htmlFor='name'>Your Name</label>
                  <input type="text" name='name' id='name' />
              </div>
              <div className="form-row">
                  <label htmlFor='email'>Your Email</label>
                  <input type="text" name='email' id='email' />
              </div>
              <div className="form-row">
                  <label htmlFor='name'>Your Name</label>
                  <textarea name='message' id='message' />
              </div>
              <button type="submit" className='btn block'>Submit</button>
            </form>
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

export default Contact

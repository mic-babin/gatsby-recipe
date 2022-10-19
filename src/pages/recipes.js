import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/allRecipes"
import SEO from "../components/SEO"

const Recipes = () => {
  return (
    <Layout>
      <SEO title='Recipes' />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes

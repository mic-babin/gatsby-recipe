import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/allRecipes"

const Recipes = () => {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes

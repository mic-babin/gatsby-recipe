import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

const RecipesList = ({recipes=[]}) => {

  return (
    <div className='recipes-list'>{
        recipes.map((recipe) => {
            const {id, title, image, prepTime, cookTime} = recipe
            const pathToImg = getImage(image)
            const slug = slugify(title, {lower:true})
            return (
                <Link to={`/${slug}`} key={id} className='recipe'>
                    <GatsbyImage image={pathToImg} className="recipe-img" alt='title'/>
                    <h5>{title}</h5>
                    <p>Prep: {prepTime} | Cook: {cookTime}</p>
                </Link>
            )
        })
    }</div>
  )
}

export default RecipesList
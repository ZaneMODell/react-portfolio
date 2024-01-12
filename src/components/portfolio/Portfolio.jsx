import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Pizzakai.png'
import IMG2 from '../../assets/Ragnaracket.png'
import IMG3 from '../../assets/Fading Memories Marcia.png'
import IMG4 from '../../assets/MOD.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'PizzaKai',
    itch_link: 'https://elexmccoy.itch.io/pizzakai',
    github_link: 'https://github.com/ZaneMODell/Pizzakai'

  },

  {
    id: 2,
    image: IMG2,
    title: 'RagnaRacket',
    itch_link: 'https://zaneodell.itch.io/ragnaracket',
    github_link: 'https://github.com/ZaneMODell/ragnaracket-main'

  },

  {
    id: 3,
    image: IMG3,
    title: 'Fading Memories',
    itch_link: 'https://luongvy.itch.io/fading-memories',
    github_link: 'https://drive.google.com/file/d/18lYDTiglwWqyxPS8yhEW9-DcoSDe0nWT/view?usp=sharing'

  },

  {
    id: 4,
    image: IMG4,
    title: 'Merchant of Death',
    itch_link: 'https://elimcardle.itch.io/merchant-of-death',
    github_link: 'https://github.com/ZaneMODell/Merchant-of-Death'

  },


]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Projects</h2>
      <h3>I want to make special experiences just like these for hundreds of other players around the world!</h3>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, itch_link, github_link}) => {
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={image} alt={title} id= {title.split(" ").join("")}/>
          </div>
          <h3>{title}</h3>
          <div id ='button_container' className="portfolio__item-cta"> 
            <a href={itch_link} id='download_button' className='btn' target='_blank' rel="noreferrer">Itch.io Page</a>
            <a href={github_link} id='source_code_button' className='btn btn-primary' target='_blank' rel="noreferrer">Source Files</a>
          </div>
        </article>
            )
          })
        }      
        
      </div>
      </section>
  )
}

export default Portfolio
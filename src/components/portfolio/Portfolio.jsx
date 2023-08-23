import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/PeppyExplosion.png'
import IMG2 from '../../assets/RagnaracketKronas.png'
import IMG3 from '../../assets/Fading Memories Marcia.png'
import IMG4 from '../../assets/MOD.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'PizzaKai',
    link: 'https://elexmccoy.itch.io/pizzakai',
    demo: 'https://youtu.be/AzE8EMG_z8g'

  },

  {
    id: 2,
    image: IMG2,
    title: 'RagnaRacket',
    link: 'https://zaneodell.itch.io/ragnaracket',
    demo: 'https://youtu.be/TA4FDh-XBY0'

  },

  {
    id: 3,
    image: IMG3,
    title: 'Fading Memories',
    link: 'https://luongvy.itch.io/fading-memories',
    demo: '#'

  },

  {
    id: 4,
    image: IMG4,
    title: 'Merchant of Death',
    link: 'https://elimcardle.itch.io/merchant-of-death',
    demo: 'https://youtu.be/U0PUBlPPHzM'

  },


]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5></h5>
      <h2></h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, link, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={image} alt={title} id= {title.split(" ").join("")}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={link} className='btn' target='_blank'>Project Link</a>
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
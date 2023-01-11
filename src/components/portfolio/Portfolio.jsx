import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/MOD.png'
import IMG2 from '../../assets/breakandenter.jpg'
import IMG3 from '../../assets/graph.png'
import IMG4 from '../../assets/CanadianExperience.png'
import IMG5 from '../../assets/3DFPS.png'
import IMG6 from '../../assets/avl tree.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Merchant of Death',
    link: 'https://elimcardle.itch.io/merchant-of-death',
    demo: 'https://youtu.be/U0PUBlPPHzM'

  },

  {
    id: 2,
    image: IMG2,
    title: 'Break and Enter',
    link: 'https://viktor-filipovich.itch.io/break-and-enter',
    demo: 'https://youtu.be/TA4FDh-XBY0'

  },

  {
    id: 3,
    image: IMG3,
    title: 'Graph Project',
    link: 'https://github.com/ZaneMODell/Project10',
    demo: '#'

  },

  {
    id: 4,
    image: IMG4,
    title: "Harold's Magical Machines",
    link: 'https://github.com',
    demo: 'https://youtube.com'

  },

  {
    id: 5,
    image: IMG5,
    title: '3D FPS Project',
    link: 'https://zaneodell.itch.io/3d-fps-final-submission',
    demo: 'https://youtube.com'

  },

  {
    id: 6,
    image: IMG6,
    title: 'AVL Tree Project',
    link: 'https://github.com',
    demo: '#'

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
          <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={link} className='btn' target='_blank'>Project Link</a>
            {/* <a href={demo} className='btn btn-primary' target='_blank'>Project Demo</a> */}
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
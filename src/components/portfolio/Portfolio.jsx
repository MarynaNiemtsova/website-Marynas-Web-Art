import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Basarab Painters',
    github: 'https://github.com/MarynaNiemtsova/website-Basarab-painters',
    demo: 'http://www.basarabpainters.co.nz/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Marynas Web Art',
    github: 'https://github.com/MarynaNiemtsova/website-Marynas-Web-Art',
    demo: 'https://marynaswebart.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Reservationizr',
    github: 'https://github.com/MarynaNiemtsova/Project---Reservationizr',
    demo: 'https://reservation-restaurants.onrender.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'The Plants',
    github: 'https://github.com/MarynaNiemtsova/Project--Online-shop',
    demo: 'https://subtle-palmier-5aa8f9.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Cat Couture',
    github: 'https://github.com/MarynaNiemtsova/Project--Cat-Couture',
    demo: 'https://cat-couture-static-bdx0.onrender.com/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2 className='text'>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article  key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
         <div className="portfolio__item-cta"> <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a></div>
        </article>
            )
          })
        }
       
        
      </div>
    </section>
  )
}

export default Portfolio
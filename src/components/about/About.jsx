import React from 'react'
import './about.css'
import ME from '../../assets/girl on laptop.png'
import {BsPatchCheckFill} from 'react-icons/bs'


const About = () => {
    return (
      <section id='about'>
       <h5>Get To Know</h5>
       <h2 className='text'>About Me</h2>

<div className='container about__container'>
<div className='about__me'>
  <div className='about__me-image'>
    <img src={ME} alt="web developer"/>
  </div>
</div>
<div className='about__content'>

    <article className='about__card'>
     
      <small>I'm a Front-End Developer and I make awesome things for awesome people!
 Well organised person, problem solver, independent employee with high attention to detail. Interested in entire front-end spectrum and working on ambitious projects with positive people.</small>
    </article>
    
    
 

<div className='btn__contact'>
<a href="#contact" className='btn btn-primary'>Let's Talk</a></div>
</div>

     </div>
     <div className='experience'>
  <h2>Here are a few technologies I’ve been working with recently:</h2>
</div>
<div className='container experience__container'>
        <div className="experience__frontend">
      
        <div className="experience__content">
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'  />
          <div>
          <h4>HTML</h4>
       
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>CSS</h4>
         
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>JavaScript</h4>
        
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>React</h4>
         
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>SASS</h4>
       
          </div>
          </article>
       
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Node JS</h4>
        
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>MongoDB</h4>
       
          </div>
          </article>
          
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>SQL</h4>
         
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Express</h4>
         
          </div>
          </article>
         
        </div>
        </div>
      </div>
      
        
    
  
  
       </section>
    )
  }
export default About
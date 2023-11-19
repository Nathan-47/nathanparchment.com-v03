import {stagger, useAnimate, usePresence } from "framer-motion";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import card1 from '../images/bhamimpact_thumbnail.png';
import card2 from '../images/marvelapi_thumbnail.png';
import card3 from '../images/portfolio.v02_thumbnail.png';
import card4 from '../images/clippedit-thumbnail.png';

const Projects = () => {

  // animate on view hook
const [isPresent, safeToRemove] = usePresence()
const [scope, animate] = useAnimate()

useEffect (() => {
    if(isPresent) {
      const enterAnimation = async () => {
      await animate(
        scope.current,
        { opacity: [0, 7]},
        { duration: 0.9, delay: stagger(0.3, {ease: "easeInOut"})},
      )
    }
    enterAnimation()
  
  } else {
    const exitAnimation = async () => {
      await animate(scope.current, { opacity: 0 })
      safeToRemove()
  }
  exitAnimation()
}
})
  // animate on view hook

    return (
        <div ref={scope}
        className='width-body'>
            <div className='about-heading'>
              <p>| Projects</p>
            </div>
            <div className="row content-center">
                <div className="col-3">
                    <a href="/marvelapi"><div className="card" aria-label="Birmingham Impact Football Club project card">
                       
                       <div className="card-image">
                                <img src={card1} alt="Birmingham Impact project"></img>
                            </div>

                        <div className="card-content">
                            <p id="card-title">Birmingham Impact Footbal Club</p>
                            <p>A responsive demo football site created for my local football team Birmingham Impact Football Club.</p>
                            <br />
                            <a class="view-btn" href="/marvelapi">View Project</a>
                        </div>
                    </div></a>
                </div>
{/* end of card */}

<div className="col-3">
                    <Link to="/marvelapi"><div className="card">

                            <div className="card-image">
                                <img src={card2} alt="marvel api project"></img>
                            </div>

                        <div className="card-content">
                            <p id="card-title">Marvel Character Picker</p>
                            <p>A Marvel character search filter using API to fetch an array of characters with a 1v1 RPG style card game also. </p>
                            <br />
                            <a class="view-btn" href="/marvelapi">View Project</a>
                        </div>
                    </div></Link>
                </div>
{/* end of card */}

<div className="col-3">
                    <a href="/marvelapi"><div className="card">
                            <div className="card-image">
                                <img src={card3} alt="portfolio v.02 project"></img>
                            </div>

                        <div className="card-content">
                            <p id="card-title">Portfolio v.02</p>
                            <p>The aim of my portfolio is to display all my projects built over the years whilst being more clearer than my last portfolio for users.</p>
                            <br />
                            <a class="view-btn" href="/marvelapi">View Project</a>
                        </div>
                    </div></a>
                </div>
{/* end of card */}

<div className="col-3">
                    <a href="/marvelapi"><div className="card">
                            <div className="card-image">
                                <img src={card4} alt="clippedit project"></img>
                            </div>

                        <div className="card-content">
                            <p id="card-title">Clipped It</p>
                            <p>The main focus of this project was to create a login system that works and alerts or backs users out when input fields are wrongly filled in. </p>
                            <br />
                            <a class="view-btn" href="/marvelapi">View Project</a>
                        </div>
                    </div></a>
                </div>
                
{/* end of card */}


            </div>
            <br />
            <br />
            </div>
    )
}

export default Projects;

import {stagger, useAnimate, usePresence } from "framer-motion";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import card1 from '../images/marvel/marvelapi_thumbnail.png';
import card2 from '../images/bifc/bhamimpact_thumbnail.png';
import card3 from '../images/clippedit/clippedit-thumbnail.png';

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
            <div className='project-heading'>
              <p>| Projects</p>
            </div>

<div className="card-body">

<div className="col">
                    <Link to="/marvelapi"><div className="card">

                                <img className="card-image" src={card1} alt="marvel project thumbnail" tabIndex={0}></img>

                        <div className="card-content">
                            <p id="card-title">Marvel Alias Search</p>
                            <p>A Marvel character search filter using API to fetch an array of characters with a 1v1 RPG style card game also. </p>
                            <br />
                        </div>
                    </div></Link>
                </div>
{/* end of card */}


<div className="col">
                    <Link to="/impact"><div className="card">

                                <img className="card-image" src={card2} alt="birmingham impact fc project" tabIndex={0}></img>

                        <div className="card-content">
                            <p id="card-title">Birmingham Impact FC Website v.02</p>
                            <p>A user friendly website for a local football team that provides access to training locations, team rules, and team history.</p>
                            <br />
                        </div>
                    </div></Link>
                </div>
{/* end of card */}

<div className="col">
                    <Link to="/clippedit"><div className="card">

                                <img className="card-image" src={card3} alt="clippedit project" tabIndex={0}></img>

                        <div className="card-content">
                            <p id="card-title">Clipped IT</p>
                            <p>A PHP login system that allows users to sign up and create an account, with their details being stored in a local xampp database for authentication.</p>
                            <br />
                        </div>
                    </div></Link>
                </div> 
                
{/* end of card */}
            <br />
            <br />

            </div>
            </div>
    )
}

export default Projects;
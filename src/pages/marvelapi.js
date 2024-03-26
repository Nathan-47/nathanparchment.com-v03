import {stagger, useAnimate, usePresence } from "framer-motion";
import { useEffect } from 'react';
import githubLogo from '../images/github.svg';
import marvelshot1 from '../images/marvel/marvel_screenshot1.png';
import marvelshot2 from '../images/marvel/marvel_screenshot2.png';

const Marvelapi = () => {

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
            <div className='project-heading-default'>
              <p>Marvel Selector</p>
            </div>
            <div className="project-body">
            <div className="grid grid-cols-1 gap-12">

              {/* demo button */}
              <div className="button-section">
            <a href="https://brave-jones-f1193a.netlify.app/" target="_blank" rel="noreferrer"><div className="rounded-md bg-[#d3d3d3] px-8 py-2 m-4 text-#1d1d1d shadow-sm hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-50" id="demo-btn"
              >View Demo
                </div>
                </a>
                </div>
                {/* demo button */}

                <div className="col-sm-6">
                    <p className="project-content my-8">This project is a fully working and responsive football club website made for the Birmingham Impact Football Club that play in various leagues and tournaments across the Central Warwickshire league footballing association. 
                        <br /><br />
                        As stated, before the main focus was to create a site that is usable and interactive on all devices as the old site was not. Nowadays mobile phones are being used more and more as they are more accessible thus the focus of attention being on the responsiveness of mobile /tablet devices and user experience.
                        </p>
                </div>
            </div>
            <div className="tool-section">
            <img className="github-logo" src={githubLogo} alt="github"></img>
      <div id="tool-tags" className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        React
      </div>
      <div id="tool-tags" className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        API
      </div>
      <div id="tool-tags" className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        JavaScript
      </div>
      <div id="tool-tags" className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        SCSS
      </div>
            </div>
            </div>
            
            {/* project screenshot section */}
            <div id="screenshots" className="flex justify-center">
              <img src={marvelshot1} width="900px" height="300px" alt="screenshot from marvel project showing the marvel character venom"></img>
            </div>
            <div id="screenshots" className="flex justify-center">
              <img src={marvelshot2} width="900px" height="300px" alt="screenshot from marvel project showing the marvel character venom"></img>
            </div>
            {/* project screenshot section */}
            <br />
            <br />
            </div>
    )
}

export default Marvelapi;
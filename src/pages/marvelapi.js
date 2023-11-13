import {stagger, useAnimate, usePresence } from "framer-motion";
import { useEffect } from 'react';
import githubLogo from '../images/github.svg';

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
            <div className='project-heading'>
              <p>Marvel Selector</p>
            </div>
            <div className="project-body">
            <div className="grid grid-cols-2 gap-12">

            <a href="https://brave-jones-f1193a.netlify.app/" target="_blank"><div className="rounded-md bg-[#d3d3d3] px-1.5 py-2 text-#1d1d1d shadow-sm hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-50" id="demo-btn"
              >View Demo
                </div>
                </a>

                <div className="lg:col-end-7 col-span-4 sm:col-end-6 col-span-5">
                    <p className="project-content">This project is a fully working and responsive football club website made for the Birmingham Impact Football Club that play in various leagues and tournaments across the Central Warwickshire league footballing association. 
                        <br /><br />
                        As stated, before the main focus was to create a site that is usable and interactive on all devices as the old site was not. Nowadays mobile phones are being used more and more as they are more accessible thus the focus of attention being on the responsiveness of mobile /tablet devices and user experience.
                        </p>
                </div>
            </div>
            <div className="tool-section">
            <img className="github-logo" src={githubLogo}></img>
      <div id="tool-tags" className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/10">
        React
      </div>
      <div id="tool-tags" className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
        API
      </div>
      <div id="tool-tags" className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        JavaScript
      </div>
      <div id="tool-tags" className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        SCSS
      </div>
            </div>
            </div>
            <br />
            <br />
            </div>
    )
}

export default Marvelapi;
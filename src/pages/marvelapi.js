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


  //When page is selected window is rendered to the top of page
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, localStorage.getItem('position')), 0);
  }, []);

  
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
            <a href="https://marvelalias.netlify.app" target="_blank" rel="noreferrer"><div className="rounded-md bg-[#d3d3d3] px-8 py-2 m-4 text-#1d1d1d shadow-sm hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-50" id="demo-btn" aria-labelledby="button"
              >View Demo
                </div>
                </a>
                </div>
                {/* demo button */}

                <div className="col-sm-6">
                    <p className="project-content my-8"> 
                    This project allows users to search for a marvel character within the marvel database via Marvel.com and return the character back. The character will be displayed showing their name, bio and image via the API parameters whilst being complemented with minimal styling.
                        <br /><br />
                        I created this to get an understanding of how react works and get an insight to using hooks and event handlers to return arrays via marvel API.
                        </p>
                </div>
            </div>
            <div className="tool-section">
            <a href="https://github.com/Nathan-47/marvel-alias-search"><img className="github-logo" src={githubLogo} alt="link to marvel alias project code" tabIndex={0}></img></a>
            
      <div id="tool-tags" tabIndex={0} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        React
      </div>
      <div id="tool-tags" tabIndex={0} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        API
      </div>
      <div id="tool-tags" tabIndex={0} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        JavaScript
      </div>
      <div id="tool-tags" tabIndex={0} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        SCSS
      </div>
            </div>
            </div>
            
            {/* project screenshot section */}
            <div id="screenshots" tabIndex={0} className="flex justify-center">
              // <a href={marvelshot1}>
              <img src={marvelshot1} width="900px" height="300px" alt="screenshot from marvel project showing the marvel character venom"></img>
              // </a>
            </div>
            <div id="screenshots" tabIndex={0} className="flex justify-center">
            // <a href={marvelshot2}>
              <img src={marvelshot2} width="900px" height="300px" alt="screenshot from marvel project showing the marvel character venom"></img>
              // </a>
            </div>
            {/* project screenshot section */}
            <br />
            <br />
            </div>
    )
}

export default Marvelapi;

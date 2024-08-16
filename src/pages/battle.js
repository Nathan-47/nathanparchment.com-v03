import {stagger, useAnimate, usePresence } from "framer-motion";
import { useEffect } from 'react';
import githubLogo from '../images/github.svg';
import battlescreenshot from '../images/battlejs/battlescreenshot1.png';

const Battlejs = () => {

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
        className="width-body">
            <div className='project-heading-default'>
            <p>Battle JS</p>
            </div>
            <div className="project-body">
            <div className="grid grid-cols-1 gap-12">

                
              {/* demo button */}
              <div className="button-section">
            <a href="https://nathan-47.github.io/marvel-vs/" target="_blank" rel="noreferrer"><div className="rounded-md bg-[#d3d3d3] px-8 py-2 m-4 text-#1d1d1d shadow-sm hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-50" id="demo-btn" aria-labelledby="button"
              >View Demo
                </div>
                </a>
                </div>
                {/* demo button */}

                <div className="col-sm-6">
                    <p className="project-content my-8">This project is a click battle game that allows users to battle against various Marvel enemies. Users can also use an infinity stone which can either be a strength or a hindrance. The technology used to create this project was HTML, JavaScript and CSS with Bootstrap to aid responsive aspect of game too.
                        <br /><br />
                    For future I want to add a block, run and more items to use in a fight to stay more true to the Pokémon games. Coding wise I could make switch cases more cleaner than I have in this project code.
                        </p>
                </div>
            </div>
            <div className="tool-section">
            <a href="https://github.com/Nathan-47/marvel-vs"><img className="github-logo" src={githubLogo} alt="link to clippedit project code" tabIndex={0}></img></a>
            
      <div id="tool-tags" tabIndex={0} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        JavaScript
      </div>
      <div id="tool-tags" tabIndex={0} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        Bootstrap
      </div>
      <div id="tool-tags" tabIndex={0} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        Click-game
      </div>
            </div>
            </div>

            {/* project screenshot section */}
            <div id="screenshots" tabIndex={0} className="flex justify-center">
            <img src={battlescreenshot} width="900px" height="300px" alt="screenshot from marvel project showing the marvel character venom"></img>
            </div>
            {/* project screenshot section */}
            <br />
            <br />
        </div>
    )
};

export default Battlejs;
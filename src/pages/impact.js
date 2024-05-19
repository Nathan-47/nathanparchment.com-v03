import {stagger, useAnimate, usePresence } from "framer-motion";
import { useEffect } from 'react';
import githubLogo from '../images/github.svg';
import impactshot1 from '../images/bifc/impact_screenshot1.png';
import impactshot2 from '../images/bifc/impact_screenshot2.png';
import impactshot3 from '../images/bifc/impact_screenshot3.png';

const Impact = () => {

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
              <p>Birmingham Impact FC Website v.02</p>
            </div>
            <div className="project-body">
            <div className="grid grid-cols-1 gap-12">

                              {/* demo button */}
              <div className="button-section">
            <a href="https://b-impactfc.netlify.app" target="_blank" rel="noreferrer"><div className="rounded-md bg-[#d3d3d3] px-8 py-2 m-4 text-#1d1d1d shadow-sm hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-50" id="demo-btn" aria-labelledby="button"
              >View Demo
                </div>
                </a>
                </div>
                {/* demo button */}

                <div className="col-sm-6">
                    <p className="project-content my-8">I have created a football website for a local team designed for all age groups, featuring a user-friendly interface that makes it easy to navigate. Stay up to date with the team training locations, team’s rules, team legacy and more. 
                        <br /><br />
                        Building a full website gave a new insight on how to approach a task like this. I have used third party forms being built in and keeping data safe.
                        </p>
                </div>
            </div>
            <div className="tool-section">
            <a href="https://github.com/Nathan-47/birminghamImpactfc-v02"><img className="github-logo" src={githubLogo} alt="link to birmingham impact footall club project code" tabIndex={0}></img></a>
            
      <div id="tool-tags" tabIndex={0} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        React
      </div>
      <div id="tool-tags" tabIndex={0} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        Sytled-components
      </div>
      <div id="tool-tags" tabIndex={0} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        SCSS
      </div>
            </div>
            </div>
            
            {/* project screenshot section */}
            <div id="screenshots" tabIndex={0} className="flex justify-center">
              // <a href={impactshot1}>
              <img src={impactshot1} width="900px" height="300px" alt="screenshot from marvel project showing the marvel character venom"></img>
              // </a>
            </div>

            <div id="screenshots" tabIndex={0} className="flex justify-center">
            <a href={impactshot2}>
            <img src={impactshot2} width="900px" height="300px" alt="screenshot from marvel project showing the marvel character venom"></img>
            </a>
            </div>

            <div id="screenshots" tabIndex={0} className="flex justify-center">
            // <a href={impactshot3}>
            <img src={impactshot3} width="900px" height="300px" alt="screenshot from marvel project showing the marvel character venom"></img>
            // </a>
            </div>
            {/* project screenshot section */}
            <br />
            <br />
            </div>
    )
}

export default Impact;

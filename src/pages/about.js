import image1 from '../images/about_me.jpg';
import arrow from '../images/arrow-right.png';

import {stagger, useAnimate, usePresence } from "framer-motion";
import { useEffect } from 'react';


const About = () => {

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
        className='bg-white'>
            <div className='about-heading'>
              <p>| About</p>
            </div>
            <div class="grid grid-flow-col grid-rows-1 gap--40 flex justify-evenly">
  <div class='rotate-0'>
    <img className="imagemiddle" src={image1} alt="image of nathan" width={200} loading="lazy" />
  </div>
      </div>

      <p className="heading-about">Nathan Parchment</p>
      <p className="heading-about-two">I code and design.</p>

      <p id="text-about">Hi <span>&#9995;&#127998;</span> 
        I’m a web developer currently working at BCUSU, An amazing independent charity, that gives students’ their best experience at University.
      <br /><br />

      The main focus is to build and design accessible, unique and smooth student digital experiences, which I enjoy!
      <br /><br />

      Away from the desk, I am reading various books, and playing tactical games like Football Manager / God of War and going gym to Powerlift.
      <br /><br />

      <p><a className='tool-link1' href='https://github.com/Nathan-47'>Github<svg className='embed' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a>  <span></span> 
      
      <a className='tool-link2' href='https://www.linkedin.com/in/nathanparchment/'>LinkedIn<svg className='embed' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a>
      </p>
      </p>
      <br />
      
      
      {/* bento grid boxes */}
        <div className="grid grid-cols-1 gap-1 my-1">
          <div className="tools-box">
            <p className='tools-heading'>Latest tech I've used</p>

            <ul id="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-6 xl:col-span-1">
            <li>
              <div className="flex items-center gap-x-3">
                <img className="h-6 w-6 rounded-full" src={arrow} alt="arrow-right" />
                <div>
                  <p className="text-sm font-semibold leading-6 text-gray-50">React.js</p>
                </div>
              </div>

               {/* start tech row 1 */}
            </li>
            <li>
              <div className="flex items-center gap-x-3">
                <img className="h-6 w-6 rounded-full" src={arrow} alt="arrow-right" />
                <div>
                  <p className="text-sm font-semibold leading-6 text-gray-50">JavaScript</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-3">
                <img className="h-6 h-6 rounded-full" src={arrow} alt="arrow-right" />
                <div>
                  <p className="text-sm font-semibold leading-6 text-gray-50">Wordpress</p>
                </div>
              </div>
            </li>
            {/* end tech row 1 */}

            {/* start tech row 2 */}
            <li>
              <div className="flex items-center gap-x-3">
                <img className="h-6 h-6 rounded-full" src={arrow} alt="arrow-right" />
                <div>
                  <p className="text-sm font-semibold leading-6 text-gray-50">Shopify</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-3">
                <img className="h-6 h-6 rounded-full" src={arrow} alt="arrow-right" />
                <div>
                  <p className="text-sm font-semibold leading-6 text-gray-50">MSL(CMS)</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-3">
                <img className="h-6 h-6 rounded-full" src={arrow} alt="arrow-right" />
                <div>
                  <p className="text-sm font-semibold leading-6 text-gray-50">Github</p>
                </div>
              </div>
            </li>
             {/* end tech row 2 */}

        </ul>
              </div>
              </div>
      </div>
    )
}

export default About;
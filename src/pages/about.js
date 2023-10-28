import image1 from '../images/nathan_img_3.jpg';
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
        { opacity: [0, 3]},
        { duration: 0.7, delay: stagger(0.5, {ease: "easeInOut"})},
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
              <p>| About</p>
            </div>
            <div class="grid grid-flow-col grid-rows-1 gap--40 flex justify-evenly">
            {/* <div>
    <img className="imageme" src={image1} alt="" width={200} loading="lazy" />
  </div> */}
  <div class='rotate-0'>
    <img className="imagemiddle" src={image1} alt="" width={200} loading="lazy" />
  </div>
  {/* <div>
    <img className="imageright" src={image2} alt="" width={350}loading="lazy" />
  </div> */}
      </div>

      <p id="text-about">Hi <span>&#9995;&#127998;</span> I’m Nathan. 
      <br /><br />
      I’m a web developer currently working at <a className='a-link' href='https://www.bcusu.com/' target='blank'>BCUSU</a> , An amazing independent charity, that gives students’ their best experience at University. 
      <br /><br />

      The main focus is to build and design accessible, unique and smooth student digital experiences, to generate more eyes on our website. I also take care of the back end such as overseeing data, handling logging issues and using GA4 analytics to show site performances plus more. 
      <br /><br />

      When the coding stops, I’m either powerlifting, playing football  or chilled out playing video games.
      <br /><br />
      
      Latest tech I’ve used recently;</p>
      <br />

      <div className="bg-white py-6 sm:py-10">
      <div className="mx-auto grid max-w-3xl gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-3">
        {/* <div className="max-w-2xl">
        </div> */}
        <ul id="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-3">
            <li>
              <div className="flex items-center gap-x-3">
                <img className="h-8 w-8 rounded-full" src={arrow} alt="" />
                <div>
                  <p className="text-sm font-semibold leading-6 text-gray-50">React.js</p>
                </div>
              </div>

               {/* start tech row 1 */}
            </li>
            <li>
              <div className="flex items-center gap-x-3">
                <img className="h-8 w-8 rounded-full" src={arrow} alt="" />
                <div>
                  <p className="text-sm font-semibold leading-6 text-gray-50">JavaScript</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-3">
                <img className="h-8 h-8 rounded-full" src={arrow} alt="" />
                <div>
                  <p className="text-sm font-semibold leading-6 text-gray-50">Wordpress</p>
                </div>
              </div>
            </li>
            {/* end tech row 1 */}

            {/* start tech row 2 */}
            <li>
              <div className="flex items-center gap-x-3">
                <img className="h-8 h-8 rounded-full" src={arrow} alt="" />
                <div>
                  <p className="text-sm font-semibold leading-6 text-gray-50">Shopify</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-3">
                <img className="h-8 h-8 rounded-full" src={arrow} alt="" />
                <div>
                  <p className="text-sm font-semibold leading-6 text-gray-50">MSL(CMS)</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-3">
                <img className="h-8 h-8 rounded-full" src={arrow} alt="" />
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

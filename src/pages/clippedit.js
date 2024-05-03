import {stagger, useAnimate, usePresence } from "framer-motion";
import { useEffect } from 'react';
import githubLogo from '../images/github.svg';
import clipvid1 from '../videos/clippedit-vid2.mp4';
import clipvid2 from '../videos/clippedit-vid3.mp4';
import clipvid3 from '../videos/clippedit-vid4.mp4';

const Clippedit = () => {

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
              <p>Clippedit</p>
            </div>
            <div className="project-body">
            <div className="grid grid-cols-1 gap-12">

                <div className="col-sm-6">
                    <p className="project-content my-8">A simple login system to show my work with PHP and local databases. Hosted via local server, this app allows users to sign up to create an account with details being stored in xampp database. 
                        <br /><br />
                        My goal for this project was to showcase and gain an ability to get up to date with how login systems are made and minor security methods that need to take place to keep users data safe.
                        </p>
                </div>
            </div>
            <div className="tool-section">
            <a href="https://github.com/Nathan-47/clippedit"><img className="github-logo" src={githubLogo} alt="link to clippedit project code" tabIndex={0}></img></a>
            
      <div id="tool-tags" tabIndex={0} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        PHP
      </div>
      <div id="tool-tags" tabIndex={0} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        Sketch-plugin
      </div>
      <div id="tool-tags" tabIndex={0} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-semibold text-gray-700 ring-1 ring-inset ring-gray-600/10">
        login-system
      </div>
            </div>
            </div>
            
            {/* project screenshot section */}
            <div id="screenshots" tabIndex={0} className="flex justify-center">
              <video src={clipvid1} type="video/mp4" width="900px" height="300px" controls="controls"></ video>
            </div>

            <div id="screenshots" tabIndex={0} className="flex justify-center">
            <video src={clipvid2} type="video/mp4" width="900px" height="300px" controls="controls"></ video>
            </div>

            <div id="screenshots" tabIndex={0} className="flex justify-center">
            <video src={clipvid3} type="video/mp4" width="900px" height="300px" controls="controls"></ video>
            </div>
            {/* project screenshot section */}
            <br />
            <br />
            </div>
    )
}

export default Clippedit;

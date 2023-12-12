import {stagger, useAnimate, usePresence } from "framer-motion";
import { useEffect } from 'react';


const Contact = () => {

    
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
            <p>| Contact</p>
            </div>
            <p id="contact-content">If you are here then that means I’m fit for the job right?... 
            <br /><br />
            
            Well unfortunately I’m not looking for anything at this moment in time but you can still drop me a message.

            <p className="hr-lines"><a href="mailto:nathan.parchment47@gmail.com&subject=Job Offer">Drop a message</a></p>
            </p>
        </div>
    );
}

export default Contact;
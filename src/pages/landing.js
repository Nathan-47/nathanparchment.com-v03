import card1 from '../images/marvelapi_thumbnail.png';
import { Link } from 'react-router-dom';


const Landing = () => {
    return (
      <div className="bg-white">
        <div className="grid grid-cols-1 gap-4 my-20">
          {/* hero section */}
          <p className="hero-intro">I'm a Coder that is massively passionate about building amazing things using code.</p>

          <p id="hero-job" className="mt-6 text-lg leading-8 text-gray-300">
          Currently a Web Developer @ <a className="a-link" href="https://www.bcusu.com/">BCUSU</a>
          </p>
        </div>
        {/* hero section */}
        

        {/* featured project section */}
        <div className="grid grid-cols-1 gap-4 my-20">
          <Link to="/marvelapi"><img className="feature-image" alt="marvel project" src={card1}></img>

          <p className="feature-caption text-zinc-400">Marvel Selector</p>
          <p className="feature-bio text-zinc-400">A Marvel character search filter using Marvel API.</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-20">
          <p className="heading-two">
            When I'm not working
          </p>
          {/* featured project section */}


          {/* bento grid boxes */}
          <div className="grid grid-cols-3 gap-4 my-10">
            <div className="learn-box" tabIndex={0}>
            <p className="work-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d189cf" d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"/></svg></p>
              Learning Typescript and refreshing myself with Databases to get back into working on back end projects.</div>

            <div className="game-box" tabIndex={0}>
              <p className="work-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#d9d9d9" d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/></svg></p>At this moment I’m reading ‘No Excuses: The power of self discipline’ by Brian Tracy</div>

              <div className="read-box" tabIndex={0}>
              <p className="work-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#fafafa" d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"/></svg></p>I am playing and enjoying the world of God of War and EA FC24. </div>
            </div>            
        </div>


        </div>
    )
}

export default Landing;
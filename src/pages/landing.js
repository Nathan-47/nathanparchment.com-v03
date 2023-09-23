import { NavLink } from "react-router-dom";

const Landing = () => {
    return (
      <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
  
        <div className="mx-auto max-w-2xl sm:py-10 lg:py-40 z-40">
          <div className="text-left">
            <h1 className="landing-heading">
              NATHAN PARCHMENT
            </h1>
            <p className="landing-sub-heading">
              I code and design
            </p>
            <div className="mt-10 flex gap-x-6">
              <NavLink to="projects">
              <div className="rounded-md bg-[#d3d3d3] px-3.5 py-2.5 text-#1d1d1d shadow-sm hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Projects
                </div>
                </NavLink>
                
                <NavLink to="contact">
              <div className="text-[#d3d3d3] px-3.5 py-2.5">
                Contact Me <span aria-hidden="true">→</span>
              </div>
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </div>

    )
}

export default Landing;
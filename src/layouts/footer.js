
const Footer = () => {
    return (
              <div className="bg-white">
                <div className="mx-auto max-w-3xl px-12 z-100 lg:px-60">
                  <div className="mx-auto mt-10 grid max-w-lg grid-cols-12 items-center gap-x-4 gap-y-12 
                  md:gap-x-none
                  sm:max-w-x1 sm:grid-cols-12 sm:gap-x-3 
                  lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  </div>
                </div>

                
        {/* blur background effect */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-100 transform-gpu overflow-y-hidden overflow-x-hidden blur-3xl sm:top-[calc(2% - -9rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+34rem)] sm:w-[16.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
              </div>
          
    )
}

export default Footer;
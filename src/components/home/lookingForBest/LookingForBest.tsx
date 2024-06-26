import React from "react";

const LookingForBest = () => {
  return (
    <div className="mx-auto mt-7 overflow-hidden">
      <div className="hero" style={{backgroundImage:'url(https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
          <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content py-10 px-6">
                <div className="w-full">
                  <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">
                    Looking for the Best Warehouse Services?
                  </h1>
                  <p className="mb-5">
                    We offer the best and most authentic warehouse services. Warehouzez The Digital Supply Chain is one of the greatest and most well-known logistics and warehousing service providers in the country.
                  </p>
                  <button className="text-sm bg-red text-white px-6 font-bold py-3 hover:bg-white hover:text-red rounded-full border-2 border-red">
                      Book a Warehouse
                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LookingForBest;
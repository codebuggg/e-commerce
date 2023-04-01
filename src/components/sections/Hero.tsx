import React from "react";

function Hero() {
    return (
        <div className="w-full">
          <div className="relative bg-gray-900 ">
            <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg" alt="" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
                <p className="mt-4 text-xl text-white">The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.</p>
                <a href="/#products" className="mt-8 inline-block rounded-md border border-transparent bg-white text-base font-medium text-gray-900 hover:bg-gray-100 px-8 py-3">Shop New Arrivals</a>
            </div>
            
            </div>
        </div>

    )
}
export default Hero;
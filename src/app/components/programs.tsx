"use client"
import { Slider } from './slider'
import React, { useState, useEffect } from "react";

export const Programs = () => {
    const [dimensions, setDimensions] = useState({ 
        width: window.innerWidth
    })
    useEffect(() => {
        function handleResize() {
            setDimensions({
              width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
    }, []);

    return (
        <section className="container flex flex-col">
            <h2 className="md:text-6xl text-4xl text-white">Not sure where start ?</h2>
            <p className="text-gray-500 mt-4 mb-2 md:text-lg text-sm">Programs offer day-to-day guidance on an interactive calendar to keep you on track</p>
            {dimensions.width <= 730 ? <Slider sliders={1}/> : <Slider sliders={3}/>}
        </section>
    )
}
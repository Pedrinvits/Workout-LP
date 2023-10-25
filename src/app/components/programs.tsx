"use client"
import { Slider } from './slider'
import { useMediaQuery  } from 'usehooks-ts'
export const Programs = () => {
    const isLarge = useMediaQuery('(min-width: 730px)')
    return (
        <section className="container flex flex-col">
            <h2 className="md:text-6xl text-4xl text-white">Not sure where start ?</h2>
            <p className="text-gray-500 mt-4 mb-2 md:text-lg text-sm">Programs offer day-to-day guidance on an interactive calendar to keep you on track</p>
            {isLarge ? <Slider sliders={3}/> : <Slider sliders={1}/>}
        </section>
    )
}
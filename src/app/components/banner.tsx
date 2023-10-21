import { Button } from "./button"
import {SiNike,SiAlienware,SiCocacola,SiNikon} from 'react-icons/si'
export const Banner = () => {
    return (
        <section className="container flex flex-col mb-24">
            <h1 className="lg:text-9xl md:text-6xl text-4xl  w-fit text-white">WORKOUT</h1>
            <h2  className="lg:text-9xl md:text-6xl text-4xl w-fit text-white">WITH ME</h2>
            <p className="md:text-lg text-sm text-gray-500 mt-4 lg:w-3/6 md:w-3/6 sm:w-3/6 mb-2">A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!</p>
            <Button/>
            <div className="flex flex-col gap-5 mt-5 pt-5">
                <p className="text-sm text-gray-500 mt-4 mb-2">AS FEATURE IN</p>
                <div className="flex  gap-5 ">
                    <SiNike size={70} color='white'/>
                    <SiAlienware size={50} color='white'/>
                    <SiNikon size={70} color='white'/>
                    <SiCocacola size={70} color='white'/>
                </div>
            </div>
        </section>
    )
}
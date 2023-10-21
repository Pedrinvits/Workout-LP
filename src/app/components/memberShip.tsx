import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import { Badge } from "@/components/ui/badge"

export const MemberShip = () => {
    return (
        <section className="container">
            <h3 className="lg:text-6xl text-4xl w-fit text-white">MEMBERSHIP</h3>
            <Separator  />
            <div className="mt-8 flex flex-col h-20 w-full h-[75rem] md:h-[30rem] sm:h-[50rem] text-white justify-around items-center gap-4 lg:flex-row md:flex-row sm:flex-row">
                <div className="flex flex-col items-center w-full md:w-1/3 h-full bg-[#232532] rounded-md p-6 justify-between">
                    <h2 className="text-2xl w-fit text-white mb-2 mt-2 ">Join for Free</h2>
                    <p className="md:text-lg text-sm text-gray-500 mt-4 mb-2 items-start w-full">Reach your fitness goals or maintain your healthy lifestyle with professional training and support from a positive and active online community
                    </p>
                    <ul className="md:text-lg text-sm text-gray-500 mt-4 mb-2 items-start w-full font-bold">
                        <li>• ~600 Full-Length Workout Videos</li>
                        <li>• Customizable Calendar</li>
                        <li>• Healthy Recipes</li>
                        <li>• Healthy and Fitness Articles</li>
                        <li>• Positive and Supportive Online</li>
                    </ul>
                    <Link href={'#'} className="flex gap-4 pr-4 pt-4 items-center text-white hover:text-[#E6533C] self-start">
                        See More
                        <BsArrowRight/>
                    </Link>
                </div>
                <div className="flex flex-col items-center w-full md:w-1/3 h-full bg-[#323443] rounded-md p-6 justify-between">

                    <h2 className="text-2xl w-fit text-white mb-2 mt-2 ">WO Plus</h2>
                    <p className="md:text-lg text-sm text-gray-500 mt-4 mb-2 items-start w-full">Wo Plus includes everything you get with a free membership and adds brand new convenience features, fitness tools, and unique content</p>

                    <ul className="md:text-lg text-sm text-gray-500 mt-4 mb-2 items-start w-full font-bold">
                       <li>• Ads-Free Website and Videos</li>
                       <li>• Surprise Me Workout Selection Tool</li>
                       <li>• Statistics for Your Activities</li>
                       <li>• Enter and Track Custom Workouts</li>
                       <li>• FB Plus Exclusive Workouts</li>
                    </ul>
                    <Link href={'#'} className="flex gap-4 pr-4 pt-4 items-center text-white hover:text-[#E6533C] self-start"><Badge className="bg-[#E6533C] text-white p-2 hover:opacity-80 transition ease-in-out delay-150">Join Club Now!</Badge></Link>
                </div>
            </div>
        </section>
    )
}
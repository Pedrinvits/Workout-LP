import Image from "next/image"
import womanImage from "../../../public/woman.jpg"
import manImage from "../../../public/jovem.jpg"
import Link from "next/link"

export const Topics = () => {
    return (
        <section className="container mt-4 mb-32">
            <div className="md:flex md:flex-col flex-col flex items-center justify-between w-full mt-20 gap-8 sm:flex-col lg:flex-row">
                <div className="flex flex-col items-start w-fit">
                    <h1 className="text-4xl text-white">Work out at home for free</h1>
                    <p className="md:text-lg text-sm text-gray-500 mt-4 lg:w-3/6 md:w-3/6 sm:w-3/6 mb-2">
                        We belive fitness should be accessible to everyone, everywhere, regardless of income or acess to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you'll have everything you need to reach your personal fitness goals - for free!
                    </p>
                    <Link href={'#'} className="flex gap-4 pr-4 pt-4 items-center text-white hover:text-[#E6533C]">
                        See More
                    </Link>
                </div>
                <Image className="rounded-md" width={400} height={50} quality={100} src={womanImage} alt='woman'/>
            </div>
            <div className="lg:flex-row flex-col flex justify-between w-full mt-20 lg:items-end items-center">
                <Image className="rounded-md mt-4" width={400} height={50} quality={100} src={manImage} alt='man'/>
                <div className="flex flex-col w-[90%] lg:w-[35%] w-full mt-4">
                    <h1 className="text-4xl text-white">Work out at home for free</h1>
                    <p className="md:text-lg text-sm text-gray-500 mt-4 mb-2 items-start w-full">
                        We belive fitness should be accessible to everyone, everywhere, regardless of income or acess to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you'll have everything you need to reach your personal fitness goals - for free!
                    </p>
                    <Link href={'#'} className="flex gap-4 pr-4 pt-4 items-start text-white hover:text-[#E6533C]">
                        See More
                    </Link>
                </div>
            </div>
            
        </section>
    )
}
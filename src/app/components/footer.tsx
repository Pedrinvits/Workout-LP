import Link from "next/link"
import {FaSquareXTwitter} from 'react-icons/fa6'
import {BsInstagram} from 'react-icons/bs'

export const Footer = () => {
    
    return (
        <footer className="w-full h-[100px] items-center p-6 border-white mt-20">
            <div className="flex items-center justify-center gap-4">
                <Link href={'/'} className="text-white hover:text-[#E6533C] text-lg relative cursor-pointer">
                    WORKOUT
                </Link>

                <div className="hidden md:flex lg:flex items-center gap-4 text-sm relative cursor-pointer text-white">
                        <FaSquareXTwitter size={20}/>
                        <BsInstagram size={20}/>
                </div>
            </div>
        </footer>
    )
}
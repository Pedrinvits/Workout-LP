"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../../../src/app/globals.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import React, { useState } from 'react';
import {BsArrowRight} from 'react-icons/bs'

type SliderProps = {
    sliders : number
}
export const Slider = ({sliders} : SliderProps) => {
    return (
        <>
        <Swiper
        slidesPerView={sliders}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        >
            <SwiperSlide className="bg-[#323443] mt-4">
                <div className="flex flex-col p-3 h-full w-full justify-center">
                    <h3 className="md:text-xl text-sm text-white mt-4">Wourkout Videos</h3>
                    <div className="flex items-center gap-4 p-4 justify-center">
                        <p className='text-gray-500 mt-4 mb-2 text-sm'>Acess to hundreds of free, full-length workout videos</p>
                        <Link href={'/'}><BsArrowRight size={30} color='white'/></Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#232532] mt-4">
                <div className="flex flex-col p-3 h-full w-full justify-center">
                    <h3 className="md:text-xl text-sm text-white mt-4">Wourkout Programs</h3>
                    <div className="flex items-center gap-4 p-4 justify-center">
                        <p className='text-gray-500 mt-4 mb-2 text-sm'>Affordable and effective workout programs</p>
                        <Link href={'/'}><BsArrowRight size={30} color='white'/></Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#323443] mt-4">
                <div className="flex flex-col p-3 h-full w-full justify-center">
                    <h3 className="md:text-xl text-sm text-white mt-4">Meal Plans</h3>
                    <div className="flex items-center gap-4 p-4 justify-center">
                        <p className='text-gray-500 mt-4 mb-2 text-sm'>Plans built registered dietitians and nutritionists</p>
                        <Link href={'/'}><BsArrowRight size={30} color='white'/></Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="bg-[#232532] mt-4">
                <div className="flex flex-col p-3 h-full w-full justify-center">
                    <h3 className="md:text-xl text-sm text-white mt-4">Wourkout Classes</h3>
                    <div className="flex items-center gap-4 p-4 justify-center">
                        <p className='text-gray-500 mt-4 mb-2 text-sm'>Classes with the most effective results</p>
                        <Link href={'/'}><BsArrowRight size={30} color='white'/></Link>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </>
    )
}
'use client'

import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import Image from "next/image";

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="text-center mt-[97px] pt-[72px] pb-[100px]">
      <div className='container'>
      <h1 className="min-sm:text-5xl text-[40px] font-bold  min-sm:leading-[60px] leading-[45px]">
        The Perfect Recruiter<span className="text-[var(--primary-color)]">.</span>
      </h1>
      <p className="text-[22px] leading-9 my-2.5 text-[#4A4A4A] font-bold">
        It’s not human. <span className="text-[var(--primary-color)]">It’s AI.</span>
      </p>
      <p className="min-sm:leading-8 leading-6 text-[17px] text-[#4A4A4A] max-w-3/4 mx-auto">
        Pecruit scores applicants, runs interviews & delivers reports, so you only meet the best.
        Built for Aerospace, Defense & Space where every hire is mission critical.
      </p>

      <div className="flex justify-center mt-9 flex-wrap gap-5">
      <a href="#try" className="bg-[var(--primary-color)] hover:bg-green-600 text-white text-base font-bold py-3.5 px-16 rounded-full transition">
        Try for Free
      </a>
        <a href='#' className="border border-[var(--text-color)] py-3.5 px-14 text-[var(--text-color)] font-bold rounded-full hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)] transition" >
          Take the Tour
        </a>
      </div> 

      <div className="min-sm:mt-[68px] mt-9 min-sm:p-6 p-4 rounded-3xl"
        style={{ boxShadow: "0px 4px 66px 0px #2F4E391A" }}>
        <div className="relative w-full aspect-video rounded-[19px] overflow-hidden cursor-pointer">
          <Image 
            src="./img/hero/hero.png" 
            alt="Video thumbnail" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div onClick={() => setShowVideo(true)} className="w-[71px] h-[71px] bg-black/50 bg-opacity-60 rounded-full flex items-center justify-center group" >
              <FaPlay className="text-white w-4 h-4 transition-transform group-hover:scale-110" />
            </div>
          </div>
        </div>
      </div>


      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/50 bg-opacity-75 flex justify-center items-center" onClick={() => setShowVideo(false)} >
          <div className="relative w-full max-w-3xl aspect-video p-4" onClick={(e) => e.stopPropagation()} >
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/eaQc7vbV4po?si=RGDh9nciIb9YrlhN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
          </div>
        </div>
      )}

      </div>
    </section>
  )
}

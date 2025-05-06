"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Hiring should be faster, fairer, and finally... smarter. That’s why I built Pecruit.",
    name: "Foram Brown",
    title: "Founder",
    image: "./img/testimonial/founder-1.png",
  },
  {
    quote:
      "Hiring should be faster, fairer, and finally... smarter. That’s why I built Pecruit.",
    name: "Foram Brown",
    title: "Founder",
    image: "./img/testimonial/founder-1.png",
  },
  {
    quote:
      "Hiring should be faster, fairer, and finally... smarter. That’s why I built Pecruit.",
    name: "Foram Brown",
    title: "Founder",
    image: "./img/testimonial/founder-1.png", 
  },
];

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="pt-[60px] pb-[100px] border-gradient text-center">
      <div className="container">
        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <div key={idx}>
              <div className="text-2xl sm:text-3xl font-medium leading-relaxed max-w-3/4 mx-auto relative">
                <div>
                    <Image
                        src="./img/icons/quote-left.png"
                        alt=""
                        width={41}
                        height={30}
                        className=""
                    />
                </div>
                <span className="text-4xl">“</span>
                {item.quote}
                <span className="text-4xl">”</span>
                <div>
                    <Image
                        src="./img/icons/quote-right.png"
                        alt=""
                        width={41}
                        height={30}
                        className="ml-auto"
                    />
                </div>
              </div>
              <div className="mt-6 mb-[55px] gap-3.5 flex justify-center items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="text-left">
                    <div className="font-bold text-[19px]">{item.name}</div>
                    <div className="text-base font-medium text-[#4A4A4A]">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

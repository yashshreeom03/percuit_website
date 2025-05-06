"use client";
import React from "react";
import Image from "next/image";


export default function Community() {
  const features = [
    {
      icon: "./img/icons/group.png", 
      text: "We only interview qualified, relevant candidates",
    },
    {
      icon: "./img/icons/graph.png",
      text: "Summary reports and interview insights are stored securely",
    },
    {
      icon: "./img/icons/star.png",
      text: "With consent, talent joins our ongoing cleared candidate pool",
    },
  ];

  return (
    <section className="md:pt-[60px] pb-[100px]" id="Community">
      <div className="container">
        <div className="text-center">
            <h2 className="text-3xl text-[var(--text-color)] font-bold">
                Community<span className="text-[var(--primary-color)]">.</span>
            </h2>
            <h6 className="mt-10 text-xl font-bold text-[var(--text-color)]">
                Every talent has a story. Not every role is their match.
            </h6>
            <p className="mt-2 tracking-wide text-base text-[#4A4A4A]">
                Pecruit is building a live community of pre-assessed aerospace,
                defense & space talent. <br />
                If someone isn’t right for your role, they might be perfect for the
                next mission.
            </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[21px] py-7 px-6 shadow-[0px_10px_48px_-4px_#00000026] flex items-center space-x-3"
            >
              <Image
                src={item.icon}
                alt="Feature Icon"
                width={30}
                height={30}
                className="mt-1"
              />
              <p className="text-left text-sm text-[var(--text-color)]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-y border-[#E8E8E8] py-[26px] flex flex-col md:flex-row sm:items-center sm:justify-between md:text-left text-center  gap-4">
          <div>
            <h3 className="font-semibold text-[23px] text-[var(--text-color)]">
              Are you a candidate?
            </h3>
            <p className="text-[15px] text-[#4A4A4A] mt-2">
              Upload your resume and go through the process to join the Pecruit
              community.
            </p>
          </div>
          <a href="#" className="bg-[var(--primary-color)] hover:bg-green-600 text-white text-base font-bold py-3 px-6 rounded-full transition max-w-fit mr-5  max-sm:mx-auto">
            Join the Community
          </a>
        </div>
      </div>
    </section>
  );
}

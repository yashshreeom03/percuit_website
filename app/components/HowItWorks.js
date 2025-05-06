"use client";
import React from "react";

const steps = [
  {
    title: "Upload Job",
    description:
      "Drop your JD & docs about team & culture. Pecruit gets to work instantly.",
  },
  {
    title: "Add Resumes",
    description: "Upload or link all applicants in one go.",
  },
  {
    title: "Pecruit Scores",
    description: "AI reads, ranks & aligns to your role needs.",
  },
  {
    title: "Pecruit Interviews",
    description:
      "Relevant applicants get personalized voice (video coming soon) interviews.",
  },
  {
    title: "Get Summary Reports",
    description:
      "You receive detailed summary reports — so you only meet the best.",
  },
];

export default function HowItWorks() {
  return (
    <section className="pt-[60px] pb-[100px] border-gradient relative" id="HowToWorks">
        <div className="container">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl text-[var(--text-color)] font-bold"> How It Works<span className="text-[var(--primary-color)]">.</span></h2>
            </div>

            <div className="mt-16 grid gap-[21px] relative z-10 bg-how-it-works">
                {steps.map((step, index) => (
                <div key={index} className={`relative flex items-start ${ index % 2 === 0 ? "justify-start" : "justify-end" }`}>
                     <div className={`w-full max-w-[494px] flex items-center min-h-[108px] bg-white rounded-[21px] py-3.5 min-sm:px-10 px-3.5 relative z-10 shadow-[0px_10.71px_48.19px_-4.02px_#00000017] ${index % 2 === 0 ? "ml-0 sm:ml-10" : "mr-0 sm:mr-10"}`} >
                        <div className="flex items-center space-x-[20px]">
                            <div className="text-[var(--primary-color)] min-sm:pr-6 pr-3.5  border-r border-[#E2F0E7] font-bold text-[40px]">
                                {index + 1}
                            </div>
                            <div>
                            <h3 className="font-semibold text-[19px">{step.title}</h3>
                            <p className="text-[#4A4A4A] text-[15px] mt-2.5">{step.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import React from "react";

const reasons = [
  {
    icon: "./img/icons/aerospace.png",
    title: "Built for Aerospace, Defense & Space",
    description:
      "Pecruit’s LLM is trained on aerospace, defense & space — it understands MBSE, hand calcs, RF, and the nuance of deep–tech hiring.",
  },
  {
    icon: "./img/icons/works.png",
    title: "Works 24/7",
    description:
      "Never sleeps. Never forgets. Pecruit scores, screens, interviews & follows up — giving candidates a great experience while you sleep.",
  },
  {
    icon: "./img/icons/bias.png",
    title: "Interviews Without Bias",
    description:
      "Looks beyond résumés. Every serious candidate gets a fair voice interview — no scheduling delays, no unconscious filters.",
  },
  {
    icon: "./img/icons/inventory.png",
    title: "Candidate Inventory",
    description:
      "Each candidate joins a reusable, permissioned talent pool — always ready for future roles, never lost in email chains.",
  },
  {
    icon: "./img/icons/faster.png",
    title: "Faster, cheaper, smarter",
    description:
      "No placement fees. No percentage commissions. Just precision hiring in a fraction of the time & cost.",
  },
  {
    icon: "./img/icons/ats.png",
    title: "ATS integration (coming soon)",
    description:
      "Pecruit will plug directly into your applicant tracking systems — so your workflow stays seamless.",
  },
];

export default function WhyPecruit() {
  return (
    <section className="pt-[60px] pb-[100px] border-gradient text-center" id="WhyPecruit">
      <div className="container">
        <h2 className="text-3xl text-[var(--text-color)]  font-bold">
          Why Pecruit<span className="text-[var(--primary-color)]">.</span>
        </h2>

        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-[21px] py-8 px-[50px] shadow-[0px_10px_48px_-4px_#00000017]"
            >
              <Image
                src={reason.icon}
                alt={reason.title}
                width={30}
                height={30}
                className="mx-auto"
              />
              <h3 className="font-bold text-[20px] text-[var(--text-color)] mt-0.5">
                {reason.title}
              </h3>
              <p className="text-[17px] leading-6 text-[#4A4A4A] mt-4">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

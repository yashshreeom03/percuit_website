"use client";
import React from "react";

export default function Pricing() {
  return (
    <section className="pb-[60px] text-center" id="Pricing">
      <div className="container">
        <h2 className="text-3xl font-bold text-[var(--text-color)]">
          Pricing<span className="text-[var(--primary-color)]">.</span>
        </h2>
        <h6 className="mt-8 text-xl font-semibold text-[var(--text-color)]">
          Hiring shouldn’t cost 35% of someone’s salary
        </h6>
        <p className="mt-5 text-[#4A4A4A] text-base">
          Traditional recruiters charge 20–35% of total comp —
        </p>
        <p className="mt-2.5 italic text-bs text-[#4A4A4A]">
          before you even know if the person is right. Pecruit delivers better
          outcomes, faster — at a fraction of the cost.
        </p>

        <div className="mt-10">
          <a href="#" className="bg-[var(--primary-color)] hover:bg-green-600 text-white text-base font-bold py-3.5 px-[50px] rounded-full transition">
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
}

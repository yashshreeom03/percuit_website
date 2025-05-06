"use client";
import Image from "next/image";

const problems = [
  {
    title: "100+ resumes per role.",
    description: "Only 5% are worth meeting.",
  },
  {
    title: "AI is making it worse.",
    description: "One click and anyone can fake a tailored resume.",
  },
  {
    title: "Surface titles mean nothing.",
    description: "Can they lead design or just run tools?",
  },
  {
    title: "You don’t know if your VP can technically lead.",
    description: "Until it’s too late.",
  },
  {
    title: "Recruiters charge 20–35% overall compensation.",
    description: "Even before you find the right person.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 border-gradient text-center" id="Problem">
      <div className="container">
        <h2 className="text-3xl font-bold text-[var(--text-color)]">
          The Problem<span className="text-[var(--primary-color)]">.</span>
        </h2>
        <h6 className="text-[20px] mt-2 text-[var(--text-color)] font-bold">Hiring is Broken</h6>

        <div className="mt-12 grid gap-[18px] grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
          {problems.map((item, index) => (
            <div
            key={index}
            className={`bg-white rounded-[21px] p-[20px] min-lg:max-h-fit shadow-[0px_10px_48px_-4px_#00000017] text-left transition-all duration-300 ease-in-out border-l-4 border-transparent hover:border-[var(--primary-color)] hover:shadow-lg hover:rounded-[21px]
              ${index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-[70px]'}
            `}
          >
              <Image
                src="./img/icons/sparkle.png" 
                alt="icon"
                width={20}
                height={20}
              />
              <h3 className="font-bold text-[17px] text-[var(--text-color)] mt-2">{item.title}</h3>
              <p className="text-[15px] leading-6  text-[#4A4A4A] mt-4">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-[70px] text-base text-[#4A4A4A] max-w-xl mx-auto">
          Time is short. Talent is rare. Execution is everything.
          <br />
          Pecruit is what mission-critical hiring deserves.
        </p>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Listen to the scroll event
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <>
      <header className={`${ isSticky ? "z-50 backdrop-blur-3xl" : "bg-white" } transition-all duration-300 fixed top-0 left-0 right-0 ease-in-out border-b border-[#E8E8E8]`} >
        <div>
          <div className="container">
            <div className="flex items-center justify-between h-24">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="./img/logo/logo.png"
                  alt="Pecruit Logo"
                  width={141}
                  height={48}
                />
              </Link>
              <div className="flex items-center justify-between gap-[50px]">
                {/* Desktop Nav */}
                <nav className="hidden lg:flex space-x-6 font-bold text-[15px] text-[var(--text-color)]">
                  <Link href="#HowToWorks" className="hover:text-[var(--primary-color)] transition-colors">How it Works</Link>
                  <Link href="#Problem" className="hover:text-[var(--primary-color)] transition-colors">The Problem</Link>
                  <Link href="#WhyPecruit" className="hover:text-[var(--primary-color)] transition-colors">Why Pecruit</Link>
                  <Link href="#Community" className="hover:text-[var(--primary-color)] transition-colors">Community</Link>
                  <Link href="#Pricing" className="hover:text-[var(--primary-color)] transition-colors">Pricing</Link>
                </nav>
                <div className="hidden lg:block">
                  <a href="#" className="bg-[var(--primary-color)] hover:bg-green-600 text-white text-base font-bold p-3 rounded-full transition">
                    Try for Free
                  </a>
                </div>
              </div>
              <button onClick={() => setIsOpen(true)} className="lg:hidden text-gray-700" aria-label="Open menu">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isOpen &&  (
        <div className="fixed inset-0 bg-[#0000007a] backdrop-blur-[2px] bg-opacity-40 z-[51]" onClick={() => setIsOpen(false)} />
      )}

      <aside className={`fixed top-0 left-0 w-64 h-full bg-white z-[52] transform ${ isOpen ? "translate-x-0" : "-translate-x-full" } transition-transform duration-300 ease-in-out shadow-lg lg:hidden`}>
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="./img/logo/logo.png" alt="Pecruit Logo" width={141} height={48} />
          </Link>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col font-bold text-[15px] text-[var(--text-color)]">
          <Link href="#HowToWorks" className="border-b p-4 border-[#a19f9f] hover:text-[var(--primary-color)] transition-colors" onClick={() => setIsOpen(false)} >
            How it Works
          </Link>
          <Link href="#Problem" className="border-b p-4 border-[#a19f9f] hover:text-[var(--primary-color)] transition-colors" onClick={() => setIsOpen(false)} >
            The Problem
          </Link>
          <Link href="#WhyPecruit" className="border-b p-4 border-[#a19f9f] hover:text-[var(--primary-color)] transition-colors" onClick={() => setIsOpen(false)} >
            Why Pecruit
          </Link>
          <Link href="#Community" className="border-b p-4 border-[#a19f9f] hover:text-[var(--primary-color)] transition-colors" onClick={() => setIsOpen(false)} >
            Community
          </Link>
          <Link href="#Pricing" className="border-b p-4 border-[#a19f9f] hover:text-[var(--primary-color)] transition-colors" onClick={() => setIsOpen(false)} >
            Pricing
          </Link>
          <a href="#try" className="bg-[var(--primary-color)] hover:bg-green-600 text-white text-sm font-semibold p-3 mt-9 mx-4 rounded-full text-center" onClick={() => setIsOpen(false)} >
            Try for Free
          </a>
        </nav>
      </aside>
    </>
  );
}

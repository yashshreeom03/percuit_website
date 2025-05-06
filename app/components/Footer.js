import Image from "next/image";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[var(--text-color)] text-white">
        <div className="container">
            <div className="flex flex-wrap justify-between gap-8 py-11">
                <div className="sm:flex space-x-20">
                    <div>
                        <Image
                            src="./img/logo/logo-white.png"
                            alt="Pecruit Logo"
                            width={133}
                            height={48}
                            className="mb-2"
                        />
                        <p className="text-sm">The Perfect Recruiter</p>
                    </div>

                    <div>
                        <ul className="space-y-5 mt-2 text-[17px] list-disc pl-4 max-sm:mt-5">
                            <li><a href="#" className="hover:text-[var(--primary-color)]">About</a></li>
                            <li><a href="#" className="hover:text-[var(--primary-color)]">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h5 className="text-[17px] font-medium items-center-safe">Follow on</h5>
                    <div className="flex sm:justify-end items-start flex-wrap mt-[16px] gap-2">
                        <a href="#" className="bg-[#303030] w-10 h-10 flex items-center text-[#C8CDD6] justify-center rounded-full">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="bg-[#303030] w-10 h-10 flex items-center text-[#C8CDD6] justify-center rounded-full">
                            <FaXTwitter />
                        </a>
                        <a href="#" className="bg-[#303030] w-10 h-10 flex items-center text-[#C8CDD6] justify-center rounded-full">
                            <FaInstagram />
                        </a>
                        <a href="#" className="bg-[#303030] w-10 h-10 flex items-center text-[#C8CDD6] justify-center rounded-full">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="border-t border-[#36363680] text-[15px] py-6">
            <div className="container">
                <div className="flex gap-5 max-md:flex-col items-center justify-between">
                    <div className="flex flex-wrap justify-center gap-y-4 gap-x-24">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Cookie Preferences</a>
                    </div>
                    <div className="mt-2 sm:mt-0">&copy;2025 Pecruit. All Rights Reserved.</div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default function CTASection() {
    return (
      <section className="py-[60px] border-gradient">
        <div className="container">
            <div className="bg-white rounded-[16px] shadow-[0px_10px_48px_-4px_#00000017] sm:p-[55px] p-[30px] text-center">
                <h2 className="text-[28px] sm:text-3xl font-bold">
                    Ready to meet your perfect recruiter
                    <span className="text-[var(--primary-color)]">.</span>
                </h2>
                <p className="mt-4 text-[#4A4A4A] text-base leading-8">
                    Upload your job. Upload your resumes. <br />
                    Let Pecruit do the rest — while you focus on what matters.
                </p>
        
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#try" className="bg-[var(--primary-color)] hover:bg-green-600 text-white text-base font-bold py-3.5 px-16 rounded-full transition">
                        Try for Free
                    </a>
                    <a href='#' className="border border-[var(--text-color)] py-3.5 px-14 text-[var(--text-color)] font-bold rounded-full hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)] transition">
                        Take the Tour
                    </a>
                </div>
            </div>
        </div>
      </section>
    );
  }
  
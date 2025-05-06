import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Hiring from './components/Hiring';
import WhyPecruit from './components/WhyPecruit';
import Community from './components/Community';
import Pricing from './components/Pricing';
import TestimonialSlider from './components/TestimonialSlider';
import Cta from './components/Cta';
import Footer from './components/Footer';
import BackToTop from "./components/BackToTop";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Hiring />
      <WhyPecruit />
      <Community />
      <Pricing />
      <TestimonialSlider />
      <Cta />
      <Footer />
      <BackToTop />
    </>
  );
}
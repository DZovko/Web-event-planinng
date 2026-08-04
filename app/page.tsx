import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import UpcomingEvents from "@/components/UpcomingEvents";
//import Gallery from "@/components/Gallery";
import PreviousEvents from "@/components/PreviousEvents";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <UpcomingEvents />
        <PreviousEvents />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

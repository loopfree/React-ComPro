import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Overview from "../../components/Overview";
import Service from "../../components/Service";
import Testimonial from "../../components/Testimonial";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Service />
      <Testimonial />
      <Footer />
    </>
  );
}

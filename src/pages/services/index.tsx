import Navbar from "../../components/Navbar";
import ServiceInfo from "../../components/ServiceInfo";
import Pricing from "../../components/Pricing";
import Testimonial from "../../components/Testimonial";
import Footer from "../../components/Footer";

export default function Services() {
  return (
    <>
      <Navbar />
      <ServiceInfo />
      <Pricing />
      <Testimonial />
      <Footer position="static" />
    </>
  );
}

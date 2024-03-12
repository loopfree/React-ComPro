import Navbar from "../../components/Navbar";
import AboutUs from "../../components/AboutUs";
import UpperMember from "../../components/UpperMember";
import Footer from "../../components/Footer";
import Culture from "../../components/Culture";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <UpperMember />
      {/* <Footer position="fixed" /> */}
      <Culture />
      <Footer position="static" />
    </>
  );
}

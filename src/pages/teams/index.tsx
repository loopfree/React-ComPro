import Navbar from "../../components/Navbar";
import XcuteTeam from "../../components/XcuteTeam";
import Footer from "../../components/Footer";

export default function Teams() {
  return (
    <>
      <Navbar />
      <XcuteTeam />
      <Footer position={{ base: "static", md: "static", lg: "fixed" }} />
    </>
  );
}

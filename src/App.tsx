import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Teams from "./pages/teams";

import "@fontsource/source-sans-pro/600.css";
import "@fontsource/tektur/500.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </>
  );
}

export default App;

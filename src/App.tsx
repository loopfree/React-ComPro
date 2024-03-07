import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import "@fontsource/source-sans-pro/200.css";
import "@fontsource/source-sans-pro/300.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";
import "@fontsource/source-sans-pro/900.css";

import "@fontsource/tektur/400.css";
import "@fontsource/tektur/500.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

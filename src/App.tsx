import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

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

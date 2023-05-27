import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Accordion } from "./components/Accordion";
import { Triangle } from "./components/Triangle";
import { FloatLabel } from "./components/FloatLabel";
import { MenuDropDown } from "./components/MenuDropDown";
import { PulsingButton } from "./components/PulsingButton";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Triangle} path="/Triangle" />
        <Route Component={Accordion} path="/Accordion" />
        <Route Component={FloatLabel} path="/FloatLabel" />
        <Route Component={MenuDropDown} path="/MenuDropDown" />
        <Route Component={PulsingButton} path="/PulsingButton" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

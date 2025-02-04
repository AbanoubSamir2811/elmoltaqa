import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Hero from "./Hero";
import Desplay from "./Desplay";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/desplay" element={<Desplay />} />
      </Routes>
    </>
  );
}

export default App;

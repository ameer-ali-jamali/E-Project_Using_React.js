import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header title={"Temp-Details"} />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

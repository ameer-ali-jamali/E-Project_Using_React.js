import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header title={"Temp-Details"} />
      <Routes>
        <Route path="/content" element={<Content />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

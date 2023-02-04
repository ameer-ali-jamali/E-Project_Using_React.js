import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header title={"Temp_Details"} />
      <Content />
      <Footer />
      <BrowserRouter>
        <Routes>
          <Route exact path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

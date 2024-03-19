import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from "src/components/Alert";
import Footer from "src/components/Footer";
import Home from "src/pages/Home";
import Nav from "src/components/Nav";
import DefaultScan from "src/pages/DefaultScan";
import About from "src/pages/About";
import Generate from "src/pages/Generate";
import LegoScan from "src/pages/LegoScanner";
import LegoHelp from "src/pages/LegoHelp";

// TODO: build your app!
const App = () => (
  <BrowserRouter basename="/qr">
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scan" element={<DefaultScan />} />
      <Route path="/about" element={<About />} />
      <Route path="/generate" element={<Generate />} />
      <Route path="/lego" element={<LegoScan />} />
      <Route path="/lego/help" element={<LegoHelp />} />
    </Routes>
    <Alert />
    <Footer />
  </BrowserRouter>
);

export default App;

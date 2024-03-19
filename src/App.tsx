import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from "src/components/Alert";
import Footer from "src/components/Footer";
import Home from "src/pages/Home";
import Nav from "src/components/Nav";
import DefaultScan from "src/pages/DefaultScan";
import Lego from "src/pages/Lego";
import Generate from "src/pages/Generate";
import LegoScan from "src/pages/LegoScanner";

// TODO: build your app!
const App = () => (
  <BrowserRouter basename="/qr">
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scan" element={<DefaultScan />} />
      <Route path="/lego" element={<Lego />} />
      <Route path="/generate" element={<Generate />} />
      <Route path="/lego/scan" element={<LegoScan />} />
    </Routes>
    <Alert />
    <Footer />
  </BrowserRouter>
);

export default App;

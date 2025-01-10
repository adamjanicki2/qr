import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from "src/components/Alert";
import Footer from "src/components/Footer";
import Home from "src/pages/Home";
import Nav from "src/components/Nav";
import DefaultScan from "src/pages/DefaultScan";
import About from "src/pages/About";
import Generate from "src/pages/Generate";
import LegoScanVideo from "src/pages/LegoScannerVideo";
import Gallery from "src/pages/Gallery";
import { type Series, SERIES } from "src/cmf";
import GalleryEntry from "src/pages/GalleryEntry";

// TODO: build your app!
const App = () => (
  <BrowserRouter basename="/qr">
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scan" element={<DefaultScan />} />
      <Route path="/about" element={<About />} />
      <Route path="/generate" element={<Generate />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/lego/camera" element={<LegoScanVideo />} />
      {Object.keys(SERIES).map((series) => (
        <Route
          path={`/gallery/${series}`}
          element={<GalleryEntry seriesKey={series as Series} />}
        />
      ))}
    </Routes>
    <Alert />
    <Footer />
  </BrowserRouter>
);

export default App;

import { Route, Router, Routes } from "@adamjanicki/ui";
import { type Series, SERIES } from "src/cmf";
import Alert from "src/components/Alert";
import Footer from "src/components/Footer";
import Nav from "src/components/Nav";
import About from "src/pages/About";
import DefaultScan from "src/pages/DefaultScan";
import Gallery from "src/pages/Gallery";
import GalleryEntry from "src/pages/GalleryEntry";
import Generate from "src/pages/Generate";
import Home from "src/pages/Home";
import LegoScanVideo from "src/pages/LegoScannerVideo";
import NotFound from "./pages/NotFound";

// TODO: build your app!
const App = () => (
  <Router basename="/qr">
    <Nav />
    <Routes fallback={<NotFound />}>
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
  </Router>
);

export default App;

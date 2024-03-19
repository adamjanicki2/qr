import { Link } from "react-router-dom";
import { useDocumentTitle } from "src/hooks";
import series25 from "src/img/series25.webp";

const Lego = () => {
  useDocumentTitle("Lego");
  return (
    <div className="flex flex-column items-center pb3 ph3 mh">
      <h1 className="page-title-text tc mb0">Lego CMF Scanning</h1>
      <Link to="/lego/scan" className="fw5 i default-link mv2">
        Go to the Scanner
      </Link>
      <img
        src={series25}
        alt=""
        style={{ maxHeight: "50vh" }}
        className="mv2"
      />
      <p className="f5 fw4 w-70-90 mv2" style={{ lineHeight: 1.6 }}>
        Recently, Lego decided to switch from using plastic packaging to
        cardboard in their collectible minifigure series. What does this mean?
        It means that gifted feelers like myself can no longer identify which
        figures lie inside each package like we used to. But fans have
        discovered that new boxed-packages include a QR code that can be
        uniquely mapped to a figure, meaning we can once again beat the system
        and identify which figure lies in a given mystery box. So I decided to
        extend this QR scanner site to be able to scan a QR code, and tell you
        which minifigure lies inside the box. This will only work for series 25
        currently, but will hopefully be able to extend to series to come in the
        future.
      </p>
    </div>
  );
};

export default Lego;

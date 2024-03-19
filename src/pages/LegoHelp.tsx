import { Link } from "react-router-dom";
import { useDocumentTitle } from "src/hooks";
import series25 from "src/img/series25.webp";
import { SERIES, seriesLabel, Series } from "src/cmf";

const allSeries = Object.keys(SERIES);

const LegoHelp = () => {
  useDocumentTitle("How to scan CMF");
  return (
    <div className="flex flex-column items-center pb3 ph3 mh">
      <h1 className="page-title-text tc mb0">How to Scan CMFs</h1>
      <Link to="/lego" className="fw5 i default-link mv2">
        Go to the Lego Scanner
      </Link>
      <img
        src={series25}
        alt=""
        style={{ maxHeight: "50vh" }}
        className="mv2"
      />
      <p className="f5 fw4 w-70-90 mv2" style={{ lineHeight: 1.6 }}>
        You can checkout out the{" "}
        <Link to="/about" className="default-link">
          about page
        </Link>{" "}
        for the site to check out my full motivation for building this site. The
        gist is that now Lego collectible minifigures (CMFs) are now in boxes,
        and therefore cannot be felt anymore. Each CMF has a QR code, when, if
        scanned, can identify the figure inside with high probability. So this
        tool works very simply: find the QR code on the bottom of the package,
        then scan the QR code on our Lego CMF scanned, where you can find{" "}
        <Link to="/lego" className="default-link">
          here
        </Link>
        . After scanning a QR code, the site can identify which figure is inside
        the box, again, with high probability. So far, this only works for
        series 25, but you can check below for all current series we support, it
        should be up to date!
        <ul>
          {allSeries.map((s) => (
            <li key={s}>{seriesLabel(s as Series)}</li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default LegoHelp;

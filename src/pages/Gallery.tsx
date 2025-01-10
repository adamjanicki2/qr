import { useDocumentTitle } from "src/hooks";
import { SERIES, seriesLabel, Series } from "src/cmf";
import Link from "src/components/Link";

const allSeries = Object.keys(SERIES);

const Gallery = () => {
  useDocumentTitle("Gallery");
  return (
    <div className="flex flex-column items-center pb3 ph3 mh">
      <h1 className="page-title-text tc mb0">Gallery</h1>
      <ul style={{ lineHeight: 1.6 }}>
        {allSeries.map((s) => (
          <li key={s}>
            <Link className="fw5 i default-link" to={`/gallery/${s}`}>
              {seriesLabel(s as Series)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;

import { useDocumentTitle } from "src/hooks";
import { SERIES, seriesLabel, Series } from "src/cmf";
import Link from "src/components/Link";

type Props = {
  seriesKey: Series;
};
const GalleryEntry = ({ seriesKey }: Props) => {
  const figs = SERIES[seriesKey];
  const title = seriesLabel(seriesKey);
  useDocumentTitle(title);

  return (
    <div className="flex flex-column items-center pb3 ph3 mh">
      <h1 className="page-title-text tc mb0">{title}</h1>
      <Link to="/gallery" className="fw5 i default-link mv2">
        See all series
      </Link>
      <div className="flex flex-wrap justify-center">
        {figs.map((m) => (
          <div
            className="flex flex-column items-center br3 ph3 mb2"
            style={{ maxWidth: "max-content", flexGrow: 1 }}
          >
            <img
              src={m.image}
              alt=""
              style={{
                maxHeight: "45vh",
              }}
              className="br3 ba b--moon-gray"
            />
            <h1 className="f3 fw7 mb1 tc">{m.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryEntry;

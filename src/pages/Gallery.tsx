import { SERIES, seriesLabel, Series } from "src/cmf";
import Link from "src/components/Link";
import Page from "src/components/Page";
import { ui } from "@adamjanicki/ui";

const allSeries = Object.keys(SERIES);

export default function Gallery() {
  return (
    <Page title="Gallery">
      <ui.ul style={{ lineHeight: 1.6 }}>
        {allSeries.map((s) => (
          <ui.li key={s}>
            <Link vfx={{ italics: true }} to={`/gallery/${s}`}>
              {seriesLabel(s as Series)}
            </Link>
          </ui.li>
        ))}
      </ui.ul>
    </Page>
  );
}

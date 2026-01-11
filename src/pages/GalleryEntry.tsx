import { Box, Link, ui } from "@adamjanicki/ui";
import { SERIES, Series, seriesLabel } from "src/cmf";
import Page from "src/components/Page";
import { useDocumentTitle } from "src/hooks";

type Props = {
  seriesKey: Series;
};
const GalleryEntry = ({ seriesKey }: Props) => {
  const figs = SERIES[seriesKey];
  const title = seriesLabel(seriesKey);
  useDocumentTitle(title);

  return (
    <Page title={title} vfx={{ gap: "s" }}>
      <Link to="/gallery" vfx={{ italics: true }}>
        See all series
      </Link>
      <Box vfx={{ axis: "x", wrap: true, justify: "center" }}>
        {figs.map((m) => (
          <Box
            vfx={{
              axis: "y",
              align: "center",
              radius: "rounded",
              paddingX: "s",
              maxWidth: "max",
            }}
            className="flex flex-column items-center br3 ph3 mb2"
            style={{ flexGrow: 1 }}
          >
            <ui.img
              src={m.image}
              alt=""
              style={{ maxHeight: "45vh" }}
              vfx={{ radius: "rounded", border: true, maxWidth: "full" }}
            />
            <ui.h2 vfx={{ textAlign: "center", fontWeight: 7 }}>{m.name}</ui.h2>
          </Box>
        ))}
      </Box>
    </Page>
  );
};

export default GalleryEntry;

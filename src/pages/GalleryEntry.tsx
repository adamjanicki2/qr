import { Box, ui } from "@adamjanicki/ui";
import { useDocumentTitle } from "src/hooks";
import { SERIES, seriesLabel, Series } from "src/cmf";
import Link from "src/components/Link";
import Page from "src/components/Page";

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
              vfx={{ radius: "rounded", border: true }}
            />
            <ui.h2 vfx={{ textAlign: "center", fontWeight: 7 }}>{m.name}</ui.h2>
          </Box>
        ))}
      </Box>
    </Page>
  );
};

export default GalleryEntry;

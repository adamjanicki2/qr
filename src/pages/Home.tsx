import { Box, ui } from "@adamjanicki/ui";
import Link from "src/components/Link";
import { useDocumentTitle } from "src/hooks";
import ace from "src/img/ace.webp";

export default function Home() {
  useDocumentTitle("QR Scanner");
  return (
    <Box
      vfx={{
        axis: "-x",
        wrap: true,
        justify: "center",
        align: "center",
        gap: "m",
        padding: "xl",
      }}
    >
      <Box vfx={{ axis: "y", align: "center" }}>
        <ui.h1
          vfx={{ textAlign: "center", margin: "none" }}
          className="home-title"
        >
          QR Scanner
        </ui.h1>
        <ui.p vfx={{ textAlign: "center", fontSize: "m" }}>
          Welcome to QR Scanner, where you can scan and generate QRs!
        </ui.p>
        <Box
          vfx={{
            axis: "x",
            align: "center",
            justify: "around",
            width: "full",
            fontSize: "m",
            gap: "s",
          }}
        >
          <Link vfx={{ italics: true }} to="/lego/camera">
            Scan Lego CMFs
          </Link>
          <Link vfx={{ italics: true }} to="/scan">
            Scan QRs
          </Link>
        </Box>
      </Box>
      <ui.img src={ace} alt="" style={{ maxHeight: 300 }} className="ph3" />
    </Box>
  );
}

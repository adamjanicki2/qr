import { Box, Link, ui } from "@adamjanicki/ui";
import QRCode from "react-qr-code";
import { formatUrl, isUrl } from "src/util";

type Props = {
  children: string;
};

const QrResult = ({ children }: Props) => {
  return (
    <Box
      vfx={{
        axis: "y",
        align: "center",
        radius: "rounded",
        padding: "m",
        border: true,
        gap: "s",
        fontSize: "m",
      }}
      style={{ maxWidth: 324 }}
    >
      <QRCode value={children} size={256} />
      {isUrl(children) ? (
        <Link newTab to={formatUrl(children)}>
          {children}
        </Link>
      ) : (
        <ui.p vfx={{ margin: "none" }}>{children}</ui.p>
      )}
    </Box>
  );
};

export default QrResult;

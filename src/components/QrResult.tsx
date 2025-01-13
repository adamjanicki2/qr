import QRCode from "react-qr-code";
import { formatUrl, isUrl } from "src/util";

type Props = {
  children: string;
};

const CLASS = "tc f4 fw6 mt3 mb0 wb";

const QrResult = ({ children }: Props) => {
  return (
    <div
      className="flex flex-column ba items-center b--moon-gray br3 pa3"
      style={{ maxWidth: 324 }}
    >
      <QRCode value={children} size={256} />
      {isUrl(children) ? (
        <a
          className={CLASS + " default-link"}
          target="_blank"
          rel="noreferrer"
          href={formatUrl(children)}
        >
          {children}
        </a>
      ) : (
        <p className={CLASS}>{children}</p>
      )}
    </div>
  );
};

export default QrResult;

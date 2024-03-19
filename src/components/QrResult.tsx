import QRCode from "react-qr-code";
import { formatUrl, isUrl } from "src/util";

type Props = {
  children: string;
  header?: string;
};

const CLASS = "tc f4 fw6 mv3";

const QrResult = ({ children, header = "Result" }: Props) => {
  return (
    <div className="flex flex-column ba b--moon-gray br3 ph3 mb2">
      <h1 className="f3 fw6">{header}</h1>
      <QRCode value={children} size={300} />
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

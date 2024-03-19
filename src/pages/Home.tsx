import { useDocumentTitle } from "src/hooks";
import QRCode from "react-qr-code";

const Home = () => {
  useDocumentTitle("QR Scanner");
  return (
    <div className="flex flex-wrap home justify-center items-center">
      <div className="mh3 flex flex-column">
        <h1 className="f-subheadline tc fw8 mv0">QR Scanner</h1>
        <p className="f3 fw5 tc">
          Welcome to QR Scanner, where you can scan and generate QRs!
        </p>
      </div>
      <QRCode
        className="mh3"
        value="https://adamjanicki.xyz/qr-scanner"
        size={300}
      />
    </div>
  );
};

export default Home;

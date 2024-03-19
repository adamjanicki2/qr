import { useDocumentTitle } from "src/hooks";
import QRCode from "react-qr-code";

const Home = () => {
  useDocumentTitle("QR Scanner");
  return (
    <div className="flex flex-wrap home justify-center items-center">
      <div className="mh3 flex flex-column items-center">
        <h1 className="home-title tc mv0 tc">QR Scanner</h1>
        <p className="home-description tc">
          Welcome to QR Scanner, where you can scan and generate QRs!
        </p>
      </div>
      <QRCode
        className="mh3"
        value="https://adamjanicki.xyz/qr-scanner"
        size={256}
      />
    </div>
  );
};

export default Home;

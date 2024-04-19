import { useDocumentTitle } from "src/hooks";
import { Link } from "react-router-dom";
import ace from "src/img/ace.webp";

const Home = () => {
  useDocumentTitle("QR Scanner");
  return (
    <div className="flex flex-wrap home justify-center items-center">
      <div className="mh3 flex flex-column items-center ph3">
        <h1 className="home-title tc mv0 tc">QR Scanner</h1>
        <p className="home-description tc">
          Welcome to QR Scanner, where you can scan and generate QRs!
        </p>
        <div className="flex justify-around items-center w-100 mv2 home-description">
          <Link className="default-link i" to="/lego/image">
            Scan Lego CMFs
          </Link>
          <Link className="default-link i" to="/scan">
            Scan QRs
          </Link>
        </div>
      </div>
      <img src={ace} alt="" style={{ maxHeight: 300 }} className="ph3" />
    </div>
  );
};

export default Home;

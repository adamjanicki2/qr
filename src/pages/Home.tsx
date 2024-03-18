import { useDocumentTitle } from "src/hooks";

const Home = () => {
  useDocumentTitle("QR Scanner");
  return (
    <div className="flex flex-column pb3 ph3" style={{ height: "70vh" }}>
      <h1 className="f1 tc">QR Scanner</h1>
      <p className="tc f4 fw4">
        Welcome to QR Scanner! Click the "Scan" button to get started.
      </p>
    </div>
  );
};

export default Home;

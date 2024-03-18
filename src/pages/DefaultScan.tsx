import { useDocumentTitle } from "src/hooks";

const DefaultScan = () => {
  useDocumentTitle("Scan QR Code");
  return (
    <div className="flex flex-column pb3 ph3" style={{ height: "70vh" }}>
      <h1 className="f1 tc">Scanner</h1>
      <p className="tc f4 fw4">Let's scan a code!</p>
    </div>
  );
};

export default DefaultScan;

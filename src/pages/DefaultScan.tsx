import { useState } from "react";
import QrResult from "src/components/QrResult";
import Scanner from "src/components/Scanner";
import Button from "src/components/basic/Button";
import { useAlert, useDocumentTitle } from "src/hooks";

const DefaultScan = () => {
  useDocumentTitle("Scan QR Code");
  const { setAlert } = useAlert();
  const [show, setShow] = useState(false);
  const [result, setResult] = useState("");
  return (
    <div className="flex flex-column items-center pb3 ph3 mh">
      <h1 className="page-title-text tc">Scanner</h1>
      {result && <QrResult header="Scan Result">{result}</QrResult>}
      <Scanner
        onError={() => {
          setAlert({ message: "Error opening your camera", type: "error" });
          setShow(false);
        }}
        onScan={(result) => {
          setResult(result);
          setShow(false);
        }}
        show={show}
      />
      {!show && (
        <Button
          onClick={() => {
            setShow(true);
            setResult("");
          }}
        >
          {result ? "Scan again" : "Start scanning"}
        </Button>
      )}
    </div>
  );
};

export default DefaultScan;

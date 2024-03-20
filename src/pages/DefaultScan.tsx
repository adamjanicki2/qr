import { useState } from "react";
import QrResult from "src/components/QrResult";
import Scanner from "src/components/Scanner";
import Button from "src/components/basic/Button";
import { useAlert, useCache, useDocumentTitle } from "src/hooks";

const cacheKey = "default-code";

const DefaultScan = () => {
  const { get, set } = useCache<string>();
  useDocumentTitle("Scan QR Code");
  const { setAlert } = useAlert();
  const [show, setShow] = useState(false);

  const result = get(cacheKey);
  const addCode = (code: string) => {
    set(cacheKey, code);
  };

  return (
    <div className="flex flex-column items-center pb3 ph3 mh">
      <h1 className="page-title-text tc mb0">Scanner</h1>
      {result && !show && (
        <>
          <h2 className="mv1 f6 fw5">Most recent scan...</h2>
          <QrResult header="Scan Result">{result}</QrResult>
        </>
      )}
      {show && (
        <Scanner
          onError={() => {
            setAlert({ message: "Error opening your camera", type: "error" });
            setShow(false);
          }}
          onScan={(result) => {
            setShow(false);
            addCode(result);
          }}
        />
      )}
      <Button
        onClick={() => {
          setShow(!show);
        }}
        className="mv2"
      >
        {show ? "Close" : "Scan"}
      </Button>
    </div>
  );
};

export default DefaultScan;

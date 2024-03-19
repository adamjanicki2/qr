import { useState } from "react";
import { Link } from "react-router-dom";
import LegoResult from "src/components/LegoResult";
import Scanner from "src/components/Scanner";
import Button from "src/components/basic/Button";
import { useAlert, useCache, useDocumentTitle } from "src/hooks";

const cacheKey = "cmf-code";

const LegoScan = () => {
  const { get, set } = useCache<string>();
  useDocumentTitle("Scan CMF QR Code");
  const { setAlert } = useAlert();
  const [show, setShow] = useState(false);
  const result = get(cacheKey);
  const addCode = (code: string) => {
    set(cacheKey, code);
  };

  return (
    <div className="flex flex-column items-center pb3 ph3 mh">
      <h1 className="page-title-text tc mb0">CMF Scanner</h1>
      <Link to="/lego/help" className="fw5 i default-link mv2">
        How to scan CMFs
      </Link>
      {result && !show && (
        <>
          <h2 className="mv1 f3 fw6">Most recent figure...</h2>
          <LegoResult code={result} />
        </>
      )}
      <Scanner
        onError={() => {
          setAlert({ message: "Error opening your camera", type: "error" });
          setShow(false);
        }}
        onScan={(result) => {
          addCode(result);
          setShow(false);
        }}
        show={show}
      />
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

export default LegoScan;

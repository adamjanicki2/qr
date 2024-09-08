import { useState } from "react";
import { findMinifigure } from "src/cmf";
import LegoResult from "src/components/LegoResult";
import Link from "src/components/basic/Link";
import Scanner from "src/components/Scanner";
import Button from "@adamjanicki/ui/components/Button";
import { useAlert, useCache, useDocumentTitle } from "src/hooks";

const cacheKey = "cmf-code-video";

const LegoScanVideo = () => {
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
      <h1 className="page-title-text tc mb0">CMF Scanner - Camera</h1>
      <div className="flex items-center justify-center">
        <Link to="/lego/help" className="fw5 i default-link ma2">
          How to scan CMFs
        </Link>
        <Link to="/lego/image" className="fw5 i default-link ma2">
          Image upload
        </Link>
      </div>
      {result && !show && <LegoResult code={result} />}
      {show && (
        <Scanner
          onError={() => {
            setAlert({ message: "Error opening your camera", type: "error" });
            setShow(false);
          }}
          onScan={(result) => {
            addCode(result);
            setShow(false);
            const found = !!findMinifigure(result);
            found && setAlert({ message: "Minifig found!", type: "success" });
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

export default LegoScanVideo;

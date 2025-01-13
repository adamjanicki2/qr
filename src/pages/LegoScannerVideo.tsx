import { useRef, useState } from "react";
import LegoResult from "src/components/LegoResult";
import Scanner from "src/components/Scanner";
import Button from "@adamjanicki/ui/components/Button";
import { useAlert, useCache, useDocumentTitle } from "src/hooks";

const cacheKey = "cmf-code-video";

const LegoScanVideo = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { get, set } = useCache<string>();
  useDocumentTitle("Scan CMF QR Code");
  const { setAlert } = useAlert();
  const [showScanner, setShowScanner] = useState(true);
  const result = get(cacheKey);
  const [showResultPopover, setShowResultPopover] = useState(false);

  const addCode = (code: string) => {
    set(cacheKey, code);
    setShowResultPopover(true);
    setTimeout(() => setShowResultPopover(false), 3000);
  };

  return (
    <div className="flex flex-column items-center pb3 ph3 mh">
      <h1 className="page-title-text tc mb0">CMF Scanner</h1>
      {result && showScanner && (
        <LegoResult code={result} open={showResultPopover} triggerRef={ref} />
      )}
      {showScanner && (
        <Scanner
          onError={() => {
            setAlert({ message: "Error opening your camera", type: "error" });
            setShowScanner(false);
          }}
          onScan={addCode}
        />
      )}
      <Button
        ref={ref}
        onClick={() => setShowScanner(!showScanner)}
        className="mv2"
      >
        {showScanner ? "Close" : "Scan"}
      </Button>
    </div>
  );
};

export default LegoScanVideo;

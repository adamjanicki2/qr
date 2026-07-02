import { Button } from "@adamjanicki/ui";
import { useCallback, useState } from "react";
import LegoResult from "src/components/LegoResult";
import Page from "src/components/Page";
import Scanner from "src/components/Scanner";
import { useAlert, useCache, useDocumentTitle } from "src/hooks";

const cacheKey = "cmf-code-video";

const LegoScanVideo = () => {
  const { get, set } = useCache<string>();
  useDocumentTitle("Scan CMF QR Code");
  const [, setAlert] = useAlert();
  const [showScanner, setShowScanner] = useState(true);
  const result = get(cacheKey);
  const [showResultPopover, setShowResultPopover] = useState(false);

  const handleScan = useCallback(
    (code: string) => {
      if (code === result && showResultPopover) return;
      set(cacheKey, code);
      setShowResultPopover(true);
      setTimeout(() => setShowResultPopover(false), 4000);
    },
    [result, showResultPopover, set],
  );

  const handleError = useCallback(() => {
    setAlert({
      message:
        "There was an error opening your camera. Try checking your browser permissions.",
      type: "error",
    });
    setShowScanner(false);
  }, [setAlert, setShowScanner]);

  return (
    <Page title="CMF Scanner">
      {showScanner && <Scanner onError={handleError} onScan={handleScan} />}
      <LegoResult
        code={result}
        open={showResultPopover}
        anchor={
          <Button onClick={() => setShowScanner(!showScanner)}>
            {showScanner ? "Close" : "Scan"}
          </Button>
        }
      />
    </Page>
  );
};

export default LegoScanVideo;

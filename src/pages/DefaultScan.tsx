import { useState } from "react";
import QrResult from "src/components/QrResult";
import Scanner from "src/components/Scanner";
import { Button } from "@adamjanicki/ui";
import { useAlert, useCache, useDocumentTitle } from "src/hooks";
import Page from "src/components/Page";

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
    <Page title="Scanner" vfx={{ gap: "s" }}>
      {result && !show && <QrResult>{result}</QrResult>}
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
      >
        {show ? "Close" : "Scan"}
      </Button>
    </Page>
  );
};

export default DefaultScan;

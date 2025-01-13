import { useState } from "react";
import QrResult from "src/components/QrResult";
import Button from "@adamjanicki/ui/components/Button";
import Input from "@adamjanicki/ui/components/Input";
import { useCache, useDocumentTitle } from "src/hooks";

const cacheKey = "last-generated";

const DefaultScan = () => {
  useDocumentTitle("Generate QR Code");
  const [value, setValue] = useState("");
  const { get, set } = useCache<string>();

  const [lastGeneratedValue, setLastGeneratedValue] = useState(get(cacheKey));

  return (
    <div className="flex flex-column items-center pb3 ph3 mh">
      <h1 className="page-title-text tc">QR Generator</h1>
      <div
        style={{ width: "min(420px, 90vw)" }}
        className="flex flex-column items-center"
      >
        <div className="flex items-center w-100 mb3">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={1000}
            className="w-100"
            placeholder="Enter text to encode"
          />
          <Button
            onClick={() => {
              setLastGeneratedValue(value);
              set(cacheKey, value);
            }}
            className="ml3"
            disabled={!value}
          >
            Generate
          </Button>
        </div>
        {lastGeneratedValue && <QrResult>{lastGeneratedValue}</QrResult>}
      </div>
    </div>
  );
};

export default DefaultScan;

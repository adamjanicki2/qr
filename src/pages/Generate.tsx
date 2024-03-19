import { useState } from "react";
import QrResult from "src/components/QrResult";
import Button from "src/components/basic/Button";
import Input from "src/components/basic/Input";
import { useDocumentTitle } from "src/hooks";

const DefaultScan = () => {
  useDocumentTitle("Generate QR Code");
  const [value, setValue] = useState("");
  const [lastGeneratedValue, setLastGeneratedValue] = useState("");
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
            }}
            className="ml3"
          >
            Generate
          </Button>
        </div>
        {lastGeneratedValue && (
          <QrResult header="QR">{lastGeneratedValue}</QrResult>
        )}
      </div>
    </div>
  );
};

export default DefaultScan;

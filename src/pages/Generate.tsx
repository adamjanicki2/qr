import { Input, Button, Box } from "@adamjanicki/ui";
import { useState } from "react";
import Page from "src/components/Page";
import QrResult from "src/components/QrResult";
import { useCache, useDocumentTitle } from "src/hooks";

const cacheKey = "last-generated";

const DefaultScan = () => {
  useDocumentTitle("Generate QR Code");
  const [value, setValue] = useState("");
  const { get, set } = useCache<string>();

  const [lastGeneratedValue, setLastGeneratedValue] = useState(get(cacheKey));

  return (
    <Page title="QR Generator">
      <Box
        vfx={{ axis: "y", align: "center", gap: "s" }}
        style={{ width: "min(420px, 90%)" }}
      >
        <Box vfx={{ axis: "x", align: "center", width: "full", gap: "s" }}>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={1000}
            vfx={{ width: "full" }}
            placeholder="Enter text to encode"
          />
          <Button
            onClick={() => {
              setLastGeneratedValue(value);
              set(cacheKey, value);
            }}
            disabled={!value}
          >
            Generate
          </Button>
        </Box>
        {lastGeneratedValue && <QrResult>{lastGeneratedValue}</QrResult>}
      </Box>
    </Page>
  );
};

export default DefaultScan;

import { useState } from "react";
import { Link } from "react-router-dom";
import { findMinifigure } from "src/cmf";
import LegoResult from "src/components/LegoResult";
import { FileUpload } from "src/components/basic/Button";
import { useAlert, useDocumentTitle } from "src/hooks";
import { readFileIntoImage } from "src/util";
import { decodeImage } from "src/util";

const LegoScanImage = () => {
  const { setAlert } = useAlert();
  useDocumentTitle("Upload CMF QR Code");
  const [result, setResult] = useState<string | null>(null);

  return (
    <div className="flex flex-column items-center pb3 ph3 mh">
      <h1 className="page-title-text tc mb0">CMF Scanner - Upload</h1>
      <div className="flex items-center justify-center">
        <Link to="/lego/help" className="fw5 i default-link ma2">
          How to scan CMFs
        </Link>
        <Link to="/lego/camera" className="fw5 i default-link ma2">
          Camera scanner
        </Link>
      </div>

      {result && <LegoResult code={result} />}
      <FileUpload
        accept="image/*"
        onImageChange={async (file) => {
          const imageData = await readFileIntoImage(file);
          const code = decodeImage(imageData);
          if (code === null) {
            return setAlert({ message: "Error reading code!", type: "error" });
          }
          setResult(code);
          const found = !!findMinifigure(code);
          found && setAlert({ message: "Minifig found!", type: "success" });
        }}
      >
        Upload image
      </FileUpload>
    </div>
  );
};

export default LegoScanImage;

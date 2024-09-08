import { useState } from "react";
import { findMinifigure } from "src/cmf";
import LegoResult from "src/components/LegoResult";
import Link from "src/components/basic/Link";
import { UnstyledLoader } from "src/components/Loader";
import { FileUpload } from "src/components/basic/Button";
import { useAlert, useDocumentTitle } from "src/hooks";
import { convertFile, decodeImage } from "src/util";

const LegoScanImage = () => {
  const { setAlert } = useAlert();
  useDocumentTitle("Upload CMF QR Code");
  const [result, setResult] = useState<string | null>();
  const [scanning, setScanning] = useState(false);

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
      {result !== undefined && !scanning && <LegoResult code={result} />}
      {scanning && (
        <div className="flex items-center pa2">
          <UnstyledLoader size="1.5em" />
          <p className="ml2 f5 fw4">Scanning...</p>
        </div>
      )}

      <FileUpload
        accept="image/png, image/jpeg, image/jpg, image/webp"
        onImageChange={async (file) => {
          setScanning(true);
          const base64Url = await convertFile(file);
          const code = await decodeImage(base64Url);
          setScanning(false);
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

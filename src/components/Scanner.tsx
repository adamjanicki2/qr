import { useCallback, useEffect, useRef } from "react";

import QrScanner from "qr-scanner";

type Props = {
  show: boolean;
  onScan: (result: string) => void;
  onError?: (error: Error) => void;
  stopOnScan?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const Scanner = ({
  show,
  onScan,
  onError,
  stopOnScan = true,
  className,
  style = {},
}: Props) => {
  const scanner = useRef<QrScanner>();
  const videoEl = useRef<HTMLVideoElement>(null);

  const stopScanner = useCallback(() => {
    scanner?.current?.stop();
    scanner?.current?.destroy();
    scanner.current = undefined;
  }, []);

  const startScanner = useCallback(() => {
    const onScanSuccess = (result: QrScanner.ScanResult) => {
      stopOnScan && stopScanner();
      onScan(result.data);
    };

    if (videoEl?.current && !scanner?.current) {
      scanner.current = new QrScanner(videoEl?.current, onScanSuccess, {
        preferredCamera: "environment",
        highlightScanRegion: true,
        maxScansPerSecond: 5,
      });
      scanner?.current?.start().then().catch(onError);
    }
  }, [onError, onScan, stopOnScan, stopScanner]);

  useEffect(() => {
    if (show) {
      startScanner();
    }
    const videoNode = videoEl?.current;
    return () => {
      if (!videoNode) {
        stopScanner();
      }
    };
  }, [show, startScanner, stopScanner]);

  return (
    <video
      ref={videoEl}
      style={{
        width: show ? "90vw" : 0,
        height: show ? "70vh" : 0,
        display: show ? undefined : "none",
        ...style,
      }}
      className={className}
    />
  );
};

export default Scanner;

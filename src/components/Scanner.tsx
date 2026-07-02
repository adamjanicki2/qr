import { Box, ui } from "@adamjanicki/ui";
import {
  BrowserMultiFormatReader,
  BarcodeFormat,
  DecodeHintType,
} from "@zxing/library";
import { useEffect, useRef } from "react";
import target from "src/img/target.svg";

type Props = {
  onScan: (result: string) => void;
  onError?: (error: unknown) => void;
};

const Scanner = ({ onScan, onError }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const readerRef = useRef<BrowserMultiFormatReader | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const trackRef = useRef<MediaStreamTrack | null>(null);

  const onScanRef = useRef(onScan);
  const onErrorRef = useRef(onError);

  useEffect(() => {
    onScanRef.current = onScan;
    onErrorRef.current = onError;
  });

  const zoomRef = useRef(1);

  const initialPinchDistance = useRef<number | null>(null);
  const initialZoom = useRef(1);

  const lastScan = useRef<string | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 2) {
      return;
    }

    initialPinchDistance.current = getDistance(e.touches);
    initialZoom.current = zoomRef.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length !== 2 || initialPinchDistance.current === null) {
      return;
    }

    const distance = getDistance(e.touches);

    const scale = distance / initialPinchDistance.current;

    const nextZoom = Math.min(Math.max(initialZoom.current * scale, 1), 5);

    zoomRef.current = nextZoom;

    trackRef.current
      ?.applyConstraints({
        advanced: [{ zoom: nextZoom } as any],
      })
      .catch();
  };

  const handleTouchEnd = () => {
    initialPinchDistance.current = null;
  };

  useEffect(() => {
    const reader = new BrowserMultiFormatReader(
      new Map([
        [
          DecodeHintType.POSSIBLE_FORMATS,
          [BarcodeFormat.QR_CODE, BarcodeFormat.DATA_MATRIX],
        ],
      ]),
    );

    readerRef.current = reader;

    let active = true;

    (async () => {
      try {
        const video = videoRef.current;
        if (!video) {
          return;
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
          },
        });

        if (!active) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current = stream;
        trackRef.current = stream.getVideoTracks()[0];

        video.srcObject = stream;
        await video.play();

        reader.decodeFromStream(stream, video, (result) => {
          if (!result) {
            return;
          }

          const text = result.getText();

          if (lastScan.current === text) {
            return;
          }

          lastScan.current = text;

          onScanRef.current(text);

          setTimeout(() => {
            lastScan.current = null;
          }, 1000);
        });
      } catch (e) {
        onErrorRef.current?.(e);
      }
    })();

    return () => {
      active = false;

      readerRef.current?.reset?.();

      streamRef.current?.getTracks().forEach((t) => t.stop());

      streamRef.current = null;
      trackRef.current = null;
    };
  }, []);

  return (
    <Box
      vfx={{ pos: "relative" }}
      style={{
        width: "90vw",
        height: "60vh",
        touchAction: "none",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ui.video
        ref={videoRef}
        playsInline
        muted
        autoPlay
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <ui.img
        src={target}
        alt=""
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "30vh",
          height: "30vh",
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

const getDistance = (touches: React.TouchList) => {
  const a = touches[0];
  const b = touches[1];

  if (!a || !b) {
    return 0;
  }

  return Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
};

export default Scanner;

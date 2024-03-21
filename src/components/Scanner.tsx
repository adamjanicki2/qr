import { useZxing } from "react-zxing";
import target from "src/img/target.svg";

type Props = {
  onScan: (result: string) => void;
  onError?: (error: Error) => void;
  className?: string;
  style?: React.CSSProperties;
};

const Scanner = ({ onScan, onError, className = "", style = {} }: Props) => {
  const { ref } = useZxing({
    onDecodeResult: (result) => {
      onScan(result.getText());
    },
    onError,
  });

  return (
    <div
      className={className}
      style={{ position: "relative", width: "90vw", height: "60vh", ...style }}
    >
      <video ref={ref} style={{ width: "100%", height: "100%" }} />
      <img
        src={target}
        alt=""
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "30vh",
          height: "30vh",
        }}
      />
    </div>
  );
};

export default Scanner;

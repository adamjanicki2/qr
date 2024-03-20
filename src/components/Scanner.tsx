import { useZxing } from "react-zxing";

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
    <video
      ref={ref}
      style={{
        width: "90vw",
        height: "60vh",
        ...style,
      }}
      className={`br3 ${className}`}
    />
  );
};

export default Scanner;

import { Box, ui } from "@adamjanicki/ui";
import { useZxing } from "react-zxing";
import target from "src/img/target.svg";
// import { hints } from "src/util";

type Props = {
  onScan: (result: string) => void;
  onError?: (error: unknown) => void;
};

const Scanner = ({ onScan, onError }: Props) => {
  const { ref } = useZxing({
    onDecodeResult: (result) => {
      onScan(result.getText());
    },
    onError,
    // hints,
  });

  return (
    <Box vfx={{ pos: "relative" }} style={{ width: "90vw", height: "60vh" }}>
      <ui.video ref={ref} style={{ width: "100%", height: "100%" }} />
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
        }}
      />
    </Box>
  );
};

export default Scanner;

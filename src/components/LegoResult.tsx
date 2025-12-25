import { Icon, ui } from "@adamjanicki/ui";
import { Popover } from "@adamjanicki/ui-extended";
import { findMinifigure, Minifigure, seriesLabel } from "src/cmf";

type Props = {
  code: string | null;
  open: boolean;
  triggerRef: React.RefObject<HTMLElement | null>;
};

const NOT_FOUND: Minifigure = {
  name: "Figure not found",
  image: "https://images.brickset.com/sets/images/71011-4.jpg?201601061139",
  codes: [],
};

const notFoundText = (code: string | null) =>
  code === null ? (
    "No code detected"
  ) : (
    <>
      Oops! We couldn't find your code:
      <ui.br />
      <ui.strong>{code}</ui.strong>
    </>
  );

const LegoResult = ({ code, ...props }: Props) => {
  let minifigure = findMinifigure(code);
  const notFound = minifigure === null;
  minifigure ||= NOT_FOUND;

  return (
    <Popover
      {...props}
      vfx={{ axis: "y", align: "center" }}
      placement="top"
      offset={4}
    >
      <ui.img
        src={minifigure.image}
        alt=""
        style={{ maxHeight: "40vh", maxWidth: "80vw" }}
      />
      <ui.h1
        vfx={{
          axis: "x",
          align: "center",
          gap: "xs",
          fontSize: "m",
          fontWeight: 7,
          textAlign: "center",
          margin: "none",
        }}
      >
        <Icon
          icon={notFound ? "warning-circle" : "check-circle"}
          className={notFound ? "red" : "green"}
        />
        {minifigure.name}
      </ui.h1>
      <ui.p
        vfx={{
          margin: "none",
          fontWeight: 5,
          textAlign: "center",
          color: "muted",
        }}
      >
        {!notFound ? seriesLabel(minifigure.series!) : notFoundText(code)}
      </ui.p>
    </Popover>
  );
};

export default LegoResult;

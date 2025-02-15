import { Popover } from "@adamjanicki/ui-extended";
import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { findMinifigure, Minifigure, seriesLabel } from "src/cmf";

type Props = {
  code: string | null;
  open: boolean;
  triggerRef: React.RefObject<HTMLElement>;
};

const NOT_FOUND: Minifigure = {
  name: "Figure not found",
  image: "https://images.brickset.com/sets/images/71011-4.jpg?201601061139",
  codes: [],
};

const notFoundText = (code: string | null) =>
  code === null ? (
    <>No code detected</>
  ) : (
    <>
      Oops! We couldn't find your code: <br /> <strong>{code}</strong>
    </>
  );

const LegoResult = ({ code, ...props }: Props) => {
  let minifigure = findMinifigure(code);
  const notFound = minifigure === null;
  minifigure ||= NOT_FOUND;

  return (
    <Popover
      {...props}
      placement="top"
      className="flex flex-column items-center br3 ba b--moon-gray pa3 bg-white"
      style={{ maxWidth: "max-content", zIndex: 1000 }}
      offset={4}
    >
      <img
        src={minifigure.image}
        alt=""
        style={{
          maxHeight: "45vh",
        }}
      />
      <h1 className="f3 fw7 mb1 tc">
        <FontAwesomeIcon
          icon={notFound ? faCircleExclamation : faCircleCheck}
          className={`mr1 ${notFound ? "red" : "green"}`}
        />
        {minifigure.name}
      </h1>
      <p className="mv0 f5 fw5 tc" style={{ lineHeight: 1.3 }}>
        {!notFound ? seriesLabel(minifigure.series) : notFoundText(code)}
      </p>
    </Popover>
  );
};

export default LegoResult;

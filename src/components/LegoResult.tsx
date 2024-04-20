import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { findMinifigure, Minifigure, seriesLabel } from "src/cmf";

type Props = {
  code: string | null;
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

const LegoResult = ({ code }: Props) => {
  let minifigure = findMinifigure(code);
  const notFound = minifigure === null;
  minifigure ||= NOT_FOUND;
  return (
    <div
      className="flex flex-column items-center br3 ph3 mb2"
      style={{ maxWidth: "max-content" }}
    >
      <img
        src={minifigure.image}
        alt=""
        style={{
          maxHeight: "45vh",
        }}
        className="br3 ba b--moon-gray"
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
        <br />
        {!notFound && <em className="f6">({code})</em>}
      </p>
    </div>
  );
};

export default LegoResult;

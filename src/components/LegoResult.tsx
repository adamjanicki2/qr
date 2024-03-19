import { findMinifigure, Minifigure, seriesLabel } from "src/cmf";

type Props = {
  code: string;
};

const NOT_FOUND: Minifigure = {
  name: "Figure not found",
  image: "https://images.brickset.com/sets/images/71011-4.jpg?201601061139",
  codes: [],
};

const notFoundText = (code: string) => (
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
      className="flex flex-column ba b--moon-gray br3 bg-white pa3 mb2"
      style={{ maxWidth: "min(90vw, 350px)" }}
    >
      <img
        src={minifigure.image}
        alt=""
        style={{
          objectFit: "cover",
          objectPosition: "center",
          maxHeight: "50vh",
        }}
        className="br3"
      />
      <h1 className="f3 fw7">{minifigure.name}</h1>
      <p className="mv0 f5 fw4">
        {!notFound ? seriesLabel(minifigure.series) : notFoundText(code)}
      </p>
    </div>
  );
};

export default LegoResult;

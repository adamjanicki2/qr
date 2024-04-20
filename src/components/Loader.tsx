import { ReactComponent as Spinner } from "src/img/spinner.svg";
import "src/components/loader.css";

const Loader = () => (
  <div className="flex items-center justify-center default-color">
    <UnstyledLoader size="2em" />
  </div>
);

type Props = {
  size: string;
  className?: string;
};
export const UnstyledLoader = ({ size, className = "" }: Props) => (
  <Spinner
    className={`loader default-fill ${className}`}
    style={{ height: size }}
  />
);

export default Loader;

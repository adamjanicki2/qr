import { useDocumentTitle } from "src/hooks";

const Lego = () => {
  useDocumentTitle("Lego");
  return (
    <div className="flex flex-column pb3 ph3 mh">
      <h1 className="page-title-text tc">Lego</h1>
      <p className="tc f4 fw4">Coming soon...</p>
    </div>
  );
};

export default Lego;

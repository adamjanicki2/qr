import { useDocumentTitle } from "src/hooks";

const Lego = () => {
  useDocumentTitle("Lego");
  return (
    <div className="flex flex-column pb3 ph3" style={{ height: "70vh" }}>
      <h1 className="f1 tc">Lego</h1>
      <p className="tc f4 fw4">Coming soon...</p>
    </div>
  );
};

export default Lego;

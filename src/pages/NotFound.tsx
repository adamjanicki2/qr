import { ui } from "@adamjanicki/ui";
import Page from "src/components/Page";

const NotFound = () => {
  return (
    <Page title="404">
      <ui.p>Oops! This page could not be found.</ui.p>
    </Page>
  );
};

export default NotFound;

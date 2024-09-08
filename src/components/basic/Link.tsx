import { Link as DOMLink } from "react-router-dom";
import { UnstyledLink } from "@adamjanicki/ui";
import React from "react";

type Props = React.ComponentProps<typeof UnstyledLink>;
export default function Link(props: Props) {
  return <UnstyledLink LinkElement={DOMLink} {...props} />;
}

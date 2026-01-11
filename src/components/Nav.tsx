import {
  Box,
  TripleFade as Hamburger,
  Link,
  ui,
  UnstyledLink,
} from "@adamjanicki/ui";
import { useState } from "react";
import "src/components/nav.css";
import Logo from "src/img/logo.svg?react";

type NavlinkProps = {
  to: string;
  children: React.ReactNode;
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const Navlink = (props: NavlinkProps) => (
    <Link
      vfx={{ width: "full", fontWeight: 5, color: "default" }}
      style={{ whiteSpace: "nowrap" }}
      onClick={closeMenu}
      {...props}
    />
  );

  return (
    <ui.nav vfx={{ paddingY: "s", paddingX: "l" }}>
      <Box
        vfx={{ axis: "x", align: "center", justify: "between" }}
        className="bar-container"
      >
        <UnstyledLink
          vfx={{ axis: "x", align: "center", gap: "s" }}
          className="nav-title"
          to="/"
          onClick={closeMenu}
        >
          <Logo height="40px" width="40px" />
          QR Scanner
        </UnstyledLink>
        <Box className="mobile">
          <Hamburger open={open} onClick={() => setOpen(!open)} />
        </Box>
      </Box>
      <Box
        className="desktop navlink-container"
        // force display to be open on mobile when hamburger is toggled
        style={open ? { display: "flex" } : undefined}
      >
        <Navlink to="/scan">Scan</Navlink>
        <Navlink to="/generate">Generate</Navlink>
        <Navlink to="/lego/camera">Lego</Navlink>
        <Navlink to="/gallery">Gallery</Navlink>
        <Navlink to="/about">About</Navlink>
      </Box>
    </ui.nav>
  );
}

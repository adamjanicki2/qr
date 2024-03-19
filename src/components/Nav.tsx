import { useEffect, useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import "src/components/nav.css";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "src/img/logo.svg";

type NavlinkProps = {
  to: string;
  children: React.ReactNode;
};

const Nav = () => {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const Navlink = ({ to, children }: NavlinkProps) => (
    <li className="navlink-li">
      <Link className="navlink" to={to} onClick={closeMenu}>
        <span>{children}</span>
      </Link>
    </li>
  );

  return (
    <nav
      className={`flex items-center justify-between w-100 bg-yellow nav pv2 ph4`}
      id="nav"
    >
      <div className="flex items-center justify-between bar-container">
        <Link className="nav-title flex items-center" to="/">
          <Logo height="40px" width="40px" />
          <span className="desktop ml2">QR Scanner</span>
        </Link>
        <div className="mobile">
          <Hamburger
            toggled={open}
            onToggle={() => setOpen(!open)}
            direction="left"
            size={24}
            duration={0.3}
          />
        </div>
      </div>
      <ul
        className={`flex items-center desktop link-container`}
        style={{ display: open ? "flex" : undefined }}
      >
        <Navlink to="/scan">Scan</Navlink>
        <Navlink to="/generate">Generate</Navlink>
        <Navlink to="/lego">Lego</Navlink>
        <Navlink to="/about">About</Navlink>
      </ul>
    </nav>
  );
};

export default Nav;

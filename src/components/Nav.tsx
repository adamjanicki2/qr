import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import "src/components/nav.css";

type NavlinkProps = {
  to: string;
  children: React.ReactNode;
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const Navlink = ({ to, children }: NavlinkProps) => (
    <li className="navlink-li">
      <a className="navlink" href={to} onClick={closeMenu}>
        <span>{children}</span>
      </a>
    </li>
  );

  return (
    <>
      <nav
        className={`flex items-center justify-between w-100 bg-near-black white nav pv2 ph4`}
        id="nav"
      >
        <div className="flex items-center justify-between bar-container">
          <a className="nav-title" href="#home">
            React skeleton
          </a>
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
          <Navlink to="#home">Home</Navlink>
        </ul>
      </nav>
      <div className="nav-padding" />
    </>
  );
};

export default Nav;

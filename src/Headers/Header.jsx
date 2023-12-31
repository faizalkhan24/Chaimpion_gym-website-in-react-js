import React, { useState } from "react";
import "./Header.css";
import Logo from "../assets/logo.png";
import Bars from "../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpenned, setMenuOpenned] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpenned === false && mobile === true ? (
        <div onClick={() => setMenuOpenned(true)}>
          <img
            src={Bars}
            alt=""
            style={{ height: "1.5rem", width: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpenned(false)}
              to="home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpenned(false)}
              to="program"
              span={true}
              smooth={true}
            >
              Program
            </Link></li>
          <li>
            <Link
              onClick={() => setMenuOpenned(false)}
              to="resons"
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpenned(false)}
              to="plans"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpenned(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;

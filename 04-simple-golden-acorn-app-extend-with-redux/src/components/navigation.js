import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/simple/states"> With States </NavLink>
        </li>
        <li>
          <NavLink to="/simple/redux"> With Redux </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

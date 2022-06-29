import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navigation">
      <div className="brand-title">
        <Link className="router-link" to="/">
          {" "}
          Sophia Yuna Cheong{" "}
        </Link>
      </div>
      <div className="navigation-links">
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link className="router-link" to="/">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li className="nav-list-item">
            <Link className="router-link" to="/community">
              {" "}
              Community{" "}
            </Link>
          </li>
          <li className="nav-list-item">
            <Link className="router-link" to="/about">
              {" "}
              About{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

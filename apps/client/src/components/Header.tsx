import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="site-navbar" role="banner">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-4 site-logo">
            <a href="/">
              <img
                src={logo}
                alt="SharkTankPedia"
                className="img-responsive logoShark"
              />
            </a>
          </div>
          <div className="col-8 text-right">
            <nav className="site-navigation" role="navigation">
              <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block mb-0">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">Sharks</a>
                </li>
                <li>
                  <a href="category.html">Season</a>
                </li>
              </ul>
            </nav>
            <a
              href="/"
              className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"
            >
              <span className="icon-menu h3"></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

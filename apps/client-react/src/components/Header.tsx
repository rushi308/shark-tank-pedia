import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {

  const onMobileMenuClick = () => {
    document.body.classList.toggle('offcanvas-menu', true);
  }


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
                  <a href="/about-sharks">Sharks</a>
                </li>
                {/* <li>
                  <a href="category.html">Season</a>
                </li> */}
              </ul>
            </nav>
            <div
              className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"
            >
              <span className="icon-menu h3" onClick={() => onMobileMenuClick()}></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

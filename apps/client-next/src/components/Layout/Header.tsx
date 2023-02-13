import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import Link from "next/link";

const Header = () => {
  const onMobileMenuClick = () => {
    document.body.classList.toggle("offcanvas-menu", true);
  };

  return (
    <header className="site-navbar" role="banner">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-4 site-logo">
            <Link href="/">
              <Image
                src={logo}
                alt="SharkTankPedia"
                className="img-responsive logoShark"
                height={100}
              />
            </Link>
          </div>
          <div className="col-8 text-right">
            <nav className="site-navigation" role="navigation">
              <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block mb-0">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-sharks">Sharks</Link>
                </li>
                {/* <li>
                  <a href="category.html">Season</a>
                </li> */}
              </ul>
            </nav>
            <div className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none">
              <span
                className="icon-menu h3"
                onClick={() => onMobileMenuClick()}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

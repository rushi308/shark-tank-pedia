import React from "react";

function MobileMenu() {

  const onMobileMenuClose = () => {
    document.body.classList.toggle('offcanvas-menu', false);
  }

  return (
    <div className="site-mobile-menu">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle" onClick={() => onMobileMenuClose()}></span>
        </div>
      </div>
      <div className="site-mobile-menu-body">
        <ul className="site-nav-wrap">
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
      </div>
    </div>
  );
}

export default MobileMenu;

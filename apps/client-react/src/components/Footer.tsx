import React from "react";

function Footer() {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4">
            <h3 className="footer-heading mb-4">About Us</h3>
            <p className="text-white">
              You may discover more about the products showcased on Shark Tank India by visiting SharkTankPedia.in
            </p>
          </div>
          <div className="col-md-4 ml-auto">
            {/* <ul className="list-unstyled float-left mr-5">
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Advertise</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Subscribes</a>
              </li>
            </ul> */}
          </div>
          <div className="col-md-4">
            <div>
              <h3 className="footer-heading mb-4">Connect With Us</h3>
              <p>
                <a href="/">
                  <span className="icon-facebook pt-2 pr-2 pb-2 pl-0"></span>
                </a>
                <a href="/">
                  <span className="icon-twitter p-2"></span>
                </a>
                <a href="https://www.instagram.com/sharktankpedia/" target="_blank" rel="noreferrer">
                  <span className="icon-instagram p-2"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-white">
              Copyright ©
              <script>document.write(new Date().getFullYear());</script>2023 All
              rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
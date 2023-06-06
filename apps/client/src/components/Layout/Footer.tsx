import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4">
            <h3 className="footer-heading mb-4">About Us</h3>
            <p className="text-white">
              On Shark Tank Pedia, we will share infromation of the pitchers who
              have come to Shark Tank India. We wish to use a digital platform
              to display written data, graphical sales and statistic overviews,
              and statistics in order to become a source of inspiration. We
              enjoy media technology.And we want to offer motivational content
              while making that work available to everyone.
            </p>
          </div>
          <div className="col-md-4 ml-auto">
            <ul className="list-unstyled float-left mr-5">
              <li>
                <a href="/privacyPolicy" style={{ color: "#fff" }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/disclaimer" style={{ color: "#fff" }}>
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="/aboutUs" style={{ color: "#fff" }}>
                  About us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div>
              <h3 className="footer-heading mb-4">Connect With Us</h3>
              <p>
                <Link
                  href="https://www.facebook.com/sharktankpedia.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-facebook pt-2 pr-2 pb-2 pl-0"></span>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/sharktankpedia-in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-linkedin p-2"></span>
                </Link>
                <Link
                  href="https://www.instagram.com/sharktankpedia.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-instagram p-2"></span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-white">Copyright © 2023 All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

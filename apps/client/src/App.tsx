import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/aos.css";
import "./assets/css/style_1.css";

function App() {
  return (
    <div className="App">
      <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>
        <header className="site-navbar" role="banner">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-12 search-form-wrap js-search-form">
                <form method="get" action="#">
                  <input
                    type="text"
                    id="s"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <button className="search-btn" type="submit">
                    <span className="icon-search"></span>
                  </button>
                </form>
              </div>
              <div className="col-4 site-logo">
                <a href="index.html" className="text-black h2 mb-0">
                  Mini Blog
                </a>
              </div>
              <div className="col-8 text-right">
                <nav className="site-navigation" role="navigation">
                  <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block mb-0">
                    <li>
                      <a href="category.html">Home</a>
                    </li>
                    <li>
                      <a href="category.html">Politics</a>
                    </li>
                    <li>
                      <a href="category.html">Tech</a>
                    </li>
                    <li>
                      <a href="category.html">Entertainment</a>
                    </li>
                    <li>
                      <a href="category.html">Travel</a>
                    </li>
                    <li>
                      <a href="category.html">Sports</a>
                    </li>
                    <li className="d-none d-lg-inline-block">
                      <a href="#" className="js-search-toggle">
                        <span className="icon-search"></span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <a
                  href="#"
                  className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"
                >
                  <span className="icon-menu h3"></span>
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="site-section bg-light">
          <div className="container">
            <div className="row align-items-stretch retro-layout-2">
              <div className="col-md-4">
                <a
                  href="single.html"
                  className="h-entry mb-30 v-height gradient"
                >
                  <div className="text">
                    <h2>
                      The AI magically removes moving objects from videos.
                    </h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </a>
                <a href="single.html" className="h-entry v-height gradient">
                  <div className="text">
                    <h2>
                      The AI magically removes moving objects from videos.
                    </h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a href="single.html" className="h-entry img-5 h-100 gradient">
                  <div className="text">
                    <div className="post-categories mb-3">
                      <span className="post-category bg-danger">Travel</span>
                      <span className="post-category bg-primary">Food</span>
                    </div>
                    <h2>
                      The AI magically removes moving objects from videos.
                    </h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="single.html"
                  className="h-entry mb-30 v-height gradient"
                >
                  <div className="text">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </a>
                <a href="single.html" className="h-entry v-height gradient">
                  <div className="text">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12">
                <h2>Recent Posts</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html">
                    <img
                      src="https://images.hindustantimes.com/img/2022/02/10/550x309/Shark-Tank-India-judges-earnings-per-episode_1644490488481_1644490509511.jpg"
                      alt="Image"
                      className="img-fluid rounded"
                    />
                  </a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-secondary mb-3">
                      Politics
                    </span>
                    <h2>
                      <a href="single.html">
                        The AI magically removes moving objects from videos.
                      </a>
                    </h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <span className="d-inline-block mt-1">
                        By <a href="#">Carrol Atkinson</a>
                      </span>
                      <span> -  July 19, 2019</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quo sunt tempora dolor laudantium sed optio, explicabo ad
                      deleniti impedit facilis fugit recusandae! Illo, aliquid,
                      dicta beatae quia porro id est.
                    </p>
                    <p>
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html">
                    <img
                      src="https://images.hindustantimes.com/img/2022/02/10/550x309/Shark-Tank-India-judges-earnings-per-episode_1644490488481_1644490509511.jpg"
                      alt="Image"
                      className="img-fluid rounded"
                    />
                  </a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-success mb-3">
                      Nature
                    </span>
                    <h2>
                      <a href="single.html">
                        The AI magically removes moving objects from videos.
                      </a>
                    </h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <span className="d-inline-block mt-1">
                        By <a href="#">Carrol Atkinson</a>
                      </span>
                      <span> -  July 19, 2019</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quo sunt tempora dolor laudantium sed optio, explicabo ad
                      deleniti impedit facilis fugit recusandae! Illo, aliquid,
                      dicta beatae quia porro id est.
                    </p>
                    <p>
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html">
                    <img
                      src="https://images.hindustantimes.com/img/2022/02/10/550x309/Shark-Tank-India-judges-earnings-per-episode_1644490488481_1644490509511.jpg"
                      alt="Image"
                      className="img-fluid rounded"
                    />
                  </a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-warning mb-3">
                      Travel
                    </span>
                    <h2>
                      <a href="single.html">
                        The AI magically removes moving objects from videos.
                      </a>
                    </h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <span className="d-inline-block mt-1">
                        By <a href="#">Carrol Atkinson</a>
                      </span>
                      <span> -  July 19, 2019</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quo sunt tempora dolor laudantium sed optio, explicabo ad
                      deleniti impedit facilis fugit recusandae! Illo, aliquid,
                      dicta beatae quia porro id est.
                    </p>
                    <p>
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html">
                    <img
                      src="ihttps://images.hindustantimes.com/img/2022/02/10/550x309/Shark-Tank-India-judges-earnings-per-episode_1644490488481_1644490509511.jpg"
                      alt="Image"
                      className="img-fluid rounded"
                    />
                  </a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-secondary mb-3">
                      Politics
                    </span>
                    <h2>
                      <a href="single.html">
                        The AI magically removes moving objects from videos.
                      </a>
                    </h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <span className="d-inline-block mt-1">
                        By <a href="#">Carrol Atkinson</a>
                      </span>
                      <span> -  July 19, 2019</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quo sunt tempora dolor laudantium sed optio, explicabo ad
                      deleniti impedit facilis fugit recusandae! Illo, aliquid,
                      dicta beatae quia porro id est.
                    </p>
                    <p>
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html">
                    <img
                      src="https://images.hindustantimes.com/img/2022/02/10/550x309/Shark-Tank-India-judges-earnings-per-episode_1644490488481_1644490509511.jpg"
                      alt="Image"
                      className="img-fluid rounded"
                    />
                  </a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-success mb-3">
                      Nature
                    </span>
                    <h2>
                      <a href="single.html">
                        The AI magically removes moving objects from videos.
                      </a>
                    </h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <span className="d-inline-block mt-1">
                        By <a href="#">Carrol Atkinson</a>
                      </span>
                      <span> -  July 19, 2019</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quo sunt tempora dolor laudantium sed optio, explicabo ad
                      deleniti impedit facilis fugit recusandae! Illo, aliquid,
                      dicta beatae quia porro id est.
                    </p>
                    <p>
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html">
                    <img
                      src="https://images.hindustantimes.com/img/2022/02/10/550x309/Shark-Tank-India-judges-earnings-per-episode_1644490488481_1644490509511.jpg"
                      alt="Image"
                      className="img-fluid rounded"
                    />
                  </a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-danger mb-3">
                      Sports
                    </span>
                    <h2>
                      <a href="single.html">
                        The AI magically removes moving objects from videos.
                      </a>
                    </h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <span className="d-inline-block mt-1">
                        By <a href="#">Carrol Atkinson</a>
                      </span>
                      <span> -  July 19, 2019</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quo sunt tempora dolor laudantium sed optio, explicabo ad
                      deleniti impedit facilis fugit recusandae! Illo, aliquid,
                      dicta beatae quia porro id est.
                    </p>
                    <p>
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="entry2">
                  <a href="single.html">
                    <img
                      src="https://images.hindustantimes.com/img/2022/02/10/550x309/Shark-Tank-India-judges-earnings-per-episode_1644490488481_1644490509511.jpg"
                      alt="Image"
                      className="img-fluid rounded"
                    />
                  </a>
                  <div className="excerpt">
                    <span className="post-category text-white bg-success mb-3">
                      Nature
                    </span>
                    <h2>
                      <a href="single.html">
                        The AI magically removes moving objects from videos.
                      </a>
                    </h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <span className="d-inline-block mt-1">
                        By <a href="#">Carrol Atkinson</a>
                      </span>
                      <span> -  July 19, 2019</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quo sunt tempora dolor laudantium sed optio, explicabo ad
                      deleniti impedit facilis fugit recusandae! Illo, aliquid,
                      dicta beatae quia porro id est.
                    </p>
                    <p>
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-center pt-5 border-top">
              <div className="col-md-12">
                <div className="custom-pagination">
                  <span>1</span>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <span>...</span>
                  <a href="#">15</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4">
            <h3 className="footer-heading mb-4">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat reprehenderit magnam deleniti quasi
              saepe, consequatur atque sequi delectus dolore veritatis obcaecati quae, repellat eveniet omnis,
              voluptatem in. Soluta, eligendi, architecto.</p>
          </div>
          <div className="col-md-3 ml-auto">

            <ul className="list-unstyled float-left mr-5">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Subscribes</a></li>
            </ul>
            <ul className="list-unstyled float-left">
              <li><a href="#">Travel</a></li>
              <li><a href="#">Lifestyle</a></li>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Nature</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <div>
              <h3 className="footer-heading mb-4">Connect With Us</h3>
              <p>
                <a href="#"><span className="icon-facebook pt-2 pr-2 pb-2 pl-0"></span></a>
                <a href="#"><span className="icon-twitter p-2"></span></a>
                <a href="#"><span className="icon-instagram p-2"></span></a>
                <a href="#"><span className="icon-rss p-2"></span></a>
                <a href="#"><span className="icon-envelope p-2"></span></a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>

              Copyright ©
              <script>document.write(new Date().getFullYear());</script>2023 All rights reserved | This template is made
              with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com"
                target="_blank" rel="noreferrer">Colorlib</a>

            </p>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default App;

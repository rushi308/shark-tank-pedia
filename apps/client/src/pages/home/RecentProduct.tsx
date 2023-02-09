function Title() {
  return (
    <div className="row mb-5">
      <div className="col-12">
        <h2>Recent Posts</h2>
      </div>
    </div>
  );
}

function Products() {
  const products = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
  ];

  return (
    <>
      <div className="row">
        {products?.map((item) => (
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  sunt tempora dolor laudantium sed optio, explicabo ad deleniti
                  impedit facilis fugit recusandae! Illo, aliquid, dicta beatae
                  quia porro id est.
                </p>
                <p>
                  <a href="#">Read More</a>
                </p>
              </div>
            </div>
          </div>
        ))}
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
    </>
  );
}

function RecentProduct() {
  return (
    <>
      <div className="site-section">
        <div className="container">
          <Title />
          <Products />
        </div>
      </div>
    </>
  );
}

export default RecentProduct;

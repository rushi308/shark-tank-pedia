import { useEffect, useState } from "react";
import { Product } from "@/schema";
import { convertDate, myLoader } from "../../utils/util";
import { loaderRef } from "../../components/Spinner";
import { Helmet } from "react-helmet";
import Image from "next/image";
import Link from "next/link";
// import searchImage from "../../assets/images/search.png";
// import { Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";

type ProductListProp = {
  products: Product[];
};

type ShowMoreProp = {
  onClick: () => void;
};

function Search() {
  return (
    <div className="row mb-5">
      <div className="col-md-12 col-xs-12 col-s-12 text-center">
        <input
          type="text"
          placeholder="Search your favourite products..."
          name="text"
          className="search-input"
        />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="row">
      <div className="col-md-12 col-xs-12 col-s-12">
        <h2 style={{ textAlign: "center" }}>Recent Products</h2>
      </div>
    </div>
  );
}

function ProductList({ products }: ProductListProp) {
  return (
    <>
      <div className="row">
        {products?.map((product: Product) => (
          <div className="col-lg-4 mb-4" key={product?.companyName}>
            <Helmet key={product.title}>
              <meta charSet="utf-8" />
              <meta name="description" content={product.productDetails} />
              <meta name="og:image" content={product.productImage} />
              <meta name="og:title" content={product.title} />
            </Helmet>
            <div className="entry2" key={product?.companyName + product.title}>
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product?.productImage || ""}
                  alt="..."
                  loader={myLoader}
                  className="img-fluid rounded recentProductImage"
                  width={100}
                  height={100}
                />
              </Link>
              <div className="excerpt">
                {product?.categories?.map((item, index) => (
                  <>
                    <span
                      key={item}
                      className={`post-category text-white ${
                        index === 0 ? "bg-success" : "bg-warning"
                      }   mb-3 mr-2`}
                    >
                      {item}
                    </span>
                  </>
                ))}

                <h2>
                  S{product?.season} Episode {product?.episode} -{" "}
                  {product?.title ? (
                    <Link href={`/product/${product.id}`}>
                      {" "}
                      {product?.title.substring(0, 50) + "..."}
                    </Link>
                  ) : (
                    ""
                  )}
                </h2>

                <div
                  className="post-meta align-items-center text-left clearfix"
                  key={product.title + "post-meta"}
                >
                  <span className="d-inline-block mt-1 mb-3">
                    By <Link href="/">SharkTankPedia</Link>
                  </span>
                  <span>
                    {" -"} {convertDate(product?.createdAt ?? "")}
                  </span>
                </div>
                <p>
                  {product?.productDetails
                    ? product?.productDetails.substring(0, 150) + "..."
                    : ""}
                </p>
                <p>
                  <Link href={`/product/${product.id}`}>Read More</Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function ShowMore({ onClick }: ShowMoreProp) {
  return (
    <div className="row text-center pt-5" onClick={onClick}>
      <div className="col-md-12">
        <div className="custom-pagination">
          <input type="submit" className="btn btn-primary" value="Show More" />
        </div>
      </div>
    </div>
  );
}

type RecentProductProp = {
  recentProducts: Product[];
};

function RecentProduct({ recentProducts }: RecentProductProp) {
  const [productsList, setProductsList] = useState<Product[]>();
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 18,
    start: 0,
    totalPages: 0,
    end: 0,
  });

  useEffect(() => {
    loaderRef?.current?.show();
    const fetchProducts = async () => {
      setPagination({
        ...pagination,
        start: (pagination.page - 1) * pagination.limit,
        end: pagination.page * pagination.limit,
        totalPages: Math.ceil(recentProducts.length / pagination.limit),
      });
      loaderRef?.current?.hide();
    };

    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setProductsList(recentProducts.slice(pagination.start, pagination.end));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  const onClick = () => {
    // eslint-disable-next-line prefer-const
    let { page, limit } = pagination;
    page += 1;
    setPagination({
      ...pagination,
      page,
      start: (page - 1) * limit,
      end: page * limit,
    });
    setProductsList([
      ...(productsList || []),
      ...recentProducts.slice(pagination.start, pagination.end),
    ]);
  };

  return (
    <>
      <div className="site-section">
        <div className="container">
          <Title />
          {/* <Search /> */}
          <ProductList products={productsList || []} />
          {pagination.totalPages !== pagination.page && (
            <ShowMore onClick={onClick} />
          )}
        </div>
      </div>
    </>
  );
}

export default RecentProduct;

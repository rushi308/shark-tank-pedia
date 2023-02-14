import { useEffect, useState } from "react";
import { getProducts } from "../../utils/api/client";
import { Product } from "sharktankpedia-schema";
import { convertDate } from "../../utils/util";
import { loaderRef } from "../../components/Spinner";
import { Helmet } from "react-helmet";

type ProductListProp = {
  products: Product[];
};

type ShowMoreProp = {
  onClick: () => void;
};

function Title() {
  return (
    <div className="row mb-5">
      <div className="col-12">
        <h2>Recent Products</h2>
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
            <Helmet>
              <meta charSet="utf-8" />
              <title>{product.title}</title>
              <meta name="description" content={product.productDetails} />
              <meta name="og:image" content={product.productImage} />
            </Helmet>
            <div className="entry2">
              <a href={`/product/${product.id}`}>
                <img
                  src={product?.productImage}
                  alt="..."
                  className="img-fluid rounded recentProductImage"
                />
              </a>
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
                    <a href={`/product/${product.id}`}>
                      {" "}
                      {product?.title.substring(0, 50) + "..."}
                    </a>
                  ) : (
                    ""
                  )}
                </h2>

                <div className="post-meta align-items-center text-left clearfix">
                  <span className="d-inline-block mt-1 mb-3">
                    By <a href="/">SharkTankPedia</a>
                  </span>
                  <span> -  {convertDate(product?.createdAt ?? "")}</span>
                </div>
                <p>
                  {product?.productDetails
                    ? product?.productDetails.substring(0, 150) + "..."
                    : ""}
                </p>
                <p>
                  <a href={`/product/${product.id}`}>Read More</a>
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

function RecentProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
    start: 0,
    totalPages: 0,
    end: 0,
  });

  useEffect(() => {
    loaderRef?.current?.show();
    const fetchProducts = async () => {
      const results = await getProducts(1000, false);
      setProducts(results.products);
      setPagination({
        ...pagination,
        start: (pagination.page - 1) * pagination.limit,
        end: pagination.page * pagination.limit,
        totalPages: Math.ceil(results.products.length / pagination.limit),
      });
      loaderRef?.current?.hide();
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setProductsList(products.slice(pagination.start, pagination.end));
  }, [pagination]);

  const onClick = () => {
    let { page, limit } = pagination;
    page += 1;
    setPagination({
      ...pagination,
      page,
      start: (page - 1) * limit,
      end: page * limit,
    });
    setProductsList([
      ...productsList,
      ...products.slice(pagination.start, pagination.end),
    ]);
  };

  return (
    <>
      <div className="site-section">
        <div className="container">
          <Title />
          <ProductList products={productsList} />
          {pagination.totalPages !== pagination.page && (
            <ShowMore onClick={onClick} />
          )}
        </div>
      </div>
    </>
  );
}

export default RecentProduct;

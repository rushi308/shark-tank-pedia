import { useEffect, useState } from "react";
import { getProducts } from "../../utils/api/client";
import { Product } from "sharktankpedia-schema";
import { convertDate } from "../../utils/util";
import { loaderRef } from "../../components/Spinner";
import { Helmet } from "react-helmet";

type ProductListProp = {
  products: Product[];
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
          <div className="col-lg-4 mb-4" key={product?.id}>
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
      {products.length >= 6 && (
        <div className="row text-center pt-5">
          <div className="col-md-12">
            <div className="custom-pagination">
              <input
                type="submit"
                className="btn btn-primary"
                value="Show More"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function RecentProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    loaderRef?.current?.show();
    const fetchProducts = async () => {
      const results = await getProducts(10, false);
      setProducts(results.products);
      loaderRef?.current?.hide();
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="site-section">
        <div className="container">
          <Title />
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
}

export default RecentProduct;

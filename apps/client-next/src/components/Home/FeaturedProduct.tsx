import { useState } from "react";
import { Product } from "sharktankpedia-schema";
import { convertDate } from "../../utils/util";
import { Helmet } from "react-helmet";

type ProductListProp = {
  products: Product[];
};

function ProductList({ products }: ProductListProp) {
  return (
    <>
      <div className="row align-items-stretch retro-layout-2">
        <div className="col-md-4">
          {products.map(
            (product, index) =>
              (index === 0 || index === 1) && (
                <div key={product?.companyName}>
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>{product.title}</title>
                    <meta name="description" content={product.productDetails} />
                    <meta name="og:image" content={product.productImage} />
                  </Helmet>
                  <a
                    key={product?.id}
                    href={`/product/${product.id}`}
                    className="h-entry mb-30 v-height gradient"
                    style={{ backgroundImage: `url(${product.productImage})` }}
                  >
                    <div className="text">
                      <h2>
                        {" "}
                        {product?.title
                          ? product?.title.substring(0, 65) + "..."
                          : ""}
                      </h2>
                      <span className="date">
                        {convertDate(product?.createdAt ?? "")}
                      </span>
                    </div>
                  </a>
                </div>
              )
          )}
        </div>
        <div className="col-md-4">
          {products.map(
            (product, index) =>
              index === 2 && (
                <>
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>{product.title}</title>
                    <meta name="description" content={product.productDetails} />
                    <meta name="og:image" content={product.productImage} />
                  </Helmet>
                  <a
                    key={product?.companyName}
                    href={`/product/${product.id}`}
                    className="h-entry img-5 gradient"
                    style={{
                      backgroundImage: `url(${product.productImage})`,
                      height: "93.5%",
                    }}
                  >
                    <div className="text">
                      <h2>
                        {" "}
                        {product?.title
                          ? product?.title.substring(0, 65) + "..."
                          : ""}
                      </h2>
                      <span className="date">
                        {convertDate(product?.createdAt ?? "")}
                      </span>
                    </div>
                  </a>
                </>
              )
          )}
        </div>
        <div className="col-md-4">
          {products.map(
            (product, index) =>
              (index === 3 || index === 4) && (
                <div key={product?.companyName}>
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>{product.title}</title>
                    <meta name="description" content={product.productDetails} />
                    <meta name="og:image" content={product.productImage} />
                  </Helmet>
                  <a
                    key={product?.id}
                    href={`/product/${product.id}`}
                    className="h-entry mb-30 v-height gradient"
                    style={{ backgroundImage: `url(${product.productImage})` }}
                  >
                    <div className="text">
                      <h2>
                        {" "}
                        {product?.title
                          ? product?.title.substring(0, 65) + "..."
                          : ""}
                      </h2>
                      <span className="date">
                        {convertDate(product?.createdAt ?? "")}
                      </span>
                    </div>
                  </a>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

type FeaturedProductsProps = {
  featuredProducts: Product[];
};

function FeaturedProduct({ featuredProducts }: FeaturedProductsProps) {
  const [products] = useState<Product[]>(featuredProducts);

  return (
    <>
      <div className="site-section bg-light">
        <div className="container">
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
}

export default FeaturedProduct;

import { useEffect, useState } from "react";
import { getProducts } from "../../utils/api/client";
import { Product } from "sharktankpedia-schema";
import { convertDate } from "../../utils/util";
import { loaderRef } from "../../components/Spinner";

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
              )
          )}
        </div>
        <div className="col-md-4">
          {products.map(
            (product, index) =>
              index === 2 && (
                <a
                  key={product?.id}
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
              )
          )}
        </div>
        <div className="col-md-4">
          {products.map(
            (product, index) =>
              (index === 3 || index === 4) && (
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
              )
          )}
        </div>
      </div>
    </>
  );
}

function FeaturedProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    loaderRef?.current?.show();
    const fetchProducts = async () => {
      const results = await getProducts(NaN, true);
      setProducts(results.products);
      loaderRef?.current?.hide();
    };

    fetchProducts();
  }, []);

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

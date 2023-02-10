import { useEffect, useState } from "react";
import { getProducts } from "../../utils/api/client";
import { Products, Product } from "sharktankpedia-schema";
import { convertDate } from "../../utils/util";

type ProductListProp = {
  products: Product[];
};
function Title() {
  return (
    <div className="row mb-5">
      <div className="col-12">
        <h2>Recent Posts</h2>
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
            <div className="entry2">
              <a href="single.html">
                <img
                  src={product?.productImage}
                  alt="Image"
                  className="img-fluid rounded"
                />
              </a>
              <div className="excerpt">
                {product?.categories?.map((item) => (
                  <>
                    <span className="post-category text-white bg-success mb-3">
                      {item}
                    </span>
                  </>
                ))}

                <h2>{product?.title ?? ""}</h2>
                <div className="post-meta align-items-center text-left clearfix">
                  <span className="d-inline-block mt-1 mb-3">
                    By <a href="#">{product?.founders ?? ""}</a>
                  </span>
                  <span> -  {convertDate(product?.createdAt ?? "")}</span>
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
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const results = await getProducts(10, false);
      setProducts(results.products);
      console.log(results.products);
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

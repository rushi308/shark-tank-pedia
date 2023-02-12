import { useEffect, useState } from "react";
import { Product } from "sharktankpedia-schema";
import { loaderRef } from "../../components/Spinner";
import { getProductDetail } from "../../utils/api/client";
import { useParams } from "react-router-dom";
import { convertDate } from "../../utils/util";
import {
  Card,
  CardBody,
  CardFooter,
  // CardTitle,
  Row,
  Col,
  // Button,
  // CardHeader,
} from "reactstrap";
import { Helmet } from "react-helmet";

import "../../assets/css/paper-dashboard.css";

const ProductDetail = () => {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  // const backgrounds = [
  //   "bg-primary",
  //   "bg-danger",
  //   "bg-warning",
  //   "bg-info",
  //   "bg-success",
  // ];

  useEffect(() => {
    loaderRef?.current?.show();
    const fetchProducts = async () => {
      if (id) {
        const product = await getProductDetail(id);
        console.log(product, "--");
        setProduct(product);
      }
      loaderRef?.current?.hide();
    };

    fetchProducts();
  }, [id]);

  const isImportantLink = (product: Product) => {
    if (product.amazonLink || product.appStoreLink || product.website) {
      return true;
    }
    return false;
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{product?.title}</title>
        <meta name="description" content={product?.productDetails} />
        <meta name="og:image" content={product?.productImage} />
      </Helmet>
      <div
        className="site-cover site-cover-sm same-height overlay single-page coverBg"
        style={{
          backgroundImage: `url(https://i.pinimg.com/originals/4d/7d/57/4d7d57c57a18a708860cca50e98e00f5.gif)`,
        }}
      >
        <div className="container">
          <div className="row same-height justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="post-entry text-center">
                <h2 className="mb-4 mt-4">
                  <a href="/">{product?.companyName}</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="post-meta float-right">
                <span className="d-inline-block mt-1">By SharkTankPedia</span>
                <span>
                  &nbsp;-&nbsp; {convertDate(product?.createdAt ?? "")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="site-section py-lg"
        style={{ backgroundColor: "#f4f3ef" }}
      >
        <div className="container mb-4">
          <div className="row blog-entries element-animate">
            <div className="col-md-4 img-responsive">
              <img
                src={product?.productImage}
                className="w-100"
                alt="Product"
              />
            </div>
            <div className="col-md-8 col-lg-8 main-content">
              <div className="post-content-body">
                <p className="text-align-justify">{product?.productDetails}</p>
              </div>
              <div className="pt-2">
                <p>
                  <b className="mr-2">
                    {product?.categories && product?.categories.length > 1
                      ? "Categories:"
                      : "Category:"}
                  </b>
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
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Row>
            <Col
              lg={product && isImportantLink(product) ? "4" : "6"}
              md="6"
              sm="6"
            >
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="12" xs="12" className="text-center">
                      <i
                        className="nc-icon nc-single-02 text-warning"
                        style={{ fontSize: "3em" }}
                      />
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <h6
                      className="text-center"
                      style={{ textTransform: "capitalize", color: "#000" }}
                    >
                      {product?.founders}
                    </h6>
                    <p>{product?.story}</p>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col
              lg={product && isImportantLink(product) ? "4" : "6"}
              md="6"
              sm="6"
            >
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="12" xs="12" className="text-center">
                      <i
                        className="nc-icon nc-bullet-list-67 text-info"
                        style={{ fontSize: "3em" }}
                      />
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <h6
                      className="text-center"
                      style={{ textTransform: "capitalize", color: "#000" }}
                    >
                      Highlights
                    </h6>
                    {product?.productFeatures?.map((pf) => (
                      <p className="p-card">👉 {pf} </p>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </Col>
            {product && isImportantLink(product) && (
              <Col lg="4" md="6" sm="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="12" xs="12" className="text-center">
                        <i
                          className="nc-icon nc-align-center text-danger"
                          style={{ fontSize: "3em" }}
                        />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <h6
                        className="text-center"
                        style={{ textTransform: "capitalize", color: "#000" }}
                      >
                        Important Links
                      </h6>
                      {product?.website ? (
                        <p className="p-card">
                          <a
                            href={product?.website}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="ctaButton">
                              <span>Visit Website</span>
                              <svg
                                viewBox="0 0 13 10"
                                height="10px"
                                width="15px"
                              >
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                              </svg>
                            </button>
                          </a>
                        </p>
                      ) : (
                        <></>
                      )}
                      {product?.amazonLink ? (
                        <p className="p-card">
                          <button className="ctaButton">
                            <span>Buy on Amazon</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                              <path d="M1,5 L11,5"></path>
                              <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                          </button>
                        </p>
                      ) : (
                        <></>
                      )}
                      {product?.flipkartLink ? (
                        <button className="ctaButton">
                          <span>Buy on Flipkart</span>
                          <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                          </svg>
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            )}
          </Row>
        </div>
        <div className="container">
          <Row>
            <Col md="6" className="text-center">
              <div className="card" style={{ width: "100%" }}>
                <div className={`card-header bg-warning`}>
                  <h6 className="mt-2 ">Original Ask</h6>
                </div>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {product?.originalAsk}
                  </h5>
                </div>
              </div>
            </Col>
            <Col md="6" className="text-center">
              <div className="card" style={{ width: "100%" }}>
                <div className={`card-header bg-success`}>
                  <h6 className="mt-2">
                    Deal Closed{" "}
                    {product?.dealClosed &&
                      "with " + product.dealClosed.sharkName}
                  </h6>
                </div>
                <div className="card-body">
                  {product?.dealClosed ? (
                    <h5 className="card-title" style={{ fontWeight: "bold" }}>
                      {product?.dealClosed?.amount} for{" "}
                      {product?.dealClosed?.equity}% &nbsp;
                      {product?.dealClosed?.debt
                        ? product?.dealClosed?.debt &&
                          "& " +
                            product?.dealClosed?.debt +
                            " Debt for " +
                            product?.dealClosed?.debtInterest +
                            "%"
                        : ""}
                    </h5>
                  ) : (
                    <h5 className="card-title" style={{ fontWeight: "bold" }}>
                      No Deal
                    </h5>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;

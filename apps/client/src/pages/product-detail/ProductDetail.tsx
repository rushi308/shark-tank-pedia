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

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{product?.title}</title>
        <meta name="description" content={product?.productDetails} />
        <meta name="og:image" content={product?.productImage} />
      </Helmet>
      <div
        className="site-cover site-cover-sm same-height overlay single-page"
        style={{
          backgroundImage: `url(https://news.northeastern.edu/wp-content/uploads/2022/07/great_white_1400.jpg)`,
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
                <p>{product?.productDetails}</p>
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
            <Col lg="4" md="6" sm="6">
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
            <Col lg="4" md="6" sm="6">
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
                        🌎{" "}
                        <a
                          href={product?.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Website
                        </a>{" "}
                      </p>
                    ) : (
                      <></>
                    )}
                    {product?.amazonLink ? (
                      <p className="p-card">
                        🛒{" "}
                        <a
                          href={product?.amazonLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Amazon
                        </a>
                      </p>
                    ) : (
                      <></>
                    )}
                    {product?.flipkartLink ? (
                      <p className="p-card">
                        🛍️{" "}
                        <a
                          href={product?.flipkartLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Flipkart
                        </a>
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </Col>
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

        {/* <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="text-center mb-5">Statistics</h1>

              <div className="row">
                {product?.statistics?.map((s, index) => (
                  <div className="col-md-6 col-lg-6 mt-2">
                    <div className="card" style={{ width: "100%" }}>
                      <div
                        className={`card-header ${backgrounds[index]} text-white`}
                      >
                        {s.name}
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{s.value}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Capacity</p>
                        <CardTitle tag="p">150GB</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <i className="nc-icon nc-money-coins text-success" />
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Revenue</p>
                        <CardTitle tag="p">$ 1,345</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-calendar" /> Last day
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Errors</p>
                        <CardTitle tag="p">23</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-clock" /> In the last hour
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Followers</p>
                        <CardTitle tag="p">+45K</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div> */}
      </section>
    </>
  );
};

export default ProductDetail;

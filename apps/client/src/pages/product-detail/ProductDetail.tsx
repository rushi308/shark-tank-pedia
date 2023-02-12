import { useEffect, useState } from "react";
import { Product, MetaData } from "sharktankpedia-schema";
import { loaderRef } from "../../components/Spinner";
import { getProductDetail } from "../../utils/api/client";
import { useParams } from "react-router-dom";
import { convertDate } from "../../utils/util";
import { Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";
import { Card, CardBody, CardFooter, Row, Col } from "reactstrap";
import { Helmet } from "react-helmet";

import "../../assets/css/paper-dashboard.css";
import useAnalytics from "../../utils/analytics/useAnalytics";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  height: 500,
  width: 500,
};

const ProductDetail = () => {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  const [labels, setLabels] = useState([]);
  const [value, setValue] = useState([]);
  const [convertedSalesValues, setConvertedSalesValues] = useState([]);
  const [unitEconomicsLabel, setUnitEconomicsLabel] = useState([]);
  const [unitEconomicsValue, setUnitEconomicsValue] = useState([]);
  const [convertedUnitEconomicsValue, setConvertedUnitEconomicsValue] =
    useState([]);
    useAnalytics();
  const data = {
    labels: labels,
    datasets: [
      {
        label: `${
          convertedSalesValues?.length > 0
            ? (convertedSalesValues[0] as string).split(" ")[1]
            : ""
        }`,
        data: convertedSalesValues.map((values: any) => values.split(" ")[0]),
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const unitEconomicsData = {
    labels: unitEconomicsLabel,
    datasets: [
      {
        label: `${
          unitEconomicsValue?.length > 0
            ? (unitEconomicsValue[0] as string).split(" ")[1]
            : ""
        }`,
        data: convertedUnitEconomicsValue,
        backgroundColor: [
          "rgba(255, 99, 132,0.85)",
          "rgba(54, 162, 235,0.85)",
          "rgba(255, 206, 86,0.85)",
          "rgba(75, 192, 192,0.85)",
          "rgba(153, 102, 255,0.85)",
          "rgba(255, 159, 64,0.85)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

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

  useEffect(() => {
    if (value) {
      let unit = "Lakhs";
      let conversionFactor = 1;

      const valuesInCrores = value.filter((v: any) => v.includes("Crore"));

      if (valuesInCrores.length >= 2) {
        unit = "Crore";
        conversionFactor = 0.01;
      }

      const convertedValues = value.map((v: any) => {
        if (v.includes(unit)) {
          return v;
        } else {
          let number = parseFloat(v.split(" ")[0]);
          return (number * conversionFactor).toFixed(2) + " " + unit;
        }
      });
      setConvertedSalesValues(convertedValues as any);
    }
  }, [value]);

  useEffect(() => {
    if (product && product?.sales) {
      const salesLabel: any = [];
      const salesValue: any = [];
      product?.sales?.map((sale: any) => {
        salesLabel.push(sale.name);
        salesValue.push(sale.value);
      });

      setLabels(salesLabel);
      setValue(salesValue);
    }
    if (product && product?.unitEconomics) {
      const label: any = [];
      const value: any = [];
      const convertedValue: any = [];
      product?.unitEconomics
        ?.filter((_item: MetaData, index: number) => index > 0)
        ?.map((unit: any) => {
          label.push(unit.name);
          value.push(unit.value);
          convertedValue.push(unit.value.split(" ")[0]);
        });
      setUnitEconomicsLabel(label);
      setUnitEconomicsValue(value);
      setConvertedUnitEconomicsValue(convertedValue);
    }
  }, [product]);
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
        <div className="container mt-4">
          <Row>
            <Col md="6" className="text-center">
              <div className="card" style={{ width: "100%" }}>
                <div className={`card-header bg-warning`}>
                  <h6 className="mt-2 ">Original Ask</h6>
                </div>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {`${product?.originalAsk} Equity`}
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
        <div className="container mt-4">
          <Row>
            {product &&
              product?.unitEconomics &&
              product?.unitEconomics?.length > 0 && (
                <Col md="4" className="text-center">
                  <div className="card" style={{ width: "100%" }}>
                    <div className={`card-header bg-ue`}>
                      <h6 className="mt-2 ">{`Unit Economics (${product?.unitEconomics[0]?.name} : ${product?.unitEconomics[0]?.value})`}</h6>
                    </div>
                    <div className="card-body">
                      <div
                        style={{
                          height: "300px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="text-center"
                      >
                        <Doughnut data={unitEconomicsData} />;
                      </div>
                    </div>
                  </div>
                </Col>
              )}
            {product && product?.sales && product?.sales?.length > 0 && (
              <Col md="4" className="text-center">
                <div className="card" style={{ width: "100%" }}>
                  <div className={`card-header bg-info`}>
                    <h6 className="mt-2 ">Sale and Revenue</h6>
                  </div>
                  <div className="card-body">
                    <div
                      style={{
                        height: "300px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      className="text-center"
                    >
                      <Pie data={data} />
                    </div>
                  </div>
                </div>
              </Col>
            )}

            <Col md="4" className="text-center">
              <div className="card" style={{ width: "100%" }}>
                <div className={`card-header bg-ue`}>
                  <h6 className="mt-2 ">Sales Split</h6>
                </div>
                <div className="card-body">
                  <div
                    style={{
                      height: "300px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    className="text-center"
                  ></div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container mt-4">
          {product &&
            product?.statistics &&
            product?.statistics?.length > 0 && (
              <Row>
                <Col md="6">
                  <div className="card" style={{ width: "100%" }}>
                    <div className={`card-header bg-statistics`}>
                      <h6 className="mt-2 text-center">Statistics</h6>
                    </div>
                    <div className="card-body">
                      <div className="statistics-wrapper">
                        <ol role="list">
                          {product?.statistics?.map((statistic: any) => (
                            <li>
                              <h6
                                className="pt-2"
                                style={{ textTransform: "capitalize" }}
                              >{`${statistic.name} : ${statistic.value}`}</h6>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            )}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;

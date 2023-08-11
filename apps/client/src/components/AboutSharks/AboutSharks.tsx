// import useAnalytics from "../../utils/analytics/useAnalytics";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "reactstrap";
import anupamImage from "../../assets/images/anupamMittal.jpeg";

import amitImage from "../../assets/images/amitJain.jpeg";
import peyushImage from "../../assets/images/peyushBansal.jpeg";
import namitaImage from "../../assets/images/namitaThapar.jpeg";
import vineetaImage from "../../assets/images/vineetaSingh.jpeg";
import amanImage from "../../assets/images/amanGupta.jpeg";
import Image from "next/image";
// import { myLoader } from "@/utils/util";

function AboutSharks() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Shark Tank India Sharks</title>
        {/* <meta name="description" content={product.productDetails} />
              <meta name="og:image" content={product.productImage} /> */}
      </Helmet>
      <div className="mb-4">
        <div
          className="site-cover site-cover-sm same-height overlay single-page coverBg"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/originals/4d/7d/57/4d7d57c57a18a708860cca50e98e00f5.gif)",
          }}
        >
          <div className="container">
            <div className="row same-height justify-content-center">
              <div className="col-md-12 col-lg-10">
                <div className="post-entry text-center">
                  <h2 className="mb-4 mt-4">About Sharks</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container className="mt-4">
          <Row>
            <Col md="6">
              <div className="shark-card">
                <div>
                  <Image
                    src={anupamImage}
                    height={200}
                    className="shark-image"
                    width={200}
                    alt="Anupam Mittal"
                  />
                </div>
                <div className="shark-card-info">
                  <h5 className="shark-text-title">Anupam Mittal</h5>
                  <p className="shark-text-body">
                    Anupam Mittal founded People Group, which runs Shaadi.com,
                    India&apos;s largest matrimonial site. He&apos;s a notable
                    entrepreneur in India, but there&apos;s no evidence
                    he&apos;s appeared on &quot;Shark Tank India&quot;. To find
                    Indian entrepreneurs who have appeared on the show, check
                    its official website or search for &quot;Shark Tank
                    India&quot;.
                  </p>
                </div>
              </div>
            </Col>

            <Col md="6">
              <div className="shark-card">
                <div>
                  <Image
                    src={amitImage}
                    height={200}
                    className="shark-image"
                    width={200}
                    alt="Amit Jain"
                  />
                </div>
                <div className="shark-card-info">
                  <h5 className="shark-text-title">Amit Jain</h5>
                  <p className="shark-text-body">
                    Amit Jain is a co-founder of CarDekho.com, an Indian online
                    platform for buying and selling cars. CarDekho was founded
                    in 2008 and has since grown to become one of the largest
                    auto portals in India. Jain is a well-known entrepreneur in
                    India and has been featured on several media outlets and in
                    various events.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <div className="shark-card">
                <Image
                  src={peyushImage}
                  height={200}
                  className="shark-image"
                  width={200}
                  alt="Peyush Bansal"
                />
                <div className="shark-card-info">
                  <h5 className="shark-text-title">Peyush Bansal</h5>
                  <p className="shark-text-body">
                    Peyush Bansal is the founder of Lenskart.com, an Indian
                    online eyewear retailer. Before Lenskart, he worked in tech
                    companies in India and the US. Bansal&apos;s innovative
                    ideas have made Lenskart a popular brand, and it offers a
                    variety of eyewear products. He&apos;s helped to change the
                    way people buy eyewear in India.
                  </p>
                </div>
              </div>
            </Col>

            <Col md="6">
              <div className="shark-card">
                <Image
                  src={namitaImage}
                  height={200}
                  className="shark-image"
                  width={200}
                  alt="Namita Thapar"
                />
                <div className="shark-card-info">
                  <h5 className="shark-text-title">Namita Thapar</h5>
                  <p className="shark-text-body">
                    Namita Thapar is the Vice President of Emcure
                    Pharmaceuticals in India, where she has worked for over 20
                    years. She&apos;s involved in social initiatives, including
                    the Emcure Cares Foundation, and is committed to improving
                    healthcare and education in India. Thapar has received
                    recognition for her contributions to the pharmaceutical
                    industry and is a role model for women in business.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <div className="shark-card">
                <Image
                  src={vineetaImage}
                  height={200}
                  className="shark-image"
                  width={200}
                  alt="Vineeta Singh"
                />
                <div className="shark-card-info">
                  <h5 className="shark-text-title">Vineeta Singh</h5>
                  <p className="shark-text-body">
                    Vineeta Singh founded Sugar Cosmetics after identifying a
                    gap in the Indian beauty market. The brand offers
                    affordable, high-quality makeup products and has over 200
                    stores in 110 cities in India. The company is known for its
                    vibrant packaging and innovative product offerings.
                  </p>
                </div>
              </div>
            </Col>

            <Col md="6">
              <div className="shark-card">
                <Image
                  src={amanImage}
                  height={200}
                  className="shark-image"
                  width={200}
                  alt="Aman Gupta"
                />
                <div className="shark-card-info">
                  <h5 className="shark-text-title">Aman Gupta</h5>
                  <p className="shark-text-body">
                    Aman Gupta is the co-founders of boAt, an Indian consumer
                    electronics company that offers affordable, high-quality
                    audio products. Their innovative approach to filling a gap
                    in the market has made boAt one of the leading audio brands
                    in India.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutSharks;

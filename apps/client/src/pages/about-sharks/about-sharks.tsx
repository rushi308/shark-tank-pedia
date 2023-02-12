import useAnalytics from "../../utils/analytics/useAnalytics";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "reactstrap";
import anupamImage from "../../assets/images/anupamMittal.webp";
import amitImage from "../../assets/images/amitJain.jpeg";
import peyushImage from "../../assets/images/peyushBansal.jpeg";
import namitaImage from "../../assets/images/namita.jpeg";
import vineetaImage from "../../assets/images/vineetaSingh.jpeg";
import amanImage from "../../assets/images/amanGupta.jpeg";

function AboutSharks() {
  useAnalytics();
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
            backgroundImage: `url(https://i.pinimg.com/originals/4d/7d/57/4d7d57c57a18a708860cca50e98e00f5.gif)`,
          }}
        >
          <div className="container">
            <div className="row same-height justify-content-center">
              <div className="col-md-12 col-lg-10">
                <div className="post-entry text-center">
                  <h2 className="mb-4 mt-4">
                    <a href="/">About Sharks</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container className="mt-4">
          <Row>
            <Col md="6">
              <img src={anupamImage} className="sharkImage" alt="Anupam Mittal" />
            </Col>
            <Col md="6">
              <h2 className="p-0 m-0">Anupam Mittal</h2>
              <p className="mt-0 p-0 text-align-justify">
                Anupam Mittal is the founder of the Indian online dating
                platform, People Group, which operates several websites
                including Shaadi.com, the largest Indian matrimonial site.
                Mittal is a well-known entrepreneur in India and has been
                featured on several media outlets and in various events. I
                couldn't find any information that suggests he has appeared on
                the Indian version of "Shark Tank", however. If you're looking
                for information on entrepreneurs who have appeared on the Indian
                version of "Shark Tank", you may want to check out the show's
                official website or do a search for "Shark Tank India" or "Shark
                Tank India entrepreneurs".
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="mt-4">
          <Row>
            <Col md="6">
              <img src={amitImage} className="sharkImage" alt="Amit Jain" />
            </Col>
            <Col md="6">
              <h2 className="p-0 m-0">Amit Jain</h2>
              <p className="mt-0 p-0 text-align-justify">
                Amit Jain is a co-founder of CarDekho.com, an Indian online
                platform for buying and selling cars. CarDekho was founded in
                2008 and has since grown to become one of the largest auto
                portals in India. Jain is a well-known entrepreneur in India and
                has been featured on several media outlets and in various
                events.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="mt-4">
          <Row>
            <Col md="6">
              <img src={peyushImage} className="sharkImage" alt="Peyush Bansal" />
            </Col>
            <Col md="6">
              <h2 className="p-0 m-0">Peyush Bansal</h2>
              <p className="mt-0 p-0 text-align-justify">
                Peyush Bansal is an Indian entrepreneur and the founder of
                Lenskart.com, which is an online retailer of eyewear in India.
                Lenskart was founded in 2010 with the aim of making eyewear more
                accessible and affordable to people in India. The company offers
                a wide range of eyewear products, including spectacles,
                sunglasses, and contact lenses, and has become one of the
                leading eyewear retailers in India.<br/> Peyush Bansal was born in
                India and received his education in computer science and
                engineering. Prior to founding Lenskart, he worked in several
                technology-focused companies in India and the United States.Peyush Bansal is known
                for his entrepreneurial spirit and his ability to bring
                innovative ideas to the eyewear market. Under his leadership,
                Lenskart has become a well-known and respected brand in India,
                and has helped to revolutionize the way people purchase eyewear.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="mt-4">
          <Row>
            <Col md="6">
              <img src={namitaImage} className="sharkImage" alt="Namita Thapar" />
            </Col>
            <Col md="6">
              <h2 className="p-0 m-0">Namita Thapar</h2>
              <p className="mt-0 p-0 text-align-justify">
                Namita thapar info
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="mt-4">
          <Row>
            <Col md="6">
              <img src={vineetaImage} className="sharkImage" alt="Vineeta Singh" />
            </Col>
            <Col md="6">
              <h2 className="p-0 m-0">Vineeta Singh</h2>
              <p className="mt-0 p-0 text-align-justify">
                Vineeta Singh Info
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="mt-4">
          <Row>
            <Col md="6">
              <img src={amanImage} className="sharkImage" alt="Aman Gupta" />
            </Col>
            <Col md="6">
              <h2 className="p-0 m-0">Aman Gupta</h2>
              <p className="mt-0 p-0 text-align-justify">
                Aman Gupta's Info
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutSharks;

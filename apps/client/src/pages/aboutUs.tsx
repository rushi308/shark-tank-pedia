import Layout from "@/components/Layout/Layout";
import { Helmet } from "react-helmet";

export default function AboutusPage() {
  return (
    <>
      <div className="container-fluid">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Us</title>
        </Helmet>
      </div>
      <Layout>
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
                  <h2 className="mb-4 mt-4">About Us</h2>
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
              <div className="col-md-12">
                <p>
                  As the owner of Shark Tank Pedia India, I can tell you that
                  our website is dedicated to providing information and reviews
                  about products that have been featured on the popular TV
                  series, Shark Tank India. Our team works hard to gather
                  information from various sources and provide our readers with
                  comprehensive reviews of each product. Additionally, we also
                  feature interviews and articles about entrepreneurs and their
                  journey towards success. Our aim is to create a one-stop
                  platform for all the information related to Shark Tank
                  products and entrepreneurship in India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

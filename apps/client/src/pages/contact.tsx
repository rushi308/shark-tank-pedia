import { Helmet } from "react-helmet";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";

export default function ContactusPage() {
  return (
    <>
      <div className="container-fluid">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Us</title>
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
                  <h2 className="mb-4 mt-4">Contact</h2>
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
                  Dear valued visitor,
                  <br />
                  <br /> We appreciate your interest in our company and want to
                  make sure you have an easy way to get in touch with us. Please
                  feel free to use any of the following methods to contact us
                  with your questions, comments, or concerns: Email:
                  info.sharktankpedia@gmail.com Our customer service team is
                  available to assist you during regular business hours, Monday
                  through Friday from 9:00 am to 5:00 pm [GMT +5.30]. We will do
                  our best to respond to your inquiries as quickly as possible.
                  Additionally, we invite you to follow us on social media to
                  stay up-to-date with our latest news and promotions:
                  <br />
                  <br />
                  <Link
                    href="https://www.linkedin.com/company/sharktankpedia-in/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                  <br />
                  <Link
                    href="https://www.instagram.com/sharktankpedia.in/"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                  <br />
                  <Link
                    href="https://www.facebook.com/sharktankpedia.in"
                    target="_blank"
                  >
                    Facebook
                  </Link>
                  <br />
                  <br />
                  Thank you for your interest in our company. We look forward to
                  hearing from you!
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

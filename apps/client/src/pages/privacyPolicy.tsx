import { Helmet } from "react-helmet";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="container-fluid">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Privacy Policy</title>
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
                  <h2 className="mb-4 mt-4">Privacy Policy</h2>
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
                  One of our top goals at Shark Tank Pedia, located at{" "}
                  <Link href="/">https://sharktankpedia.in/</Link>, is the
                  privacy of our users. The sorts of information that Shark Tank
                  Pedia collects and records, as well as how we utilise it, are
                  detailed in this privacy policy document. Please get in touch
                  with us if you need more information about our privacy policy
                  or if you have any other questions. The information shared
                  and/or collected in Shark Tank Pedia by visitors to our
                  website is subject to the terms of this Privacy Policy, which
                  only relates to our online activities. Any information
                  gathered offline or through sources other than this website is
                  not covered by this policy.
                </p>
              </div>
              <div className="col-md-12">
                <h3>Consent</h3>
                <p>
                  By using our website, you hereby consent to our Privacy Policy
                  and agree to its terms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

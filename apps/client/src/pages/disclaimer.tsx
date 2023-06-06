import { Helmet } from "react-helmet";

export default function DiscaimerPage() {
  return (
    <>
      <div className="container-fluid">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Disclaimer</title>
        </Helmet>
      </div>
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
                <h2 className="mb-4 mt-4">Disclaimer</h2>
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
                If you require more information or have questions about our
                site’s disclaimer, please contact us by email at
                info.sharktankpedia@gmail.com.
              </p>
            </div>
            <div className="col-md-12">
              <h3>Disclaimers for Shark Tank Pedia</h3>
              <p>
                The entire content of this website, Shark Tank Pedia, is
                published in good faith and solely for informational reasons.
                Regarding the authenticity, dependability, and completeness of
                this information, Shark Tank Pedia makes no guarantees. You
                alone are responsible for any actions you take in reliance on
                the information you discover on this website (Shark Tank Pedia).
                Shark Tank Pedia disclaims all responsibility for any losses
                and/or damages arising from the use of this website.
                <br />
                <br />
                By clicking on links to these external websites from our
                website, you can visit other websites. While we make an effort
                to only connect to trustworthy and ethical websites, we have no
                control over their content or general nature. These references
                to other websites do not imply endorsement of all the
                information contained therein. Before we have a chance to delete
                a link that may have gone "bad," site owners and content are
                subject to change without prior notice.
                <br />
                <br />
                Moreover, be aware that we have no control over the privacy
                policies and agreements of other websites that you may visit
                after leaving ours. Before conducting any business or uploading
                any information, please be sure to review the "Terms of Service"
                and the Privacy Policies of these websites.
              </p>
            </div>
            <div className="col-md-12">
              <h3>Consent</h3>
              <p>
                By using our website, you at this moment consent to our
                disclaimer and agree to its terms.
              </p>
            </div>
            <div className="col-md-12">
              <h3>Update</h3>
              <p>
                Any updates, modifications, or other changes we make to this
                document will be clearly noted here. If you would like to get in
                touch with us, you can do so by sending an email to
                info.sharktankpedia@gmail.com or by using the form on our
                contact page. Visit the Shark Tank Pedia main page. We
                appreciate you viewing our Disclaimer Page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

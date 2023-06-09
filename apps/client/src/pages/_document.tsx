import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <Head>
          <meta
            name="description"
            content="Stay up-to-date with all the latest news, information and highlights from Shark Tank India Season 2. Learn about the contestants, judges, and more."
          />

          <meta
            name="keywords"
            content="Shark Tank India, Season 2, Entrepreneurs, Startups, Investments, Judges, Contestants, Updates, News, Highlights"
          />

          <meta property="og:title" content="Shark Tank Pedia" />
          <meta
            property="og:description"
            content="Stay tuned at sharktankpedia.in,Get the inside sharktankpedia on the latest from Shark Tank India Season 2, including news, updates, and highlights."
          />
          <meta
            property="og:image"
            content="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202301/ezgif-sixteen_nine_11.jpg?size=948:533"
          />
          <meta property="og:url" content="http://sharktankpedia.in" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Shark Tank Pedia" />
          <meta
            name="twitter:description"
            content="Stay ahead of the game with all the latest news, highlights, and updates from Shark Tank India Season 2. Only on SharkTankPedia"
          />
          <meta
            name="twitter:image"
            content="[LINK TO AN IMAGE THAT REPRESENTS THE SHOW]"
          />
          <meta
            name="twitter:creator"
            content="[YOUR TWITTER HANDLE, IF APPLICABLE]"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <Script
          id="Adsense-id-next"
          data-ad-client="ca-pub-7553767508353117"
          async
          strategy="beforeInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <Script
          id="Adsense-id"
          data-ad-client="ca-pub-7553767508353117"
          async
          strategy="beforeInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7553767508353117"
        />
        <Script
          src="https://code.jquery.com/jquery-3.6.3.min.js"
          integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GVWLKK795B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
      
          gtag('config', 'G-GVWLKK795B');
        `}
        </Script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

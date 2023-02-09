import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
// import "./assets/css/aos.css";
import "./assets/css/style_1.css";
import { Amplify } from "aws-amplify";
import { getProducts } from "./utils/api/client";
import MobileMenu from "./components/MobileMenu";
import Header from "./components/Header";
import Pages from "./pages/Pages";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    Amplify.configure({
      aws_project_region: process.env.REACT_APP_AWS_REGION,
      API: {
        aws_appsync_graphqlEndpoint: process.env.REACT_APP_APPSYNC_URL,
        aws_appsync_apiKey: process.env.REACT_APP_APPSYNC_API_KEY,
      },
    });
  });

  useEffect(() => {
    // console.log(
    //   getProductDetail("0d727176-fefc-449f-a977-d080cd2bc46c").then((data) =>{
    //     console.log(data,'--')
    //   })
    // );
    console.log(
      getProducts(10).then((data) => {
        console.log(data, "--");
      })
    );
  });
  return (
    <div className="App">
      <div className="site-wrap">
        <MobileMenu />
        <Header />
        <Pages />
        <Footer />
      </div>
    </div>
  );
}

export default App;

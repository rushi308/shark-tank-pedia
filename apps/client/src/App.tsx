import React, { useEffect } from "react";
import "./App.css";
import "./assets/css/style.css";
import "./assets/css/style_1.css";
import { Amplify } from "aws-amplify";
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

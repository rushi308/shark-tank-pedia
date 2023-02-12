import { useEffect } from "react";
import useAnalytics from "../../utils/analytics/useAnalytics";
import FeaturedProduct from "./FeaturedProduct";
import RecentProduct from "./RecentProduct";

function Home() {

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useAnalytics();
  });
  
  return (
    <>
      <FeaturedProduct />
      <RecentProduct />
    </>
  );
}

export default Home;

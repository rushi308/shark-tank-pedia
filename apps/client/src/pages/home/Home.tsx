import useAnalytics from "../../utils/analytics/useAnalytics";
import FeaturedProduct from "./FeaturedProduct";
import RecentProduct from "./RecentProduct";

function Home() {
  useAnalytics();
 

  return (
    <>
      <FeaturedProduct />
      <RecentProduct />
    </>
  );
}

export default Home;

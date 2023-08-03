// import useAnalytics from "../../utils/analytics/useAnalytics";
import { Product } from "sharktankpedia-schema";
import FeaturedProduct from "./FeaturedProduct";
import RecentProduct from "./RecentProduct";

type HomePageProps = {
  featuredProducts: Product[];
  recentProducts: Product[];
};

function HomePage({ featuredProducts, recentProducts }: HomePageProps) {
  // useAnalytics();

  return (
    <>
      <FeaturedProduct featuredProducts={featuredProducts} />
      <RecentProduct recentProducts={recentProducts} />
    </>
  );
}

export default HomePage;

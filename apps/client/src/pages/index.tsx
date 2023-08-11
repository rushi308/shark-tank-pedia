import HomePage from "@/components/Home/HomePage";
import Layout from "@/components/Layout/Layout";
import { getProducts } from "@/utils/api/client";
import { Product } from "sharktankpedia-schema";

type HomeProps = {
  featuredProducts: Product[];
  recentProducts: Product[];
};

export default function Home({ featuredProducts, recentProducts }: HomeProps) {
  return (
    <>
      <Layout>
        <HomePage
          featuredProducts={featuredProducts}
          recentProducts={recentProducts}
        />
      </Layout>
    </>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export async function getServerSideProps({ req, res }: any) {
  // Call an external API endpoint to get products
  try {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    );
    const featuredProducts = await getProducts(NaN, true);
    const recentProductsResponse = await getProducts(1000, false);
    // Sort By episode as of now
    let recentProducts: Product[] = [];
    if (recentProductsResponse.products.length > 0) {
      recentProducts = recentProductsResponse.products.sort((a, b) => {
        return b.season - a.season || b.episode - a.episode;
      });
    }
    return {
      props: {
        featuredProducts: featuredProducts.products,
        recentProducts: recentProducts,
      },
    };
  } catch (e) {
    console.log(e);
    throw new Error("Error while fetching graphql product data");
  }
}

import HomePage from "@/components/Home/HomePage";
import { loaderRef } from "@/components/Spinner";
import { getProducts } from "@/utils/api/client";
import { Product } from "@/schema";

type HomeProps = {
  featuredProducts: Product[];
  recentProducts: Product[];
};

export default function Home({ featuredProducts, recentProducts }: HomeProps) {
  return (
    <>
      <HomePage
        featuredProducts={featuredProducts}
        recentProducts={recentProducts}
      />
    </>
  );
}
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
        return(a.season - b.season || b.episode - a.episode  )
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

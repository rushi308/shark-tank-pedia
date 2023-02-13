import HomePage from "@/components/Home/HomePage";
import { loaderRef } from "@/components/Spinner";
import { getProducts } from "@/utils/api/client";
import { Product } from "sharktankpedia-schema";

type HomeProps = {
  featuredProducts:Product[],
  recentProducts:Product[]
}

export default function Home({featuredProducts,recentProducts}:HomeProps) {
  return (
    <>
        <HomePage featuredProducts={featuredProducts} recentProducts={recentProducts} />
    </>
  );
}
export async function getServerSideProps() {
  // Call an external API endpoint to get products
  try{
    loaderRef?.current?.show();
    const featuredProducts = await getProducts(NaN, true);
    const recentProducts = await getProducts(1000, false);
    // loaderRef?.current?.hide();
    return {
      props: {
        featuredProducts: featuredProducts.products,
        recentProducts: recentProducts.products
      },
    };
  } catch (e) {
    throw new Error("Error while fetching graphql product data");
  }
  
}
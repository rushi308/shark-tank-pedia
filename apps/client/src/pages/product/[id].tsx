import Layout from "@/components/Layout/Layout";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { getProductDetail } from "@/utils/api/client";
import { Product } from "sharktankpedia-schema";
type ProductDetailProps = {
  productDetail: Product;
};

export default function ProductDetailPage({
  productDetail,
}: ProductDetailProps) {
  return (
    <>
      <Layout>
        <ProductDetail productDetail={productDetail} />
      </Layout>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps(context: any) {
  try {
    const productDetail = await getProductDetail(context.query.id);
    return {
      props: {
        productDetail,
      },
    };
  } catch (e) {
    throw new Error("Error while fetching graphql product detail");
  }
}

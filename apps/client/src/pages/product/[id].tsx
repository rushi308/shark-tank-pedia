import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { getProductDetail } from "@/utils/api/client";
import { Product } from "sharktankpedia-schema";
type ProductDetailProps = {
  productDetail: Product;
};

export default function ProductDetailPage({ productDetail }: ProductDetailProps) {
  return (
    <>
      <ProductDetail productDetail={productDetail} />
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps(context: any) {
  try {
    // loaderRef?.current?.show();
    const productDetail = await getProductDetail(context.query.id);
    // loaderRef?.current?.hide();
    return {
      props: {
        productDetail,
      },
    };
  } catch (e) {
    throw new Error("Error while fetching graphql product detail");
  }
}
import { getProductDetail } from "@/utils/api/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Product } from "sharktankpedia-schema";
import { CreateProduct } from "./createProduct";

export const EditProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (!router.isReady) {
      return; // NOTE: router.query might be empty during initial render
    }
    const getProductDetailCall = async (id: string | undefined | string[]) => {
      if (id && typeof id === "string") {
        setProduct(await getProductDetail(id));
      }
    };
    getProductDetailCall(id);
  }, [id, router.isReady]);

  return product && <CreateProduct product={product} title="Edit Product" />;
};

export default EditProduct;

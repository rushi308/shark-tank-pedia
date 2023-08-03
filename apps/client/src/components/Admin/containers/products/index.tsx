import { Button, Loading, Text } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { Flex } from "../../styles/flex";
import { TableWrapper } from "../../components/table/table";
import { Product } from "sharktankpedia-schema";
import { getProducts } from "@/utils/api/client";
import { useRouter } from "next/router";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]); // [Product]
  const [loading, setLoading] = useState(false); // boolean
  const { push } = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const recentProductsResponse = await getProducts(1000, false);
      let recentProducts: Product[] = [];
      if (recentProductsResponse.products.length > 0) {
        recentProducts = recentProductsResponse.products.sort((a, b) => {
          return a.season - b.season || b.episode - a.episode;
        });
      }
      setProducts(recentProducts);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <Flex
      css={{
        mt: "$5",
        px: "$6",
        "@sm": {
          mt: "$10",
          px: "$16",
        },
      }}
      justify={"center"}
      direction={"column"}
    >
      <Text h3>All Products</Text>
      <Flex direction={"row"} css={{ gap: "$2" }} wrap={"wrap"} justify={"end"}>
        <Button auto onClick={() => push("/admin/products/create")}>
          Add Product
        </Button>
      </Flex>
      {loading ? <Loading /> : <TableWrapper data={products} />}
    </Flex>
  );
};

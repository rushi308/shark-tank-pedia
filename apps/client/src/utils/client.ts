import { API, GraphQLResult } from "@aws-amplify/api";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import {
  GetProductDetailInput,
  GetProductsInput,
  Product,
  ProductDocument,
  ProductQuery,
  Products,
  ProductsDocument,
  ProductsQuery,
  ServerError,
  ValidationError,
} from "sharktankpedia-schema";

async function query<
  TData,
  TVariables extends Record<string, unknown> = Record<string, never>
>(
  operation: TypedDocumentNode<TData, { input: TVariables }>,
  requiresAuth: boolean,
  variables?: TVariables
): Promise<TData> {
  const response = (await API.graphql({
    query: operation,
    variables: variables ? { input: variables } : undefined,
    authMode: "API_KEY",
  })) as GraphQLResult<TData>;

  if (response.errors) {
    throw new Error(
      `Error occurred when calling GraphQL API ${response.errors
        .map((e) => `${e.name}:${e.message}`)
        .join(",")}`
    );
  }

  if (!response.data) {
    throw new Error("No data returned when calling GraphQL API");
  }

  return response.data;
}

export async function getProducts(limit: number): Promise<any> {
  const response = await query<ProductsQuery, GetProductsInput>(
    ProductsDocument,
    false,
    { limit, featured: false }
  );
  if (!response.products) {
    throw new Error("No response found");
  }
  return response.products;
  // switch (response.products.__typename) {
  //   case "Products": {
  //     console.log(response.products);
  //   }
  //   case "ValidationError":
  //     break;
  //   // case "ServerError":
  //   //   return response.products;
  //   // eslint-disable-next-line no-fallthrough
  //   default:
  //     throw new Error("Unable to determine type");
  // }
}

export async function getProductDetail(
  id: string
): Promise<Product | ValidationError | ServerError> {
  const response = await query<ProductQuery, GetProductDetailInput>(
    ProductDocument,
    false,
    { id }
  );
  if (!response.product) {
    throw new Error("No response found");
  }
  switch (response.product.__typename) {
    case "Product": {
      return response.product;
    }
    case "ValidationError":
    case "ServerError":
      return response.product;
    default:
      throw new Error("Unable to determine type");
  }
}

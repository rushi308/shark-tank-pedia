import {
  GetProductDetailInput,
  GetProductsInput,
  ImageInput,
  ImageUploadSuccess,
  MutateImageDocument,
  MutateImageMutation,
  MutateProductDocument,
  MutateProductMutation,
  Product,
  ProductDocument,
  ProductInput,
  ProductQuery,
  Products,
  ProductsDocument,
  ProductsQuery,
  ServerError,
  ValidationError,
} from "sharktankpedia-schema";
import { GraphQLResult } from "@aws-amplify/api";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { withSSRContext } from "aws-amplify";

async function query<
  TData,
  TVariables extends Record<string, unknown> = Record<string, never>
>(
  operation: TypedDocumentNode<TData, { input: TVariables }>,
  requiresAuth: boolean,
  variables?: TVariables
): Promise<TData> {
  const SSR = withSSRContext();
  const response = (await SSR.API.graphql({
    query: operation,
    variables: variables ? { input: variables } : undefined,
    authMode: requiresAuth ? "API_KEY" : "API_KEY",
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

export async function getProducts(
  limit: number,
  featured: boolean
): Promise<Products> {
  const response = await query<ProductsQuery, GetProductsInput>(
    ProductsDocument,
    false,
    { limit, featured }
  );
  if (!response.products) {
    throw new Error("No response found");
  }
  switch (response.products.__typename) {
    case "Products":
      return response.products;
    case "ValidationError":
    case "ServerError":
      throw new Error("Unable to get products: ServerError");
    default:
      throw new Error("Unable to determine type");
  }
}

export async function getProductDetail(id: string): Promise<Product> {
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
      throw new Error("Unable to get products: ServerError");
    default:
      throw new Error("Unable to determine type");
  }
}

export async function mutateProduct(
  input: ProductInput
): Promise<Product | ValidationError | ServerError> {
  const response = await query<MutateProductMutation, ProductInput>(
    MutateProductDocument,
    true,
    input
  );
  if (!response.product) {
    throw new Error("No response found");
  }
  switch (response.product.__typename) {
    case "Product":
      return response.product;
    case "ValidationError":
    case "ServerError":
      return new Error(
        "Unable to mutate product: ServerError"
      ) as unknown as ServerError;
    default:
      throw new Error("Unable to determine type");
  }
}

export async function mutateImage(
  input: ImageInput
): Promise<ImageUploadSuccess | ValidationError | ServerError> {
  const response = await query<MutateImageMutation, ImageInput>(
    MutateImageDocument,
    true,
    input
  );
  if (!response.imageUpload) {
    throw new Error("No response found");
  }
  switch (response.imageUpload.__typename) {
    case "ImageUploadSuccess":
      return response.imageUpload;
    case "ValidationError":
    case "ServerError":
      console.log(response);
      return new Error(
        "Unable to mutate image upload: ServerError"
      ) as unknown as ServerError;
    default:
      throw new Error("Unable to determine type");
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import ValidationError from "./entity/ValidationError";
import logger from "./utils/logger";
import { AppSyncResolverHandler } from "aws-lambda";
import {
  GetProductDetailInput,
  GetProductDetailResult,
  GetProductsInput,
  GetProductsResult,
  MutationImageUploadArgs,
  MutationProductArgs,
  ProductCreationResult,
  ProductInput,
  ImageInput,
  QueryProductArgs,
  QueryProductsArgs,
  ImageUploadResult,
} from "sharktankpedia-schema";
import ProductUsecase from "./usecase/product";
import DynamoDBAdapter from "./adapter/ddb";
import ServerError from "./entity/ServerError";
import S3Adapter from "./adapter/s3";
// import ProductNotFoundError from "./entity/ProductNotFoundError";
const ddbAdapter = new DynamoDBAdapter();
const s3Adapter = new S3Adapter();

const productUsecase = new ProductUsecase(ddbAdapter, s3Adapter);

export const handler: AppSyncResolverHandler<
  | MutationProductArgs
  | QueryProductArgs
  | QueryProductsArgs
  | MutationImageUploadArgs
  | undefined,
  | ProductCreationResult
  | GetProductDetailResult
  | GetProductsResult
  | ImageUploadResult
> = async (event: any, context: any) => {
  logger.defaultMeta = {
    awsRequestId: context.awsRequestId,
    fieldName: event.info.fieldName,
    type: event.info.parentTypeName,
  };

  try {
    switch (event.info.fieldName) {
      case "product": {
        // Get Product Detail
        if (event.info.parentTypeName === "Query") {
          return await productUsecase.getProductDetail(
            event.arguments?.input as GetProductDetailInput
          );
        }
        return await productUsecase.mutateProduct(
          event.arguments?.input as ProductInput
        );
      }

      case "products": {
        return await productUsecase.getProducts(
          event.arguments?.input as GetProductsInput
        );
      }

      case "imageUpload": {
        return await productUsecase.mutateImage(
          event.arguments?.input as ImageInput
        );
      }

      default:
        throw new ServerError(
          `Called with unknown fieldName: ${event.info.fieldName}, reqId:${context.awsRequestId}`
        );
    }
  } catch (e) {
    if (e instanceof ValidationError) {
      logger.warn("API Failure Invalid", {
        input: event.arguments?.input,
        errorMessage: e.message,
        data: e.data,
      });

      return {
        __typename: "ValidationError",
        message: e.message,
        data: e.data.map((entry) => ({
          ...entry,
          __typename: "ValidationErrorField",
        })),
      };
    }
    if (e instanceof ServerError) {
      logger.warn("API Failure: ServerError", {
        input: event.arguments?.input,
        errorMessage: e.message,
      });
      return {
        __typename: "ServerError",
        message: e.message,
      };
    }
    // if (e instanceof ProductNotFoundError) {
    //   logger.warn("API Failure: ProductNotFoundError", {
    //     input: event.arguments?.input,
    //     errorMessage: e.message,
    //   });
    //   return {
    //     __typename: "ProductNotFoundError",
    //     message: e.message,
    //   };
    // }
    logger.error("API FAilure: unknown error");
    logger.error(e);
    return {
      __typename: "ServerError",
      message: "Unknown Error Occured",
    };
  }
};

export default handler;

import { v4 as uuidv4 } from "uuid";
import {
  GetProductDetailInput,
  GetProductsInput,
  ImageInput,
  ImageUpload,
  ImageUploadSuccess,
  Product,
  ProductInput,
  Products,
} from "sharktankpedia-schema";
import DynamoDBAdapter from "../adapter/ddb";
import ServerError from "../entity/ServerError";
import ValidationError from "../entity/ValidationError";
import Validator from "../utils/validator";
import S3Adapter from "../adapter/s3";

const INVALID_GET_PRODUCT_DETAIL_INPUT_ERROR_MESSAGE = "id must be defined";
const INVALID_GET_PRODUCTS_INPUT_LIMIT_ERROR_MESSAGE =
  "Limit must be a positive integer below 1000";
export default class ProductUsecase {
  ddbAdapter: DynamoDBAdapter;
  s3Adapter: S3Adapter;
  validator: Validator;

  constructor(
    ddbAdapter: DynamoDBAdapter,
    s3Adapter: S3Adapter,
    validator?: Validator
  ) {
    this.ddbAdapter = ddbAdapter;
    this.s3Adapter = s3Adapter;
    // this.validator = validator;
  }

  async getProductDetail(input?: GetProductDetailInput): Promise<Product> {
    if (!input || !input.id) {
      throw new ValidationError(
        INVALID_GET_PRODUCT_DETAIL_INPUT_ERROR_MESSAGE,
        [
          {
            field: "id",
            errorMessages: [INVALID_GET_PRODUCT_DETAIL_INPUT_ERROR_MESSAGE],
          },
        ]
      );
    } else if (input.id) {
      return this.ddbAdapter.getProductDetailById(input.id);
    }

    throw new ServerError("Unreachable code");
  }

  async getProducts(input?: GetProductsInput): Promise<Products> {
    if (
      input?.limit &&
      (input.limit <= 0 || !Number.isInteger(input.limit) || input.limit > 1000)
    ) {
      throw new ValidationError(
        INVALID_GET_PRODUCTS_INPUT_LIMIT_ERROR_MESSAGE,
        [
          {
            field: "limit",
            errorMessages: [INVALID_GET_PRODUCTS_INPUT_LIMIT_ERROR_MESSAGE],
          },
        ]
      );
    }
    return this.ddbAdapter.getProducts(input?.limit, input?.featured);
  }

  async mutateProduct(input?: ProductInput): Promise<Product> {
    if (!input) {
      throw new ValidationError("Input required to mutate activity", []);
    }

    let current;
    if (input.id) {
      current = await this.ddbAdapter.getProductDetailById(input.id);
    }
    const date = new Date().toISOString();

    const product: any = {
      ...input,
      __typename: "Product",
      marketPlace: input.marketPlace?.map((mp) => ({
        __typename: "MetaData",
        ...mp,
      })),
      sales: input.sales?.map((s) => ({
        __typename: "MetaData",
        ...s,
      })),
      salesSplit: input.salesSplit?.map((ss) => ({
        __typename: "MetaData",
        ...ss,
      })),
      statistics: input.statistics?.map((ss) => ({
        __typename: "MetaData",
        ...ss,
      })),
      unitEconomics: input.unitEconomics?.map((ue) => ({
        __typename: "UnitEconomics",
        ...ue,
      })),
      ...(input.counterOffer && {
        counterOffer: input.counterOffer?.map((co) => ({
          __typename: "Deal",
          ...co,
        })),
      }),
      ...(input.dealClosed && {
        dealClosed: { __typename: "Deal", ...input.dealClosed },
      }),
      id: input.id ?? uuidv4(),
      createdAt: current ? current.createdAt : date,
    };

    return this.ddbAdapter.putProduct(product);
  }

  async mutateImage(input?: ImageInput): Promise<ImageUploadSuccess> {
    if (!input) {
      throw new ValidationError("Input required to mutate activity", []);
    }

    const image: ImageUpload = { ...input, __typename: "ImageUpload" };
    return this.s3Adapter.uploadImage(image);
  }
}

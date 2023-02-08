import { v4 as uuidv4 } from "uuid";
import {
  GetProductDetailInput,
  GetProductsInput,
  Product,
  ProductInput,
  Products,
} from "sharktankpedia-schema";
import DynamoDBAdapter from "../adapter/ddb";
import ServerError from "../entity/ServerError";
import ValidationError from "../entity/ValidationError";
import Validator from "../utils/validator";

const INVALID_GET_PRODUCT_DETAIL_INPUT_ERROR_MESSAGE = "id must be defined";
const INVALID_GET_PRODUCTS_INPUT_LIMIT_ERROR_MESSAGE =
  "Limit must be a positive integer below 1000";
export default class ProductUsecase {
  ddbAdapter: DynamoDBAdapter;

  validator: Validator;

  constructor(ddbAdapter: DynamoDBAdapter, validator?: Validator) {
    this.ddbAdapter = ddbAdapter;
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
    return this.ddbAdapter.getProducts(input?.limit);
  }

  async mutateProduct(input?: ProductInput): Promise<Product> {
    if (!input) {
      throw new ValidationError("Input required to mutate activity", []);
    }

    // let current;
    // if (input.id) {
    //   current = await this.ddbAdapter.getProductDetailById(input.id);
    // }

    const product: any = { ...input, __typename: "Product", id: uuidv4() };

    return this.ddbAdapter.putProduct(product);
  }
}

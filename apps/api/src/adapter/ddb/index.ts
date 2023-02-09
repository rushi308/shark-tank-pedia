import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  ScanCommand,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";
import DynamoDBError from "../../entity/DynamoDBError";
import { logger } from "../../utils/logger";
import { Product, Products } from "sharktankpedia-schema";
import ProductNotFoundError from "../../entity/ProductNotFoundError";
const {
  PRODUCTS_TABLE_NAME,
  // ACTIVITIES_URL_INDEX_NAME,
  // ACTIVITIES_NAME_INDEX_NAME,
} = process.env;

if (!PRODUCTS_TABLE_NAME) throw new Error("PRODUCTS_TABLE_NAME undefined");
// if (!ACTIVITIES_URL_INDEX_NAME)
//   throw new Error("ACTIVITIES_URL_INDEX_NAME undefined");
// if (!ACTIVITIES_NAME_INDEX_NAME)
//   throw new Error("ACTIVITIES_NAME_INDEX_NAME undefined");

const client = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export default class DynamoDBAdapter {
  async getProductDetailById(id: string): Promise<Product> {
    let data;
    try {
      data = await client.send(
        new GetCommand({ TableName: PRODUCTS_TABLE_NAME, Key: { id } })
      );
    } catch (e) {
      logger.error(`Unable to retrieve product with id ${id}`);
      logger.error(e);
      throw new DynamoDBError(`Unable to retrieve product with id ${id}`);
    }

    if (!data.Item) {
      logger.warn(`No activity found with id ${id}`);
      throw new ProductNotFoundError(`No product found with id ${id}`);
    }
    return data.Item as Product;
  }

  async getProducts(limit?: number, featured?: boolean): Promise<Products> {
    let data;
    try {
      data = await client.send(
        new ScanCommand({
          TableName: PRODUCTS_TABLE_NAME,
          Limit: limit,
          ...(featured && {
            KeyConditionExpression: "#featured = :featured",
            ExpressionAttributeNames: {
              "#featured": "featured",
            },
            ExpressionAttributeValues: {
              ":featured": {
                BOOL: featured,
              },
            },
          }),
        })
      );
    } catch (e) {
      logger.error("Unable to retrieve products");
      logger.error(e);
      throw new DynamoDBError("Unable to retrieve products");
    }

    return {
      __typename: "Products",
      products: data.Items as Product[],
    };
  }

  async putProduct(product: Product): Promise<Product> {
    try {
      await client.send(
        new PutCommand({
          TableName: PRODUCTS_TABLE_NAME,
          Item: product,
        })
      );
    } catch (e) {
      logger.error(`Unable to put product with id ${product.id}`, {
        product,
      });
      logger.error(e);
      throw new DynamoDBError(`Unable to put activity with id ${product.id}`);
    }

    return product;
  }
}

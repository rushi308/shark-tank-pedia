export default class DynamoDBError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DynamoDBError";
  }
}

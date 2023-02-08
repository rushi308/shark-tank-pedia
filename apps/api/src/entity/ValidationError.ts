import ServerError from "./ServerError";

export default class ValidationError extends ServerError {
  data: { field: string; errorMessages: string[] }[];

  constructor(
    message: string,
    data: { field: string; errorMessages: string[] }[]
  ) {
    super(message);
    this.data = data;
    this.name = "ValidationError";
  }
}

import { logger } from "../../utils/logger";
import { ImageUpload, ImageUploadSuccess } from "sharktankpedia-schema";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import ServerError from "../../entity/ServerError";
const { IMAGE_UPLOAD_BUCKET_NAME } = process.env;

if (!IMAGE_UPLOAD_BUCKET_NAME)
  throw new Error("IMAGE_UPLOAD_BUCKET_NAME undefined");

const s3Client = new S3Client({ region: "us-east-1" });

export default class S3Adapter {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async uploadImage(image: ImageUpload): Promise<ImageUploadSuccess> {
    try {
      const { base64, contentType } = image;
      const buffer = Buffer.from(base64, "base64");
      const Key = `image-${Date.now()}.jpg`;
      const params = {
        Bucket: `${IMAGE_UPLOAD_BUCKET_NAME}`,
        Key,
        Body: buffer,
        ContentEncoding: "base64",
        ContentType: contentType,
      };
      const command = new PutObjectCommand(params);
      await s3Client.send(command);
      return {
        __typename: "ImageUploadSuccess",
        url: `https://${IMAGE_UPLOAD_BUCKET_NAME}.s3.amazonaws.com/${Key}`,
      };
    } catch (e) {
      console.log(e, "Upload Failed");
      logger.error("Unable to upload image");
      logger.error(e);
      throw new ServerError("Unable to upload image");
    }
  }
}

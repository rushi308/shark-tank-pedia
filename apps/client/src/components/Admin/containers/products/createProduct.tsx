// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {
  Input,
  Text,
  Grid,
  Button,
  Textarea,
  Container,
  Row,
  Col,
  Checkbox,
} from "@nextui-org/react";
import React, { useRef, useState } from "react";
import { Flex } from "../../styles/flex";
import { FieldArray, Formik } from "formik";
import productValidationSchema from "@/validationSchema/productSchema";
import Image from "next/image";
import { IconButton } from "../../components/table/table.styled";
import { DeleteIcon } from "../../icons/table/delete-icon";
import { mutateImage, mutateProduct } from "@/utils/api/client";
import { toBase64 } from "@/utils/util";
import { useRouter } from "next/router";
import { Product } from "sharktankpedia-schema";

const initialProductFormValues: Product = {
  __typename: "Product",
  id: "",
  title: "",
  productDetails: "",
  productImage: "",
  companyName: "",
  website: "",
  featured: false,
  season: 3,
  episode: 1,
  categories: [],
  amazonLink: "",
  flipkartLink: "",
  appStoreLink: "",
  playStoreLink: "",
  established: 2012,
  founders: "",
  numberOfEmployees: 0,
  story: "",
  productFeatures: [],
  valueChain: [],
  originalAsk: "",
  sales: { __typename: "Sales", values: [], unit: "" },
  salesSplit: { __typename: "Sales", values: [], unit: "" },
  unitEconomics: [],
  statistics: [],
  counterOffer: [],
  dealClosed: {
    __typename: "Deal",
    sharkName: "",
    amount: "",
    equity: 0,
    valuation: "",
    debt: "",
    debtInterest: 0,
  },
  informationImage: "",
  precedence: 1,
};

interface CreateProductProps {
  product?: Product;
  title?: string;
}

export const CreateProduct = ({ product, title }: CreateProductProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stripTypenames = (value: any): any => {
    if (Array.isArray(value)) {
      return value.map(stripTypenames);
    } else if (value !== null && typeof value === "object") {
      const newObject = {};
      for (const property in value) {
        if (property !== "__typename") {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          newObject[property] = stripTypenames(value[property]);
        }
      }
      return newObject;
    } else {
      return value;
    }
  };

  if (product) {
    if (!product.marketPlace) {
      delete product.marketPlace;
    }
    if (!product.numberOfEmployees) {
      product.numberOfEmployees = 0;
    }
  }
  const productValues = product
    ? stripTypenames(product)
    : initialProductFormValues;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (values: any) => {
    // Step 1 upload image to s3
    if (selectedImage) {
      const imageUrl = await uploadImage();
      if (imageUrl) {
        values.productImage = imageUrl;
      }
    }
    // Step 2 create product
    values = alignValuesWithDB(values);
    await mutateProduct(values);
    router.push("/admin/products");
  };

  const alignValuesWithDB = (values: any) => {
    if (values.dealClosed && !values.dealClosed.amount) {
      delete values.dealClosed;
    }
    if (!values.id) {
      delete values.id;
    }
    if (!values.numberOfEmployees) {
      values.numberOfEmployees = 0;
    }
    return values;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const uploadImageToClient = async (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const uploadImage = async () => {
    const imageBase64 = await toBase64(selectedImage);
    const imageInput = {
      contentType: "image/jpeg",
      base64: imageBase64.split(",")[1],
    };
    const mutateImageResult = await mutateImage(imageInput);
    if (mutateImageResult.__typename === "ImageUploadSuccess") {
      return mutateImageResult.url;
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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
      <Text h3> {title ? title : "Create Product"}</Text>
      <Formik
        initialValues={productValues}
        validationSchema={productValidationSchema}
        validateOnChange={false}
        onSubmit={onSubmit}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} noValidate id="page-product-form">
            <Grid.Container gap={2}>
              <Grid xs={6}>
                <Input
                  required
                  name="companyName"
                  shadow={false}
                  width="100%"
                  placeholder="i.e Google,Facebook"
                  status={
                    touched.companyName && errors?.companyName
                      ? "error"
                      : undefined
                  }
                  value={values?.companyName}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  label={
                    (touched.companyName && errors?.companyName) ||
                    "Company Name"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid xs={2}>
                <Input
                  required
                  name="season"
                  shadow={false}
                  width="100%"
                  placeholder="3"
                  type="number"
                  status={
                    touched.season && errors?.season ? "error" : undefined
                  }
                  value={+values?.season}
                  label={(touched.season && errors?.season) || "Season"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid xs={2}>
                <Input
                  required
                  type="number"
                  name="episode"
                  shadow={false}
                  width="100%"
                  placeholder="30"
                  status={
                    touched.episode && errors?.episode ? "error" : undefined
                  }
                  value={+values?.episode}
                  label={(touched.episode && errors?.episode) || "Episode"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid xs={2}>
                <Input
                  required
                  type="number"
                  name="precedence"
                  shadow={false}
                  width="100%"
                  placeholder="30"
                  status={
                    touched.precedence && errors?.precedence
                      ? "error"
                      : undefined
                  }
                  value={values?.precedence}
                  label={
                    (touched.precedence && errors?.precedence) || "Precedence"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
            </Grid.Container>
            <Grid.Container gap={2}>
              <Grid xs={12}>
                <Input
                  required
                  name="title"
                  shadow={false}
                  width="100%"
                  placeholder="Maisha Lifestyles: Handmade Cotton & Jacquard Bags"
                  status={touched.title && errors?.title ? "error" : undefined}
                  value={values?.title}
                  label={(touched.title && errors?.title) || "Title"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
            </Grid.Container>
            <Grid.Container gap={2}>
              <Grid xs={6}>
                <Textarea
                  required
                  name="productDetails"
                  shadow={false}
                  minRows={8}
                  width="100%"
                  placeholder="Product Details"
                  status={
                    touched.productDetails && errors?.productDetails
                      ? "error"
                      : undefined
                  }
                  value={values?.productDetails}
                  label={
                    (touched.productDetails && errors?.productDetails) ||
                    "Product Details"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid xs={6}>
                <Textarea
                  required
                  name="story"
                  shadow={false}
                  minRows={8}
                  width="100%"
                  placeholder="Story"
                  status={touched.story && errors?.story ? "error" : undefined}
                  value={values?.story}
                  label={(touched.story && errors?.story) || "Story"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
            </Grid.Container>
            <Grid.Container gap={2}>
              <Grid xs={6}>
                <Input
                  required
                  name="founders"
                  shadow={false}
                  width="100%"
                  placeholder="Rushi Patel & Divyesh Patel"
                  status={
                    touched.founders && errors?.founders ? "error" : undefined
                  }
                  value={values?.founders}
                  label={(touched.founders && errors?.founders) || "Founders"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid xs={6}>
                <Input
                  required
                  name="website"
                  shadow={false}
                  width="100%"
                  placeholder="https://www.google.com"
                  status={
                    touched.website && errors?.website ? "error" : undefined
                  }
                  value={values?.website}
                  label={(touched.website && errors?.website) || "Website"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
            </Grid.Container>
            <Grid.Container gap={2}>
              <Grid xs={6}>
                <Input
                  required
                  name="originalAsk"
                  shadow={false}
                  width="100%"
                  placeholder="i.e 50 Lakhs for 3% Equity"
                  status={
                    touched.originalAsk && errors?.originalAsk
                      ? "error"
                      : undefined
                  }
                  value={values?.originalAsk}
                  label={
                    (touched.originalAsk && errors?.originalAsk) ||
                    "Original Ask"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid xs={3}>
                <Input
                  required
                  name="established"
                  shadow={false}
                  type="number"
                  width="100%"
                  placeholder="2012"
                  status={
                    touched.established && errors?.established
                      ? "error"
                      : undefined
                  }
                  value={values?.established}
                  label={
                    (touched.established && errors?.established) ||
                    "Established"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid xs={3}>
                <Input
                  required
                  name="numberOfEmployees"
                  shadow={false}
                  type="number"
                  width="100%"
                  placeholder="10"
                  status={
                    touched.numberOfEmployees && errors?.numberOfEmployees
                      ? "error"
                      : undefined
                  }
                  value={values?.numberOfEmployees}
                  label={
                    (touched.numberOfEmployees && errors?.numberOfEmployees) ||
                    "Number of Employees"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
            </Grid.Container>
            <Grid.Container gap={2}>
              <Grid xs={6}>
                <Input
                  required
                  name="amazonLink"
                  shadow={false}
                  width="100%"
                  placeholder="https://www.amazon.com"
                  status={
                    touched.amazonLink && errors?.amazonLink
                      ? "error"
                      : undefined
                  }
                  value={values?.amazonLink}
                  label={
                    (touched.amazonLink && errors?.amazonLink) || "Amazon Link"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid xs={6}>
                <Input
                  required
                  name="flipkartLink"
                  shadow={false}
                  width="100%"
                  placeholder="https://www.flipkart.com"
                  status={
                    touched.flipkartLink && errors?.flipkartLink
                      ? "error"
                      : undefined
                  }
                  value={values?.flipkartLink}
                  label={
                    (touched.flipkartLink && errors?.flipkartLink) ||
                    "Flipkart Link"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
            </Grid.Container>
            <Grid.Container gap={2}>
              <Grid xs={6}>
                <Input
                  required
                  name="appStoreLink"
                  shadow={false}
                  width="100%"
                  placeholder="https://www.appstore.com"
                  status={
                    touched.appStoreLink && errors?.appStoreLink
                      ? "error"
                      : undefined
                  }
                  value={values?.appStoreLink}
                  label={
                    (touched.appStoreLink && errors?.appStoreLink) ||
                    "Appstore Link"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid xs={6}>
                <Input
                  required
                  name="playStoreLink"
                  shadow={false}
                  width="100%"
                  placeholder="https://www.playstore.com"
                  status={
                    touched.playStoreLink && errors?.playStoreLink
                      ? "error"
                      : undefined
                  }
                  value={values?.playStoreLink}
                  label={
                    (touched.playStoreLink && errors?.playStoreLink) ||
                    "Playstore Link"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
            </Grid.Container>
            <Container fluid gap={1}>
              <Row>
                <Col span={6}>
                  <Row>
                    <Col>
                      <Text h6 css={{ fontWeight: "normal" }}>
                        Features
                      </Text>
                    </Col>
                  </Row>
                  <FieldArray
                    name="productFeatures"
                    render={(arrayHelpers) => (
                      <>
                        {values.productFeatures &&
                          values.productFeatures.map((feature, index) => (
                            <Row key={`${index}Productfeatures`}>
                              <Col span={9}>
                                <Input
                                  required
                                  name={`productFeatures[${index}]`}
                                  shadow={false}
                                  width="100%"
                                  placeholder="i.e Smooth, Fast, Reliable"
                                  status={
                                    touched.productFeatures &&
                                    touched.productFeatures.length > 0 &&
                                    touched.productFeatures[index] &&
                                    errors.productFeatures &&
                                    errors.productFeatures.length > 0 &&
                                    errors.productFeatures[index]
                                      ? "error"
                                      : undefined
                                  }
                                  value={values.productFeatures[index]}
                                  label={
                                    (touched.productFeatures &&
                                      touched.productFeatures.length > 0 &&
                                      touched.productFeatures[index] &&
                                      errors.productFeatures &&
                                      errors.productFeatures.length > 0 &&
                                      errors.productFeatures[index]) ||
                                    `Feature ${index + 1}`
                                  }
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                              </Col>

                              <Col
                                span={2}
                                offset={1}
                                // className="mt-4"
                                css={{ marginTop: "27px" }}
                              >
                                <Button
                                  type="button"
                                  bordered
                                  color="primary"
                                  auto
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Remove
                                </Button>
                              </Col>
                            </Row>
                          ))}
                        <Row className="mt-2">
                          <Col>
                            <Button
                              type="button"
                              bordered
                              color="primary"
                              auto
                              onClick={() => arrayHelpers.push("")}
                            >
                              Add Feature
                            </Button>
                          </Col>
                        </Row>
                      </>
                    )}
                  ></FieldArray>
                </Col>
                <Col span={6}>
                  <Row>
                    <Col>
                      <Text h6 css={{ fontWeight: "normal" }}>
                        Value Chain
                      </Text>
                    </Col>
                  </Row>
                  <FieldArray
                    name="valueChain"
                    render={(arrayHelpers) => (
                      <>
                        {values?.valueChain &&
                          values?.valueChain.map((feature, index) => (
                            <Row key={`${index}Valuechain`}>
                              <Col span={9}>
                                <Input
                                  required
                                  name={`valueChain[${index}]`}
                                  shadow={false}
                                  width="100%"
                                  placeholder="i.e Logistics, Manufacturing, Retail"
                                  status={
                                    touched.valueChain &&
                                    touched.valueChain.length > 0 &&
                                    touched.valueChain[index] &&
                                    errors.valueChain &&
                                    errors.valueChain.length > 0 &&
                                    errors.valueChain[index]
                                      ? "error"
                                      : undefined
                                  }
                                  value={values.valueChain[index]}
                                  label={
                                    (touched.valueChain &&
                                      touched.valueChain.length > 0 &&
                                      touched.valueChain[index] &&
                                      errors.valueChain &&
                                      errors.valueChain.length > 0 &&
                                      errors.valueChain[index]) ||
                                    `Value Chain ${index + 1}`
                                  }
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                              </Col>

                              <Col
                                span={2}
                                offset={1}
                                css={{ marginTop: "27px" }}
                              >
                                <Button
                                  type="button"
                                  bordered
                                  color="primary"
                                  auto
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Remove
                                </Button>
                              </Col>
                            </Row>
                          ))}
                        <Row className="mt-2">
                          <Col>
                            <Button
                              type="button"
                              bordered
                              color="primary"
                              auto
                              onClick={() => arrayHelpers.push("")}
                            >
                              Add Value Chain
                            </Button>
                          </Col>
                        </Row>
                      </>
                    )}
                  ></FieldArray>
                </Col>
              </Row>
            </Container>

            <Container fluid gap={1} className="mt-2">
              <Row>
                <Col span={12}>
                  <Row>
                    <Col>
                      <Text h6 css={{ fontWeight: "normal" }}>
                        Sales
                      </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={3}>
                      <Input
                        required
                        name="sales.unit"
                        shadow={false}
                        width="100%"
                        placeholder="i.e Crore, Lakhs"
                        status={
                          touched.sales &&
                          touched.sales.unit &&
                          errors?.sales &&
                          errors?.sales.unit
                            ? "error"
                            : undefined
                        }
                        value={values?.sales.unit}
                        label={
                          (touched.sales &&
                            touched.sales.unit &&
                            errors?.sales &&
                            errors?.sales.unit) ||
                          "Unit"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Col>
                    <Col span={8} offset={1}>
                      <Row>
                        <Col>
                          <Text h6 css={{ fontWeight: "normal" }}>
                            Values
                          </Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FieldArray
                            name="sales.values"
                            render={(arrayHelpers) => (
                              <>
                                {values.sales &&
                                  values.sales.values &&
                                  values.sales.values.map((saleData, index) => (
                                    <>
                                      <Row key={`${index}SalesValues`}>
                                        <Col span={4}>
                                          <Input
                                            required
                                            name={`sales.values[${index}].name`}
                                            shadow={false}
                                            width="100%"
                                            placeholder="i.e FY 22-21"
                                            value={
                                              values.sales.values[index]["name"]
                                            }
                                            status={
                                              touched.sales &&
                                              touched.sales.values &&
                                              touched.sales.values.length > 0 &&
                                              touched.sales.values[index] &&
                                              touched.sales.values[index][
                                                "name"
                                              ] &&
                                              errors.sales &&
                                              errors.sales.values &&
                                              errors.sales.values[index] &&
                                              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                              // @ts-expect-error
                                              errors.sales.values[index]["name"]
                                                ? "error"
                                                : undefined
                                            }
                                            label={"Name"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                          />
                                        </Col>
                                        <Col span={4} offset={1}>
                                          <Input
                                            required
                                            name={`sales.values[${index}].value`}
                                            shadow={false}
                                            width="100%"
                                            placeholder="100"
                                            value={
                                              values.sales.values[index][
                                                "value"
                                              ]
                                            }
                                            status={
                                              touched.sales &&
                                              touched.sales.values &&
                                              touched.sales.values.length > 0 &&
                                              touched.sales.values[index] &&
                                              touched.sales.values[index][
                                                "value"
                                              ] &&
                                              errors.sales &&
                                              errors.sales.values &&
                                              errors.sales.values[index] &&
                                              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                              //@ts-expect-error
                                              errors.sales.values[index].value
                                                ? "error"
                                                : undefined
                                            }
                                            label={"Value"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                          />
                                        </Col>

                                        <Col
                                          span={2}
                                          offset={1}
                                          css={{ marginTop: "27px" }}
                                        >
                                          <Button
                                            type="button"
                                            bordered
                                            color="primary"
                                            auto
                                            onClick={() =>
                                              arrayHelpers.remove(index)
                                            }
                                          >
                                            Remove
                                          </Button>
                                        </Col>
                                      </Row>
                                    </>
                                  ))}
                                <Row className="mt-2">
                                  <Col>
                                    <Button
                                      type="button"
                                      bordered
                                      color="primary"
                                      auto
                                      onClick={() =>
                                        arrayHelpers.push({
                                          name: "",
                                          value: "",
                                        })
                                      }
                                    >
                                      Add Sales Data
                                    </Button>
                                  </Col>
                                </Row>
                              </>
                            )}
                          ></FieldArray>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container fluid gap={1} className="mt-2">
              <Row>
                <Col span={12}>
                  <Row>
                    <Col>
                      <Text h6 css={{ fontWeight: "normal" }}>
                        Sales Split
                      </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={3}>
                      <Input
                        required
                        name="salesSplit.unit"
                        shadow={false}
                        width="100%"
                        placeholder="i.e Percentage"
                        status={
                          touched.salesSplit &&
                          touched.salesSplit.unit &&
                          errors?.salesSplit &&
                          errors?.salesSplit.unit
                            ? "error"
                            : undefined
                        }
                        value={values?.salesSplit.unit}
                        label={
                          (touched.salesSplit &&
                            touched.salesSplit.unit &&
                            errors?.salesSplit &&
                            errors?.salesSplit.unit) ||
                          "Unit"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Col>
                    <Col span={8} offset={1}>
                      <Row>
                        <Col>
                          <Text h6 css={{ fontWeight: "normal" }}>
                            Values
                          </Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FieldArray
                            name="salesSplit.values"
                            render={(arrayHelpers) => (
                              <>
                                {values.salesSplit &&
                                  values.salesSplit.values &&
                                  values.salesSplit.values.map(
                                    (saleData, index) => (
                                      <>
                                        <Row key={`${index}SalesSplit`}>
                                          <Col span={4}>
                                            <Input
                                              required
                                              name={`salesSplit.values[${index}].name`}
                                              shadow={false}
                                              width="100%"
                                              placeholder="i.e Raw Material Cost"
                                              value={
                                                values.salesSplit.values[index][
                                                  "name"
                                                ]
                                              }
                                              status={
                                                touched.salesSplit &&
                                                touched.salesSplit.values &&
                                                touched.salesSplit.values
                                                  .length > 0 &&
                                                touched.salesSplit.values[
                                                  index
                                                ] &&
                                                touched.salesSplit.values[
                                                  index
                                                ]["name"] &&
                                                errors.salesSplit &&
                                                errors.salesSplit.values &&
                                                errors.salesSplit.values[
                                                  index
                                                ] &&
                                                errors.salesSplit.values[index][
                                                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                  //@ts-ignore
                                                  "name"
                                                ]
                                                  ? "error"
                                                  : undefined
                                              }
                                              label={"Name"}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                            />
                                          </Col>
                                          <Col span={4} offset={1}>
                                            <Input
                                              required
                                              name={`salesSplit.values[${index}].value`}
                                              shadow={false}
                                              width="100%"
                                              placeholder="10"
                                              value={
                                                values.salesSplit.values[index][
                                                  "value"
                                                ]
                                              }
                                              status={
                                                touched.salesSplit &&
                                                touched.salesSplit.values &&
                                                touched.salesSplit.values
                                                  .length > 0 &&
                                                touched.salesSplit.values[
                                                  index
                                                ] &&
                                                touched.salesSplit.values[
                                                  index
                                                ]["value"] &&
                                                errors.salesSplit &&
                                                errors.salesSplit.values &&
                                                errors.salesSplit.values[
                                                  index
                                                ] &&
                                                errors.salesSplit.values[index][
                                                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                  //@ts-ignore
                                                  "value"
                                                ]
                                                  ? "error"
                                                  : undefined
                                              }
                                              label={"Value"}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                            />
                                          </Col>

                                          <Col
                                            span={2}
                                            offset={1}
                                            css={{ marginTop: "27px" }}
                                          >
                                            <Button
                                              type="button"
                                              bordered
                                              color="primary"
                                              auto
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              }
                                            >
                                              Remove
                                            </Button>
                                          </Col>
                                        </Row>
                                      </>
                                    )
                                  )}
                                <Row className="mt-2">
                                  <Col>
                                    <Button
                                      type="button"
                                      bordered
                                      color="primary"
                                      auto
                                      onClick={() =>
                                        arrayHelpers.push({
                                          name: "",
                                          value: "",
                                        })
                                      }
                                    >
                                      Add Sales Data
                                    </Button>
                                  </Col>
                                </Row>
                              </>
                            )}
                          ></FieldArray>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container fluid gap={1} className="mt-2">
              <Row>
                <Col span={12}>
                  <Row>
                    <Col>
                      <Text h6 css={{ fontWeight: "normal" }}>
                        Unit Economics
                      </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Row>
                        <Col>
                          <FieldArray
                            name="unitEconomics"
                            render={(arrayHelpers) => (
                              <>
                                {values.unitEconomics &&
                                  values.unitEconomics.map(
                                    (saleData, index) => (
                                      <>
                                        <Row key={`${index}UnitEconomics`}>
                                          <Col span={4}>
                                            <Input
                                              required
                                              name={`unitEconomics[${index}].name`}
                                              shadow={false}
                                              width="100%"
                                              placeholder="i.e Gross Margin"
                                              value={
                                                values.unitEconomics[index][
                                                  "name"
                                                ]
                                              }
                                              status={
                                                touched.unitEconomics &&
                                                touched.unitEconomics.length >
                                                  0 &&
                                                touched.unitEconomics[index] &&
                                                touched.unitEconomics[index][
                                                  "name"
                                                ] &&
                                                errors.unitEconomics &&
                                                errors.unitEconomics[index] &&
                                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                //@ts-ignore
                                                errors.unitEconomics[index].name
                                                  ? "error"
                                                  : undefined
                                              }
                                              label={"Name"}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                            />
                                          </Col>
                                          <Col span={4} offset={1}>
                                            <Input
                                              required
                                              name={`unitEconomics[${index}].value`}
                                              shadow={false}
                                              width="100%"
                                              placeholder="50%"
                                              value={
                                                values.unitEconomics[index][
                                                  "value"
                                                ]
                                              }
                                              status={
                                                touched.unitEconomics &&
                                                touched.unitEconomics.length >
                                                  0 &&
                                                touched.unitEconomics[index] &&
                                                touched.unitEconomics[index][
                                                  "value"
                                                ] &&
                                                errors.unitEconomics &&
                                                errors.unitEconomics[index] &&
                                                errors.unitEconomics[index][
                                                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                  //@ts-ignore
                                                  "value"
                                                ]
                                                  ? "error"
                                                  : undefined
                                              }
                                              label={"Value"}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                            />
                                          </Col>

                                          <Col
                                            span={2}
                                            offset={1}
                                            css={{ marginTop: "27px" }}
                                          >
                                            <Button
                                              type="button"
                                              bordered
                                              color="primary"
                                              auto
                                              onClick={() =>
                                                arrayHelpers.remove(index)
                                              }
                                            >
                                              Remove
                                            </Button>
                                          </Col>
                                        </Row>
                                      </>
                                    )
                                  )}
                                <Row className="mt-2">
                                  <Col>
                                    <Button
                                      type="button"
                                      bordered
                                      color="primary"
                                      auto
                                      onClick={() =>
                                        arrayHelpers.push({
                                          name: "",
                                          value: "",
                                        })
                                      }
                                    >
                                      Add Unit Economics
                                    </Button>
                                  </Col>
                                </Row>
                              </>
                            )}
                          ></FieldArray>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container fluid gap={1} className="mt-2">
              <Row>
                <Col span={12}>
                  <Row>
                    <Col>
                      <Text h6 css={{ fontWeight: "normal" }}>
                        Statistics
                      </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Row>
                        <Col>
                          <FieldArray
                            name="statistics"
                            render={(arrayHelpers) => (
                              <>
                                {values?.statistics &&
                                  values?.statistics?.length > 0 &&
                                  values.statistics.map((saleData, index) => (
                                    <>
                                      <Row key={`${index}Statistics`}>
                                        <Col span={4}>
                                          <Input
                                            required
                                            name={`statistics[${index}].name`}
                                            shadow={false}
                                            width="100%"
                                            placeholder="i.e Monthly Active Users"
                                            value={
                                              values?.statistics[index]["name"]
                                            }
                                            status={
                                              touched.statistics &&
                                              touched.statistics.length > 0 &&
                                              touched.statistics[index] &&
                                              touched.statistics[index][
                                                "name"
                                              ] &&
                                              errors.statistics &&
                                              errors.statistics[index] &&
                                              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                              //@ts-ignore
                                              errors.statistics[index].name
                                                ? "error"
                                                : undefined
                                            }
                                            label={"Name"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                          />
                                        </Col>
                                        <Col span={4} offset={1}>
                                          <Input
                                            required
                                            name={`statistics[${index}].value`}
                                            shadow={false}
                                            width="100%"
                                            placeholder="5000"
                                            value={
                                              values.statistics[index]["value"]
                                            }
                                            status={
                                              touched.statistics &&
                                              touched.statistics.length > 0 &&
                                              touched.statistics[index] &&
                                              touched.statistics[index][
                                                "value"
                                              ] &&
                                              errors.statistics &&
                                              errors.statistics[index] &&
                                              errors.statistics[index][
                                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                //@ts-ignore
                                                "value"
                                              ]
                                                ? "error"
                                                : undefined
                                            }
                                            label={"Value"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                          />
                                        </Col>

                                        <Col
                                          span={2}
                                          offset={1}
                                          css={{ marginTop: "27px" }}
                                        >
                                          <Button
                                            type="button"
                                            bordered
                                            color="primary"
                                            auto
                                            onClick={() =>
                                              arrayHelpers.remove(index)
                                            }
                                          >
                                            Remove
                                          </Button>
                                        </Col>
                                      </Row>
                                    </>
                                  ))}
                                <Row className="mt-2">
                                  <Col>
                                    <Button
                                      type="button"
                                      bordered
                                      color="primary"
                                      auto
                                      onClick={() =>
                                        arrayHelpers.push({
                                          name: "",
                                          value: "",
                                        })
                                      }
                                    >
                                      Add Statistic
                                    </Button>
                                  </Col>
                                </Row>
                              </>
                            )}
                          ></FieldArray>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container fluid gap={1} className="mt-2">
              <Row>
                <Col span={12}>
                  <Row>
                    <Col>
                      <Text h6 css={{ fontWeight: "normal" }}>
                        Offers
                      </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Row>
                        <Col>
                          <FieldArray
                            name="counterOffer"
                            render={(arrayHelpers) => (
                              <>
                                {values.counterOffer &&
                                  values.counterOffer.map((saleData, index) => (
                                    <>
                                      <Row key={`${index}CounterOffer`}>
                                        <Col span={2}>
                                          <Input
                                            required
                                            name={`counterOffer[${index}].sharkName`}
                                            shadow={false}
                                            width="100%"
                                            placeholder="i.e Aman, Vineeta, Piyush"
                                            value={
                                              values.counterOffer[index][
                                                "sharkName"
                                              ]
                                            }
                                            status={
                                              touched.counterOffer &&
                                              touched.counterOffer.length > 0 &&
                                              touched.counterOffer[index] &&
                                              touched.counterOffer[index][
                                                "sharkName"
                                              ] &&
                                              errors.counterOffer &&
                                              errors.counterOffer[index] &&
                                              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                              //@ts-ignore
                                              errors.counterOffer[index]
                                                .sharkName
                                                ? "error"
                                                : undefined
                                            }
                                            label={"Shark Name"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                          />
                                        </Col>
                                        <Col span={2} offset={0.1}>
                                          <Input
                                            required
                                            name={`counterOffer[${index}].amount`}
                                            shadow={false}
                                            width="100%"
                                            placeholder="50 Lakhs"
                                            value={
                                              values.counterOffer[index][
                                                "amount"
                                              ]
                                            }
                                            status={
                                              touched.counterOffer &&
                                              touched.counterOffer.length > 0 &&
                                              touched.counterOffer[index] &&
                                              touched.counterOffer[index][
                                                "amount"
                                              ] &&
                                              errors.counterOffer &&
                                              errors.counterOffer[index] &&
                                              errors.counterOffer[index][
                                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                //@ts-ignore
                                                "amount"
                                              ]
                                                ? "error"
                                                : undefined
                                            }
                                            label={"Amount"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                          />
                                        </Col>
                                        <Col span={2} offset={0.1}>
                                          <Input
                                            required
                                            name={`counterOffer[${index}].valuation`}
                                            shadow={false}
                                            width="100%"
                                            placeholder="i.e 15 Crores"
                                            value={
                                              values.counterOffer[index][
                                                "valuation"
                                              ]
                                            }
                                            status={
                                              touched.counterOffer &&
                                              touched.counterOffer.length > 0 &&
                                              touched.counterOffer[index] &&
                                              touched.counterOffer[index][
                                                "valuation"
                                              ] &&
                                              errors.counterOffer &&
                                              errors.counterOffer[index] &&
                                              errors.counterOffer[index][
                                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                //@ts-ignore
                                                "valuation"
                                              ]
                                                ? "error"
                                                : undefined
                                            }
                                            label={"Valuation"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                          />
                                        </Col>
                                        <Col span={2} offset={0.1}>
                                          <Input
                                            required
                                            name={`counterOffer[${index}].equity`}
                                            shadow={false}
                                            width="100%"
                                            placeholder="1.5"
                                            value={
                                              values.counterOffer[index][
                                                "equity"
                                              ]
                                            }
                                            status={
                                              touched.counterOffer &&
                                              touched.counterOffer.length > 0 &&
                                              touched.counterOffer[index] &&
                                              touched.counterOffer[index][
                                                "equity"
                                              ] &&
                                              errors.counterOffer &&
                                              errors.counterOffer[index] &&
                                              errors.counterOffer[index][
                                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                //@ts-ignore
                                                "equity"
                                              ]
                                                ? "error"
                                                : undefined
                                            }
                                            label={"Equity"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                          />
                                        </Col>
                                        <Col span={2} offset={0.1}>
                                          <Input
                                            required
                                            name={`counterOffer[${index}].debt`}
                                            shadow={false}
                                            width="100%"
                                            placeholder="i.e 50 Lakhs"
                                            value={
                                              values.counterOffer[index]["debt"]
                                            }
                                            status={
                                              touched.counterOffer &&
                                              touched.counterOffer.length > 0 &&
                                              touched.counterOffer[index] &&
                                              touched.counterOffer[index][
                                                "debt"
                                              ] &&
                                              errors.counterOffer &&
                                              errors.counterOffer[index] &&
                                              errors.counterOffer[index][
                                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                //@ts-ignore
                                                "debt"
                                              ]
                                                ? "error"
                                                : undefined
                                            }
                                            label={"Debt"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                          />
                                        </Col>
                                        <Col span={2} offset={0.1}>
                                          <Input
                                            required
                                            type="number"
                                            name={`counterOffer[${index}].debtInterest`}
                                            shadow={false}
                                            width="100%"
                                            placeholder="10"
                                            value={
                                              values.counterOffer[index][
                                                "debtInterest"
                                              ]
                                            }
                                            status={
                                              touched.counterOffer &&
                                              touched.counterOffer.length > 0 &&
                                              touched.counterOffer[index] &&
                                              touched.counterOffer[index][
                                                "debtInterest"
                                              ] &&
                                              errors.counterOffer &&
                                              errors.counterOffer[index] &&
                                              errors.counterOffer[index][
                                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                //@ts-ignore
                                                "debtInterest"
                                              ]
                                                ? "error"
                                                : undefined
                                            }
                                            label={"Debt Interest"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                          />
                                        </Col>
                                        <Col
                                          offset={0.2}
                                          span={1}
                                          css={{ marginTop: "27px" }}
                                        >
                                          <Button
                                            type="button"
                                            bordered
                                            color="primary"
                                            auto
                                            onClick={() =>
                                              arrayHelpers.remove(index)
                                            }
                                          >
                                            Remove
                                          </Button>
                                        </Col>
                                      </Row>
                                    </>
                                  ))}
                                <Row className="mt-2">
                                  <Col>
                                    <Button
                                      type="button"
                                      bordered
                                      color="primary"
                                      auto
                                      onClick={() =>
                                        arrayHelpers.push({
                                          amount: "",
                                          equity: "",
                                          sharkName: "",
                                          valuation: "",
                                          debt: "",
                                          debtInterest: 0,
                                        })
                                      }
                                    >
                                      Add Offer
                                    </Button>
                                  </Col>
                                </Row>
                              </>
                            )}
                          ></FieldArray>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container fluid gap={1} className="mt-2">
              <Row>
                <Col span={12}>
                  <Row>
                    <Col>
                      <Text h6 css={{ fontWeight: "normal" }}>
                        Deal Closed
                      </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={2}>
                      <Row>
                        <Input
                          required
                          name="dealClosed.sharkName"
                          shadow={false}
                          width="100%"
                          placeholder="i.e Aman, Piyush, Veneeta"
                          status={
                            touched.dealClosed &&
                            touched.dealClosed?.sharkName &&
                            errors?.dealClosed &&
                            errors?.dealClosed?.sharkName
                              ? "error"
                              : undefined
                          }
                          value={values?.dealClosed?.sharkName}
                          label={
                            (touched.dealClosed &&
                              touched.dealClosed.sharkName &&
                              errors?.dealClosed &&
                              errors?.dealClosed.sharkName) ||
                            "Shark Name"
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Row>
                    </Col>
                    <Col span={2} offset={0.1}>
                      <Row>
                        <Input
                          required
                          name="dealClosed.amount"
                          shadow={false}
                          width="100%"
                          placeholder="50 Lakhs"
                          status={
                            touched.dealClosed &&
                            touched.dealClosed?.amount &&
                            errors?.dealClosed &&
                            errors?.dealClosed?.amount
                              ? "error"
                              : undefined
                          }
                          value={values?.dealClosed?.amount}
                          label={
                            (touched.dealClosed &&
                              touched.dealClosed.amount &&
                              errors?.dealClosed &&
                              errors?.dealClosed.amount) ||
                            "Amount"
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Row>
                    </Col>
                    <Col span={2} offset={0.1}>
                      <Row>
                        <Input
                          required
                          name="dealClosed.valuation"
                          shadow={false}
                          width="100%"
                          placeholder="5 Crores"
                          status={
                            touched.dealClosed &&
                            touched.dealClosed?.valuation &&
                            errors?.dealClosed &&
                            errors?.dealClosed?.valuation
                              ? "error"
                              : undefined
                          }
                          value={values?.dealClosed?.valuation}
                          label={
                            (touched.dealClosed &&
                              touched.dealClosed.valuation &&
                              errors?.dealClosed &&
                              errors?.dealClosed.valuation) ||
                            "Valuation"
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Row>
                    </Col>
                    <Col span={2} offset={0.1}>
                      <Row>
                        <Input
                          required
                          type="number"
                          name="dealClosed.equity"
                          shadow={false}
                          width="100%"
                          placeholder="10"
                          status={
                            touched.dealClosed &&
                            touched.dealClosed?.equity &&
                            errors?.dealClosed &&
                            errors?.dealClosed?.equity
                              ? "error"
                              : undefined
                          }
                          value={values?.dealClosed?.equity}
                          label={
                            (touched.dealClosed &&
                              touched.dealClosed.equity &&
                              errors?.dealClosed &&
                              errors?.dealClosed.equity) ||
                            "Equity"
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Row>
                    </Col>
                    <Col span={2} offset={0.1}>
                      <Row>
                        <Input
                          required
                          name="dealClosed.debt"
                          shadow={false}
                          width="100%"
                          placeholder="i.e 50 Lakhs"
                          status={
                            touched.dealClosed &&
                            touched.dealClosed?.debt &&
                            errors?.dealClosed &&
                            errors?.dealClosed?.debt
                              ? "error"
                              : undefined
                          }
                          value={values?.dealClosed?.debt}
                          label={
                            (touched.dealClosed &&
                              touched.dealClosed.debt &&
                              errors?.dealClosed &&
                              errors?.dealClosed.debt) ||
                            "Debt"
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Row>
                    </Col>
                    <Col span={2} offset={0.1}>
                      <Row>
                        <Input
                          required
                          type="number"
                          name="dealClosed.debtInterest"
                          shadow={false}
                          width="100%"
                          placeholder="10"
                          status={
                            touched.dealClosed &&
                            touched.dealClosed?.debtInterest &&
                            errors?.dealClosed &&
                            errors?.dealClosed?.debtInterest
                              ? "error"
                              : undefined
                          }
                          value={values?.dealClosed?.debtInterest}
                          label={
                            (touched.dealClosed &&
                              touched.dealClosed.debtInterest &&
                              errors?.dealClosed &&
                              errors?.dealClosed.debtInterest) ||
                            "Debt Interest"
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container fluid gap={1} className="mt-4">
              <Row>
                <Col span={3}>
                  <Row>
                    <Col>
                      <Input
                        ref={fileInputRef}
                        type="file"
                        width="100%"
                        label="Upload Image"
                        placeholder="Choose File"
                        onChange={uploadImageToClient}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={3} offset={0.5}>
                  {selectedImage && (
                    <div
                      style={{
                        ...styles.preview,
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        src={
                          values?.productImage && !selectedImage
                            ? values?.productImage
                            : URL.createObjectURL(selectedImage)
                        }
                        style={styles.image}
                        alt="Thumb"
                        width="100"
                        height="100"
                      />
                      <IconButton
                        type="button"
                        onClick={removeSelectedImage}
                        style={{ marginLeft: "10px" }}
                      >
                        <DeleteIcon fill="#FF0080" />
                      </IconButton>
                    </div>
                  )}
                </Col>
                <Col span={6}>
                  <Row>
                    <Col>
                      <Text h6 css={{ fontWeight: "normal" }}>
                        Categories
                      </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Row>
                        <Col>
                          <FieldArray
                            name="categories"
                            render={(arrayHelpers) => (
                              <>
                                {values.categories.map((cat, index) => (
                                  <Row key={`${index}Categories`}>
                                    <Col span={9}>
                                      <Input
                                        required
                                        name={`categories[${index}]`}
                                        shadow={false}
                                        width="100%"
                                        placeholder="i.e Technology, Retail, E-commerce"
                                        status={
                                          touched.categories &&
                                          touched.categories.length > 0 &&
                                          touched.categories[index] &&
                                          errors.categories &&
                                          errors.categories.length > 0 &&
                                          errors.categories[index]
                                            ? "error"
                                            : undefined
                                        }
                                        value={values.categories[index]}
                                        label={
                                          (touched.categories &&
                                            touched.categories.length > 0 &&
                                            touched.categories[index] &&
                                            errors.categories &&
                                            errors.categories.length > 0 &&
                                            errors.categories[index]) ||
                                          `Category ${index + 1}`
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                    </Col>

                                    <Col
                                      span={2}
                                      offset={1}
                                      // className="mt-4"
                                      css={{ marginTop: "27px" }}
                                    >
                                      <Button
                                        type="button"
                                        bordered
                                        color="primary"
                                        auto
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        }
                                      >
                                        Remove
                                      </Button>
                                    </Col>
                                  </Row>
                                ))}
                                <Row className="mt-2">
                                  <Col>
                                    <Button
                                      type="button"
                                      bordered
                                      color="primary"
                                      auto
                                      onClick={() => arrayHelpers.push("")}
                                    >
                                      Add Category
                                    </Button>
                                  </Col>
                                </Row>
                              </>
                            )}
                          ></FieldArray>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container fluid gap={1} className="mt-4">
              <Row>
                <Col span={12}>
                  <Row>
                    <Col>
                      <Checkbox
                        name="featured"
                        defaultSelected={values.featured}
                      >
                        Featured
                      </Checkbox>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>

            <Grid.Container css={{ paddingTop: "$10" }} gap={2}>
              <Grid xs={6}>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting
                    ? "Please wait..."
                    : `${product ? "Update" : "Create"} Product`}
                </Button>
              </Grid>
            </Grid.Container>
          </form>
        )}
      </Formik>
    </Flex>
  );
};

// Just some styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};

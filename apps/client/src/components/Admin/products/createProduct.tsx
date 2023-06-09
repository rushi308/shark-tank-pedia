import { Input, Text, Grid, Button, Textarea } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { Flex } from "../styles/flex";
import { FieldArray, Formik } from "formik";
import productValidationSchema from "@/validationSchema/productSchema";
import { Label } from "reactstrap";

const initialProductFormValues = {
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
  established: "",
  founders: "",
  numberOfEmployees: 0,
  story: "",
  productFeatures: [],
  valueChain: [],
  originalAsk: "",
  sales: { values: [], unit: "" },
  salesSplit: { values: [], unit: "" },
  unitEconomics: [],
  statistics: [],
  counterOffer: [],
  dealClosed: {},
  informationImage: "",
  precedence: 1,
};

export const CreateProduct = () => {
  const onSubmit = async (values: any) => {};
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
      <Text h3>Create Product</Text>
      <Formik
        initialValues={initialProductFormValues}
        validationSchema={productValidationSchema}
        validateOnChange={false}
        onSubmit={onSubmit}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          setValues,
          getFieldProps,
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
                  value={values?.season}
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
                  value={values?.episode}
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
                  placeholder="https://www.flipkart.com"
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
              {/* <Grid xs={3} justify={"center"} alignContent={"flex-end"}>
                <Checkbox
                  name="featured"
                  placeholder="https://www.flipkart.com"
                  defaultSelected={values?.featured ? true : false}
                  label={
                    (touched.featured && errors?.featured) || "Featured Product"
                  }
                />
              </Grid> */}
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
                <Text>Features</Text>
                <Grid.Container gap={2}>
                  <Grid xs={6}>
                    <FieldArray
                      name="productFeatures"
                      render={(arrayHelpers) => (
                        <div>
                          {values.productFeatures.map((feature, index) => (
                            <div key={index}>
                              {/* Edit the value here */}
                              <Grid xs={6}>
                                <Input
                                  required
                                  name={`${values.productFeatures}.${index}`}
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
                                    (touched.flipkartLink &&
                                      errors?.flipkartLink) ||
                                    "Flipkart Link"
                                  }
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                              </Grid>
                              {/* <Field name={`vehicles.${index}`} /> */}

                              {/* Remove this vehicle */}
                              <Grid xs={3}>
                                <Button
                                  type="button"
                                  shadow
                                  auto
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Remove
                                </Button>
                              </Grid>

                              {/* Add a new empty vehicle at this position */}
                              {/* <Grid xs={3}>
                              <Button
                                type="button"
                                shadow
                                auto
                                onClick={() => arrayHelpers.insert(index, "")}
                              >
                                Add New
                              </Button>
                            </Grid> */}
                            </div>
                          ))}

                          {/* Add a new empty vehicle at the end of the list */}
                          <Button
                            type="button"
                            shadow
                            auto
                            onClick={() => arrayHelpers.push("")}
                          >
                            Add Feature
                          </Button>
                        </div>
                      )}
                    ></FieldArray>
                  </Grid>
                </Grid.Container>

                {/* <Grid.Container gap={1}>
                  <Grid xs={10}></Grid>
                </Grid.Container> */}
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

            <Grid.Container css={{ paddingTop: "$10" }} gap={2}>
              <Grid xs={6}>
                <Button type="submit"> Create Product</Button>
              </Grid>
            </Grid.Container>
          </form>
        )}
      </Formik>
    </Flex>
  );
};

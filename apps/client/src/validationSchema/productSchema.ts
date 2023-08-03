import * as Yup from "yup";

const productValidationSchema = Yup.object({
  title: Yup.string().trim().required("Please enter a title"),

  companyName: Yup.string().trim().required("Please enter a company name"),

  amazonLink: Yup.string().trim().url("Please enter a valid amazon URL"),

  flipkartLink: Yup.string().trim().url("Please enter a valid flipkart URL"),

  website: Yup.string().trim().url("Please enter a valid website URL"),

  appStoreLink: Yup.string().trim().url("Please enter a valid app store URL"),

  playStoreLink: Yup.string().trim().url("Please enter a valid play store URL"),

  productDetails: Yup.string().trim().required("Please enter product details"),
  marketPlace: Yup.array(
    Yup.object({
      name: Yup.string().trim().required("Please enter a name"),
      value: Yup.string().trim().required("Please enter a value"),
    })
  ),

  established: Yup.number(),

  founders: Yup.string()
    .trim()
    .required("Please enter founder or founders name"),

  numberOfEmployees: Yup.number(),

  story: Yup.string().trim().required("Please enter story"),
  productFeatures: Yup.array(
    Yup.string().trim().required("Please enter a product feature")
  ),
  valueChain: Yup.array(
    Yup.string().trim().required("Please enter a value chain")
  ),

  originalAsk: Yup.string().trim().required("Please enter an original ask"),

  sales: Yup.object({
    unit: Yup.string().trim().required("Please enter a unit"),
    values: Yup.array(
      Yup.object({
        name: Yup.string().trim().required("Please enter a name"),
        value: Yup.string().trim().required("Please enter a value"),
      })
    ),
  }),

  salesSplit: Yup.object({
    unit: Yup.string().trim().required("Please enter a unit"),
    values: Yup.array(
      Yup.object({
        name: Yup.string().trim().required("Please enter a name"),
        value: Yup.string().trim().required("Please enter a value"),
      })
    ),
  }),

  unitEconomics: Yup.array(
    Yup.object({
      name: Yup.string().trim().required("Please enter a name"),
      value: Yup.string().trim().required("Please enter a value"),
    })
  ),

  statistics: Yup.array(
    Yup.object({
      name: Yup.string().trim().required("Please enter a name"),
      value: Yup.string().trim().required("Please enter a value"),
    })
  ),

  counterOffer: Yup.array(
    Yup.object({
      sharkName: Yup.string().trim().required("Please enter a shark name"),
      amount: Yup.string().trim().required("Please enter a amount"),
      valuation: Yup.string().trim().required("Please enter a valuation"),
      equity: Yup.number().required("Please enter an equity"),
      debt: Yup.string().trim(),
      debtInterest: Yup.number(),
    })
  ),

  dealClosed: Yup.object({
    sharkName: Yup.string().trim(),
    amount: Yup.string().trim(),
    valuation: Yup.string(),
    equity: Yup.number(),
    debt: Yup.string().trim(),
    debtInterest: Yup.number(),
  }),

  productImage: Yup.string().trim().required("Please enter product image url"),

  informationImage: Yup.string(),

  categories: Yup.array(
    Yup.string().trim().required("Please enter a category")
  ).required("Please enter at least one category"),

  season: Yup.number().required("Please enter season number"),

  episode: Yup.number().required("Please enter episode number"),

  precedence: Yup.number().required("Please enter precedence number"),

  featured: Yup.boolean().required("Please select featured status"),
});

export default productValidationSchema;

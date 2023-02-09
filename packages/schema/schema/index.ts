import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: string;
  AWSDateTime: string;
  AWSEmail: string;
  AWSIPAddress: string;
  AWSJSON: string;
  AWSPhone: string;
  AWSTime: string;
  AWSTimestamp: number;
  AWSURL: string;
};

export type Deal = {
  __typename: 'Deal';
  amount: Scalars['String'];
  debt?: Maybe<Scalars['String']>;
  debtInterest?: Maybe<Scalars['Int']>;
  equity: Scalars['Float'];
  sharkName: Scalars['String'];
  valuation: Scalars['String'];
};

export type DealInput = {
  amount: Scalars['String'];
  debt?: InputMaybe<Scalars['String']>;
  debtInterest?: InputMaybe<Scalars['Int']>;
  equity: Scalars['Float'];
  sharkName: Scalars['String'];
  valuation: Scalars['String'];
};

export type GetProductDetailInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type GetProductDetailResult = Product | ServerError | ValidationError;

export type GetProductsInput = {
  featured?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type GetProductsResult = Products | ServerError | ValidationError;

export type ImageInput = {
  base64: Scalars['String'];
  contentType: Scalars['String'];
};

export type ImageUpload = {
  __typename: 'ImageUpload';
  base64: Scalars['String'];
  contentType: Scalars['String'];
};

export type ImageUploadResult = ImageUploadSuccess | ServerError | ValidationError;

export type ImageUploadSuccess = {
  __typename: 'ImageUploadSuccess';
  url: Scalars['String'];
};

export type MetaData = {
  __typename: 'MetaData';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type MetaDataInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type Mutation = {
  __typename: 'Mutation';
  imageUpload?: Maybe<ImageUploadResult>;
  product?: Maybe<ProductCreationResult>;
};


export type MutationImageUploadArgs = {
  input: ImageInput;
};


export type MutationProductArgs = {
  input: ProductInput;
};

export type Product = {
  __typename: 'Product';
  appStoreLink?: Maybe<Scalars['String']>;
  categories: Array<Maybe<Scalars['String']>>;
  companyName: Scalars['String'];
  counterOffer?: Maybe<Array<Maybe<Deal>>>;
  createdAt?: Maybe<Scalars['AWSDateTime']>;
  dealClosed?: Maybe<Deal>;
  episode: Scalars['Int'];
  established: Scalars['Int'];
  featured: Scalars['Boolean'];
  founders?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  informationImage?: Maybe<Scalars['String']>;
  marketPlace?: Maybe<Array<Maybe<MetaData>>>;
  numberOfEmployees?: Maybe<Scalars['Int']>;
  originalAsk: Scalars['String'];
  playStoreLink?: Maybe<Scalars['String']>;
  precedence: Scalars['Int'];
  productFeatures?: Maybe<Array<Maybe<Scalars['String']>>>;
  productImage?: Maybe<Scalars['String']>;
  sales?: Maybe<Array<Maybe<MetaData>>>;
  salesSplit?: Maybe<Array<Maybe<MetaData>>>;
  season: Scalars['Int'];
  statistics?: Maybe<Array<Maybe<MetaData>>>;
  story: Scalars['String'];
  title: Scalars['String'];
  unitEconomics?: Maybe<Array<Maybe<MetaData>>>;
  valueChain?: Maybe<Array<Maybe<Scalars['String']>>>;
  website?: Maybe<Scalars['String']>;
};

export type ProductCreationResult = Product | ServerError | ValidationError;

export type ProductInput = {
  appStoreLink?: InputMaybe<Scalars['String']>;
  categories: Array<InputMaybe<Scalars['String']>>;
  companyName: Scalars['String'];
  counterOffer?: InputMaybe<Array<InputMaybe<DealInput>>>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  dealClosed?: InputMaybe<DealInput>;
  episode: Scalars['Int'];
  established: Scalars['Int'];
  featured: Scalars['Boolean'];
  founders?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  informationImage?: InputMaybe<Scalars['String']>;
  marketPlace?: InputMaybe<Array<InputMaybe<MetaDataInput>>>;
  numberOfEmployees?: InputMaybe<Scalars['Int']>;
  originalAsk?: InputMaybe<Scalars['String']>;
  playStoreLink?: InputMaybe<Scalars['String']>;
  precedence: Scalars['Int'];
  productFeatures?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  productImage?: InputMaybe<Scalars['String']>;
  sales?: InputMaybe<Array<InputMaybe<MetaDataInput>>>;
  salesSplit?: InputMaybe<Array<InputMaybe<MetaDataInput>>>;
  season: Scalars['Int'];
  statistics?: InputMaybe<Array<InputMaybe<MetaDataInput>>>;
  story?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  unitEconomics?: InputMaybe<Array<InputMaybe<MetaDataInput>>>;
  valueChain?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  website?: InputMaybe<Scalars['String']>;
};

export type Products = {
  __typename: 'Products';
  products: Array<Maybe<Product>>;
};

export type Query = {
  __typename: 'Query';
  product?: Maybe<GetProductDetailResult>;
  products?: Maybe<GetProductsResult>;
};


export type QueryProductArgs = {
  input: GetProductDetailInput;
};


export type QueryProductsArgs = {
  input?: InputMaybe<GetProductsInput>;
};

export type ServerError = {
  __typename: 'ServerError';
  message: Scalars['String'];
};

export enum Status {
  Closed = 'CLOSED',
  Open = 'OPEN'
}

export type ValidationError = {
  __typename: 'ValidationError';
  data: Array<ValidationErrorField>;
  message: Scalars['String'];
};

export type ValidationErrorField = {
  __typename: 'ValidationErrorField';
  errorMessages: Array<Scalars['String']>;
  field: Scalars['String'];
};

export type MutateProductMutationVariables = Exact<{
  input: ProductInput;
}>;


export type MutateProductMutation = { __typename: 'Mutation', product?: { __typename: 'Product', id: string, title: string, companyName: string, numberOfEmployees?: number, productFeatures?: Array<string>, productImage?: string, informationImage?: string, season: number, episode: number, precedence: number, featured: boolean, createdAt?: string } | { __typename: 'ServerError', message: string } | { __typename: 'ValidationError', message: string, data: Array<{ __typename: 'ValidationErrorField', field: string, errorMessages: Array<string> }> } };

export type MutateImageMutationVariables = Exact<{
  input: ImageInput;
}>;


export type MutateImageMutation = { __typename: 'Mutation', imageUpload?: { __typename: 'ImageUploadSuccess', url: string } | { __typename: 'ServerError', message: string } | { __typename: 'ValidationError', message: string, data: Array<{ __typename: 'ValidationErrorField', field: string, errorMessages: Array<string> }> } };

export type ProductQueryVariables = Exact<{
  input: GetProductDetailInput;
}>;


export type ProductQuery = { __typename: 'Query', product?: { __typename: 'Product', id: string, title: string, companyName: string, website?: string, appStoreLink?: string, playStoreLink?: string, established: number, founders?: string, numberOfEmployees?: number, story: string, productFeatures?: Array<string>, valueChain?: Array<string>, originalAsk: string, productImage?: string, informationImage?: string, categories: Array<string>, season: number, episode: number, precedence: number, featured: boolean, createdAt?: string, marketPlace?: Array<{ __typename: 'MetaData', name: string, value: string }>, sales?: Array<{ __typename: 'MetaData', name: string, value: string }>, salesSplit?: Array<{ __typename: 'MetaData', name: string, value: string }>, unitEconomics?: Array<{ __typename: 'MetaData', name: string, value: string }>, statistics?: Array<{ __typename: 'MetaData', name: string, value: string }>, counterOffer?: Array<{ __typename: 'Deal', sharkName: string, amount: string, valuation: string, equity: number, debt?: string, debtInterest?: number }>, dealClosed?: { __typename: 'Deal', sharkName: string, amount: string, valuation: string, equity: number, debt?: string, debtInterest?: number } } | { __typename: 'ServerError', message: string } | { __typename: 'ValidationError', message: string, data: Array<{ __typename: 'ValidationErrorField', field: string, errorMessages: Array<string> }> } };

export type ProductsQueryVariables = Exact<{
  input: GetProductsInput;
}>;


export type ProductsQuery = { __typename: 'Query', products?: { __typename: 'Products', products: Array<{ __typename: 'Product', id: string, title: string, companyName: string, website?: string, appStoreLink?: string, playStoreLink?: string, established: number, founders?: string, numberOfEmployees?: number, story: string, productFeatures?: Array<string>, valueChain?: Array<string>, originalAsk: string, productImage?: string, informationImage?: string, categories: Array<string>, season: number, episode: number, precedence: number, featured: boolean, createdAt?: string, marketPlace?: Array<{ __typename: 'MetaData', name: string, value: string }>, sales?: Array<{ __typename: 'MetaData', name: string, value: string }>, salesSplit?: Array<{ __typename: 'MetaData', name: string, value: string }>, unitEconomics?: Array<{ __typename: 'MetaData', name: string, value: string }>, statistics?: Array<{ __typename: 'MetaData', name: string, value: string }>, counterOffer?: Array<{ __typename: 'Deal', sharkName: string, amount: string, valuation: string, equity: number, debt?: string, debtInterest?: number }>, dealClosed?: { __typename: 'Deal', sharkName: string, amount: string, valuation: string, equity: number, debt?: string, debtInterest?: number } }> } | { __typename: 'ServerError', message: string } | { __typename: 'ValidationError', message: string, data: Array<{ __typename: 'ValidationErrorField', field: string, errorMessages: Array<string> }> } };


export const MutateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MutateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfEmployees"}},{"kind":"Field","name":{"kind":"Name","value":"productFeatures"}},{"kind":"Field","name":{"kind":"Name","value":"productImage"}},{"kind":"Field","name":{"kind":"Name","value":"informationImage"}},{"kind":"Field","name":{"kind":"Name","value":"season"}},{"kind":"Field","name":{"kind":"Name","value":"episode"}},{"kind":"Field","name":{"kind":"Name","value":"precedence"}},{"kind":"Field","name":{"kind":"Name","value":"featured"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ValidationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"errorMessages"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServerError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<MutateProductMutation, MutateProductMutationVariables>;
export const MutateImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MutateImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ImageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageUploadSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ValidationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"errorMessages"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServerError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<MutateImageMutation, MutateImageMutationVariables>;
export const ProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"product"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProductDetailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"marketPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"appStoreLink"}},{"kind":"Field","name":{"kind":"Name","value":"playStoreLink"}},{"kind":"Field","name":{"kind":"Name","value":"established"}},{"kind":"Field","name":{"kind":"Name","value":"founders"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfEmployees"}},{"kind":"Field","name":{"kind":"Name","value":"story"}},{"kind":"Field","name":{"kind":"Name","value":"productFeatures"}},{"kind":"Field","name":{"kind":"Name","value":"valueChain"}},{"kind":"Field","name":{"kind":"Name","value":"originalAsk"}},{"kind":"Field","name":{"kind":"Name","value":"sales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"salesSplit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitEconomics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"counterOffer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sharkName"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"valuation"}},{"kind":"Field","name":{"kind":"Name","value":"equity"}},{"kind":"Field","name":{"kind":"Name","value":"debt"}},{"kind":"Field","name":{"kind":"Name","value":"debtInterest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dealClosed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sharkName"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"valuation"}},{"kind":"Field","name":{"kind":"Name","value":"equity"}},{"kind":"Field","name":{"kind":"Name","value":"debt"}},{"kind":"Field","name":{"kind":"Name","value":"debtInterest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productImage"}},{"kind":"Field","name":{"kind":"Name","value":"informationImage"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"season"}},{"kind":"Field","name":{"kind":"Name","value":"episode"}},{"kind":"Field","name":{"kind":"Name","value":"precedence"}},{"kind":"Field","name":{"kind":"Name","value":"featured"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ValidationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"errorMessages"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServerError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"products"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProductsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Products"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"marketPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"appStoreLink"}},{"kind":"Field","name":{"kind":"Name","value":"playStoreLink"}},{"kind":"Field","name":{"kind":"Name","value":"established"}},{"kind":"Field","name":{"kind":"Name","value":"founders"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfEmployees"}},{"kind":"Field","name":{"kind":"Name","value":"story"}},{"kind":"Field","name":{"kind":"Name","value":"productFeatures"}},{"kind":"Field","name":{"kind":"Name","value":"valueChain"}},{"kind":"Field","name":{"kind":"Name","value":"originalAsk"}},{"kind":"Field","name":{"kind":"Name","value":"sales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"salesSplit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unitEconomics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"counterOffer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sharkName"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"valuation"}},{"kind":"Field","name":{"kind":"Name","value":"equity"}},{"kind":"Field","name":{"kind":"Name","value":"debt"}},{"kind":"Field","name":{"kind":"Name","value":"debtInterest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dealClosed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sharkName"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"valuation"}},{"kind":"Field","name":{"kind":"Name","value":"equity"}},{"kind":"Field","name":{"kind":"Name","value":"debt"}},{"kind":"Field","name":{"kind":"Name","value":"debtInterest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productImage"}},{"kind":"Field","name":{"kind":"Name","value":"informationImage"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"season"}},{"kind":"Field","name":{"kind":"Name","value":"episode"}},{"kind":"Field","name":{"kind":"Name","value":"precedence"}},{"kind":"Field","name":{"kind":"Name","value":"featured"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ValidationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"errorMessages"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServerError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
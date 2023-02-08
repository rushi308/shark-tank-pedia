export default class Validator {
  constructor() {}

  async validateProduct(): Promise<void> {
    // Ensure static fields are not modified.
    // if (current) {
    //   if (product.reference.productCode !== current.reference.productCode) {
    //     throw new ValidationError("Product code is immutable", [
    //       {
    //         field: "activity.reference.productCode",
    //         errorMessages: ["Product code data is immutable"],
    //       },
    //     ]);
    //   }
    //   if (
    //     activity.reference.propositionCode !== current.reference.propositionCode
    //   ) {
    //     throw new ValidationError("Proposition code is immutable", [
    //       {
    //         field: "activity.reference.propositionCode",
    //         errorMessages: ["Proposition code data is immutable"],
    //       },
    //     ]);
    //   }
    //   if (
    //     activity.reference.propositionName !== current.reference.propositionName
    //   ) {
    //     throw new ValidationError("Proposition name is immutable", [
    //       {
    //         field: "activity.reference.propositionName",
    //         errorMessages: ["Proposition name is immutable"],
    //       },
    //     ]);
    //   }
    //   if (activity.reference.sourceCode !== current.reference.sourceCode) {
    //     throw new ValidationError("Source code is immutable", [
    //       {
    //         field: "activity.reference.sourceCode",
    //         errorMessages: ["Source code data is immutable"],
    //       },
    //     ]);
    //   }
    //   if (
    //     activity.reference.subPropositionCode !==
    //     current.reference.subPropositionCode
    //   ) {
    //     throw new ValidationError("Sub proposition code is immutable", [
    //       {
    //         field: "activity.reference.subPropositionCode",
    //         errorMessages: ["Sub proposition code is immutable"],
    //       },
    //     ]);
    //   }
    //   if (
    //     activity.reference.subPropositionName !==
    //     current.reference.subPropositionName
    //   ) {
    //     throw new ValidationError("Sub proposition name is immutable", [
    //       {
    //         field: "activity.reference.subPropositionName",
    //         errorMessages: ["Sub proposition name is immutable"],
    //       },
    //     ]);
    //   }
    //   if (activity.url !== current.url) {
    //     throw new ValidationError("URL is immutable", [
    //       {
    //         field: "activity.url",
    //         errorMessages: ["URL is immutable"],
    //       },
    //     ]);
    //   }
    //   if (activity.name !== current.name) {
    //     throw new ValidationError("Name is immutable", [
    //       {
    //         field: "activity.name",
    //         errorMessages: ["Name is immutable"],
    //       },
    //     ]);
    //   }
    //   if (activity.journeyConfig.journey !== current.journeyConfig.journey) {
    //     throw new ValidationError("Journey is immutable", [
    //       {
    //         field: "activity.journeyConfig.journey",
    //         errorMessages: ["Journey is immutable"],
    //       },
    //     ]);
    //   }
    //   if (activity.type !== current.type) {
    //     throw new ValidationError("Type is immutable", [
    //       {
    //         field: "activity.type",
    //         errorMessages: ["Type is immutable"],
    //       },
    //     ]);
    //   }
    // }
    // // Ensure activity type is valid
    // if (
    //   !(await this.activityTypeUsecase.getActivityTypes()).types.includes(
    //     activity.type
    //   )
    // ) {
    //   throw new ValidationError("Type is invalid", [
    //     {
    //       field: "activity.type",
    //       errorMessages: ["Type is invalid"],
    //     },
    //   ]);
    // }
    // // Ensure product code is valid
    // if (
    //   !(await this.productCodeUsecase.getProductCodes()).codes.includes(
    //     activity.reference.productCode
    //   )
    // ) {
    //   throw new ValidationError("Product code is invalid", [
    //     {
    //       field: "activity.productCode",
    //       errorMessages: ["Product code is invalid"],
    //     },
    //   ]);
    // }
    // if (
    //   activity.fundraisingPageTypeReference &&
    //   (!current ||
    //     current.fundraisingPageTypeReference !==
    //       activity.fundraisingPageTypeReference)
    // ) {
    //   // If fundraising page type has changed ensure it is valid.
    //   if (
    //     !(await this.fundraisingAdapter.hasFundraisingPageType(
    //       activity.fundraisingPageTypeReference
    //     ))
    //   ) {
    //     throw new ValidationError(
    //       "Fundraising page type reference is invalid",
    //       [
    //         {
    //           field: "activity.fundraisingPageTypeReference",
    //           errorMessages: ["Fundraising page type reference is invalid"],
    //         },
    //       ]
    //     );
    //   }
    // }
  }
}

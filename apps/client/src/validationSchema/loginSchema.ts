import * as Yup from "yup";

const loginValidationSchema = Yup.object({
  username: Yup.string().trim().required("Please enter a username"),

  password: Yup.string().required("Please enter your password"),
});

export default loginValidationSchema;

import React from "react";
import {
  Card,
  Spacer,
  Button,
  Text,
  Input,
  Container,
} from "@nextui-org/react";
import { Mail } from "../../icons/mail-icon";
import { Password } from "../../icons/password-icon";
import { Formik } from "formik";
import loginValidationSchema from "@/validationSchema/loginSchema";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

export const Login = () => {
  const router = useRouter();

  const onSubmit = async (values: any) => {
    try {
      const user = await Auth.signIn(values.username, values.password);
      if (user) {
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const initialProductFormValues = {
    username: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialProductFormValues}
      validationSchema={loginValidationSchema}
      validateOnChange={false}
      onSubmit={onSubmit}
    >
      {({
        handleSubmit,
        setValues,
        getFieldProps,
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} noValidate id="page-login-form">
          <div>
            <Container
              display="flex"
              alignItems="center"
              justify="center"
              css={{ minHeight: "100vh" }}
            >
              <Card css={{ mw: "420px", p: "20px" }} variant="bordered">
                <Text
                  size={24}
                  weight="bold"
                  css={{
                    as: "center",
                    mb: "20px",
                  }}
                >
                  SharkTankPedia Admin
                </Text>
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="username"
                  name="username"
                  status={
                    touched.username && errors?.username ? "error" : undefined
                  }
                  label={(touched.username && errors?.username) || "Username"}
                  contentLeft={<Mail fill="currentColor" />}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Spacer y={1} />
                <Input
                  clearable
                  bordered
                  fullWidth
                  type="password"
                  color="primary"
                  status={
                    touched.password && errors?.password ? "error" : undefined
                  }
                  size="lg"
                  name="password"
                  placeholder="Password"
                  label={(touched.password && errors?.password) || "Password"}
                  contentLeft={<Password fill="currentColor" />}
                  css={{ mb: "6px" }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Spacer y={1} />
                <Button type="submit">Sign in</Button>
              </Card>
            </Container>
          </div>
        </form>
      )}
    </Formik>
  );
};

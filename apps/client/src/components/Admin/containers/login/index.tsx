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

export const Login = () => {
  return (
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
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Spacer y={1} />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
            css={{ mb: "6px" }}
          />
          <Spacer y={1} />
          <Button>Sign in</Button>
        </Card>
      </Container>
    </div>
  );
};

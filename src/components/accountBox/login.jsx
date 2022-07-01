import React, { useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
        <BoxContainer>
          <FormContainer>
            <Input type="email" name="email" placeholder="Email" required="" />
            <Input type="password" name="" placeholder="Password" required="" />
          </FormContainer>
          <SubmitButton type="submit">Login</SubmitButton>
          <MutedLink href="#">
          Don't have an account?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
             Signup
          </BoldLink>
          </MutedLink>
        </BoxContainer>
      );
    }
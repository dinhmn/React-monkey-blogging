import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { Field } from "components/field";
import { useState } from "react";
import { Button } from "components/button";

const SignupPageStyles = styled.div`
  padding: 40px;

  .logo {
    margin: 0 auto 20px;
    width: 150px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { error, isValid, isSummitting },
    watch,
  } = useForm({});
  const handleSignUp = (values) => {
    console.log(values);
  };
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <SignupPageStyles>
      <div>
        <img
          srcSet="/logo.png"
          alt="monkey-blogging"
          className="logo"
          autoComplete="off"
        />
        <h1 className="heading">Monkey Blogging</h1>
        <form
          action=""
          className="form"
          onSubmit={handleSubmit(handleSignUp)}
          autoC
        >
          <Field>
            <Label htmlFor="fullname" className="label">
              Fullname
            </Label>
            <Input
              type="text"
              placeholder="Enter your fullname"
              name="fullname"
              control={control}
            >
              {/* <IconEyeClose className="input-icon"></IconEyeClose> */}
            </Input>
          </Field>
          <Field>
            <Label htmlFor="email" className="label">
              Email Address
            </Label>
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              control={control}
            >
              {/* <IconEyeClose className="input-icon"></IconEyeClose> */}
            </Input>
          </Field>
          <Field>
            <Label htmlFor="password" className="label">
              Password
            </Label>
            <Input
              type={togglePassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              control={control}
            >
              {!togglePassword ? (
                <IconEyeClose
                  onClick={() => setTogglePassword(true)}
                ></IconEyeClose>
              ) : (
                <IconEyeOpen
                  onClick={() => setTogglePassword(false)}
                ></IconEyeOpen>
              )}
            </Input>
          </Field>
          <Button></Button>
        </form>
      </div>
    </SignupPageStyles>
  );
};

export default SignUpPage;

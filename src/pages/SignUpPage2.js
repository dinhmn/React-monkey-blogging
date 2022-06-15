import { Input } from "components/input";
import { Label } from "components/label";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { Field } from "components/field";
import { useState } from "react";
import { Button } from "components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "firebase-app/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";

const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSummitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignUp = async (values) => {
    console.log(values);
    if (!isValid) return;
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    const colRef = collection(db, "users");
    await addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });
    toast.success("Register successfully!!!");
    navigate("/");
  };
  const [togglePassword, setTogglePassword] = useState(false);
  useEffect(() => {
    const arrayErrors = Object.values(errors);
    if (arrayErrors.length > 0) {
      toast.error(arrayErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  useEffect(() => {
    document.title = "Register Page";
  });
  return (
    <AuthenticationPage>
      <div>
        <form
          className="form"
          onSubmit={handleSubmit(handleSignUp)}
          autoComplete="off"
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
          <div className="have-account">
            You already have an account?{" "}
            <NavLink to={"/sign-in"}>Login</NavLink>{" "}
          </div>
          <Button
            type="submit"
            disabled={isSummitting}
            isLoading={isSummitting}
            style={{ maxWidth: 300, margin: "0 auto" }}
          >
            Sign up
          </Button>
        </form>
      </div>
    </AuthenticationPage>
  );
};

export default SignUpPage;

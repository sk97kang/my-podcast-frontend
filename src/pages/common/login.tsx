import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

import { isLoggedInVar } from "../../apollo";
import { login, loginVariables } from "../../__generated__/login";
import { LOCALSTORAGE_TOKEN } from "../../constants";

import { Button } from "../../components/button";
import { FormError } from "../../components/form-error";
import { Layout } from "../../components/layout";
import { Title } from "../../components/title";

export const LOGIN_MUTATION = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      ok
      error
      token
    }
  }
`;

interface IFormInputs {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const onCompleted = (data: login) => {
    const { ok, token } = data.login;
    if (ok && token) {
      isLoggedInVar(true);
      localStorage.setItem(LOCALSTORAGE_TOKEN, token);
    }
  };
  const [loginMutation, { loading, data }] = useMutation<login, loginVariables>(
    LOGIN_MUTATION,
    {
      onCompleted,
    }
  );
  const {
    register,
    handleSubmit,
    getValues,
    errors,
    formState,
  } = useForm<IFormInputs>({
    mode: "onChange",
  });
  const onSubmit = () => {
    if (!loading) {
      const { email, password } = getValues();
      loginMutation({ variables: { input: { email, password } } });
    }
  };
  return (
    <Layout className="flex flex-col justify-center items-center" title="Login">
      <Title text="Log In" className="mb-8" />
      <form
        className="w-full max-w-sm grid gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="input"
          ref={register({
            required: "Email is required",
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
          type="email"
          name="email"
          placeholder="Email"
        />
        {errors.email?.message && <FormError message={errors.email.message} />}
        <input
          className="input"
          ref={register({
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Password must be at least 5 characters long",
            },
          })}
          type="password"
          name="password"
          placeholder="Password"
        />
        {errors.password?.message && (
          <FormError message={errors.password.message} />
        )}
        <Button text="submit" loading={loading} disabled={!formState.isValid} />
        {data?.login.error && <FormError message={data.login.error} />}
      </form>
    </Layout>
  );
};

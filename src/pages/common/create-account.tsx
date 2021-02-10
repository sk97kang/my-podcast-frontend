import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import {
  createAccount,
  createAccountVariables,
} from "../../__generated__/createAccount";
import { UserRole } from "../../__generated__/globalTypes";

import { Button } from "../../components/button";
import { FormError } from "../../components/form-error";
import { Layout } from "../../components/layout";
import { Title } from "../../components/title";

export const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount($input: CreateAccountInput!) {
    createAccount(input: $input) {
      ok
      error
    }
  }
`;

interface IFormInputs {
  email: string;
  password: string;
  role: UserRole;
}

export const CreateAccountPage = () => {
  const history = useHistory();
  const onCompleted = (data: createAccount) => {
    const { ok, error } = data.createAccount;
    if (ok) {
      history.push("/");
    }
  };
  const [createAccountMutation, { loading, data }] = useMutation<
    createAccount,
    createAccountVariables
  >(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
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
      const { email, password, role } = getValues();
      createAccountMutation({
        variables: { input: { email, password, role } },
      });
    }
  };
  return (
    <Layout
      className="flex flex-col justify-center items-center"
      title="Create Account"
    >
      <Title text="Create Account" className="mb-8" />
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
        <select
          className="input"
          ref={register({ required: true })}
          name="role"
        >
          {Object.keys(UserRole).map(role => (
            <option>{role}</option>
          ))}
        </select>
        <Button text="submit" loading={loading} disabled={!formState.isValid} />
        {data?.createAccount.error && (
          <FormError message={data.createAccount.error} />
        )}
      </form>
    </Layout>
  );
};

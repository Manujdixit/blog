import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@manujdixit/medium-common";
import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

//trpc
const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setpostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendRequest() {
    try {
      // console.log(postInputs);
      const response = await axios.post(
        type === "signup"
          ? `${BACKEND_URL}/api/v1/user/signup`
          : `${BACKEND_URL}/api/v1/user/signin`,
        postInputs
      );
      // console.log(response);
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <div className="flex justify-center flex-col  xl:max-w-screen-sm">
        <div className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-2 font-libre">
          {type === "signin" ? (
            <div>Ready to Dive In?</div>
          ) : (
            <div>Join our growing community of writers</div>
          )}
        </div>
        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mb-5">
          {type === "signin" ? (
            <div>Unlock your voice. Start your storytelling journey now.</div>
          ) : (
            <div>
              Sign up today and start sharing your stories with the world.
            </div>
          )}
        </p>
        <div className="mb-4 space-y-4">
          {type === "signup" ? (
            <LabelledInput
              label="Name"
              onChange={(e) => {
                // setpostInputs((c) => ({
                //   ...c,
                //   name: e.target.value,
                // }));
                setpostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
          ) : null}

          <LabelledInput
            label="Email"
            onChange={(e) => {
              // setpostInputs((c) => ({
              //   ...c,
              //   name: e.target.value,
              // }));
              setpostInputs({
                ...postInputs,
                username: e.target.value,
              });
            }}
          />
          <LabelledInput
            label="Password"
            type={"password"}
            onChange={(e) => {
              // setpostInputs((c) => ({
              //   ...c,
              //   name: e.target.value,
              // }));
              setpostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <Button onClick={sendRequest} color="primary" className="min-w-96">
            {type === "signup" ? "Sign up" : "Signin"}
          </Button>
        </div>
        <div className="text-slate-400  mt-2">
          {type === "signup"
            ? "Already have an account? "
            : "Don't have an account? "}
          <Link
            to={type === "signup" ? "/signin" : "/signup"}
            className="underline"
          >
            {type === "signup" ? "Sign in" : "Sign up"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;

interface LabelledInputType {
  type?: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({ type, label, onChange }: LabelledInputType) {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input
        className="max-w-96"
        type={type || "text"}
        label={label}
        onChange={onChange}
        required
      />
    </div>
  );
}

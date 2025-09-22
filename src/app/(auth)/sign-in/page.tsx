import { Metadata } from "next";

import { SignIn } from "@/components/pages";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = () => {
  return <SignIn />;
};

export default SignInPage;

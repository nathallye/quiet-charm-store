"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithCredentials } from "@/lib/actions/user.actions";

export const CredentialsSignInForm = () => {
  const t = useTranslations("pages.sign_in.form");
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });

  console.log(data)

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? t("signing_in") : t("sign_in")}
      </Button>
    );
  };

  return (
    <form action={action}>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">{t("labels.email")}</Label>
          <Input
            id="email"
            name="email"
            required
            type="email"
            defaultValue=""
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">{t("labels.password")}</Label>
          <Input
            id="password"
            name="password"
            required
            type="password"
            defaultValue=""
            autoComplete="current-password"
          />
        </div>
        <div>
          <SignInButton />
        </div>

        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}

        <div className="text-sm text-center text-muted-foreground">
          {`${t("dont_have_an_account")}` + " "}
          <Link target="_self" className="link" href="/sign-up">
            {t("sign_up")}
          </Link>
        </div>
      </div>
    </form>
  );
};

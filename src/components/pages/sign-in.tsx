import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const SignIn = () => {
  const t = useTranslations("pages.sign_in");

  return (
    <div className="w-full max-w-md">
      <Card>
        <CardHeader className="space-y-4">
          <Link href="/" className="flex items-center justify-center">
            <Image
              className="rounded-sm"
              priority={true}
              src="/images/logos/1.png"
              width={100}
              height={100}
              alt={`${t("app_name")} logo`}
            />
          </Link>
          <CardTitle className="text-center">{t("title")}</CardTitle>
          <CardDescription className="text-center">
            {t("description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">{/* FORM HERE */}</CardContent>
      </Card>
    </div>
  );
};

"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        className="rounded-sm pb-2"
        src="/img/logos/1.png"
        alt={`${t("commons.app_name")} logo`}
        height={58}
        width={58}
        priority
      />
      <div className="p-6 rounded-lg shadow-md w-1/3 text-center">
        <h1 className="text-3xl font-bold mb-4">
          {t("pages.not_found.title")}
        </h1>
        <p className="text-destructive">{t("pages.not_found.description")}</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          {t("pages.not_found.back_to_home")}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

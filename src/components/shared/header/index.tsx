import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

import Menu from "./menu";

export const Header = () => {
  const t = useTranslations("header");

  return (
    <header className="py-4 px-8 flex flex-row items-center border-b border-gray-200/70">
      <div className="flex w-full items-center">
        <Link href="/" className="">
          <Image
            className="rounded-sm"
            src="/images/logos/1.png"
            alt={`${t("app_name")} logo`}
            height={58}
            width={58}
            priority
          />
        </Link>
        <span className="hidden lg:block font-bold text-2xl ml-3">
          {t("app_name")}
        </span>
      </div>

      <Menu />
    </header>
  );
};

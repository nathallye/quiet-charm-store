import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, UserIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import ModelToggle from "./model-toggle";

const Header = () => {
  const t = useTranslations("commons");

  return (
    <header className="py-4 px-8 flex flex-row items-center border-b border-gray-200/70">
      <div className="flex w-full items-center">
        <Link href="/" className="">
          <Image
            className="rounded-sm"
            src="/img/logos/1.png"
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

      <div className="flex items-center">
        <ModelToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild className="bg-amber-700 hover:bg-amber-600">
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;

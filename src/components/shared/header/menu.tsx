import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { ModeToggle } from "./mode-toggle";

const Menu = () => {
  const t = useTranslations("header");

  return (
    <>
      <div className="flex items-center">
        <nav className="md:flex hidden w-full max-w-xs gap-2">
          <ModeToggle />
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart />
              {t("buttons.cart")}
            </Link>
          </Button>
          <Button asChild className="bg-amber-700 hover:bg-amber-600">
            <Link href="/sign-in">
              <UserIcon />
              {t("buttons.sign_in")}
            </Link>
          </Button>
        </nav>
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger className="align-middle">
              <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start">
              <SheetTitle>{t("sheet_title")}</SheetTitle>
              <ModeToggle />
              <Button asChild variant="ghost">
                <Link href="/cart">
                  <ShoppingCart />
                  {t("buttons.cart")}
                </Link>
              </Button>
              <Button asChild>
                <Link href="/sign-in">
                  <UserIcon />
                  {t("buttons.sign_in")}
                </Link>
              </Button>
              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  );
};

export default Menu;

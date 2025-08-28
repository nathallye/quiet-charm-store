import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const t = useTranslations("commons");

  return (
    <header className="w-full border-b">
      <div className="wrapper justify-between">
        <div className="flex-start">
          <Link href="/" className="self-start">
            <Image
              src="/img/logos/1.png"
              alt={`${t("app_name")} logo`}
              height={58}
              width={58}
              priority
              style={{
                borderRadius: "5px",
              }}
            />
          </Link>
          <span className="hidden lg:block font-bold text-2xl ml-3">
            {t("app_name")}
          </span>
        </div>

        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/sign-in">
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

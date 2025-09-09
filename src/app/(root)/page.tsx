import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("pages.home_page");

  return <div className="py-4 px-8">{t("title")}</div>;
};

export default HomePage;

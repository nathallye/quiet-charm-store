import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("pages.home_page");

  return <>{t("title")}</>;
};

export default HomePage;

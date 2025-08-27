import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("HomePage");

  return <>{t("title")}</>;
};

export default HomePage;

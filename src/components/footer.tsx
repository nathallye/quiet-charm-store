import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("commons");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t flex items-center justify-center border-gray-200/70">
      <div className="p-5 flex-center">{`${currentYear} ${t("app_name")}. ${t(
        "copyright"
      )}`}</div>
    </footer>
  );
};

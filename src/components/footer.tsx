import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("commons");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="p-5 flex-center">{`${currentYear} ${t("app_name")} ${t(
        "copyright"
      )}`}</div>
    </footer>
  );
};

export default Footer;

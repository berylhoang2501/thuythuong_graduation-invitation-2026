import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <p>{t.footer.line1}</p>
      <p>{t.footer.line2}</p>
    </footer>
  );
}

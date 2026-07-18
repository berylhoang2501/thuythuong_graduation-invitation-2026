import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { t, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={t.language.label}
      title={t.language.label}
    >
      <span className="language-toggle__flag" aria-hidden="true">
        {t.language.flag}
      </span>
      <span className="language-toggle__text">{t.language.short}</span>
    </button>
  );
}

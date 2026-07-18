import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../i18n";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("vi");

  useEffect(() => {
    const saved = window.localStorage.getItem("graduation-language");
    if (saved === "vi" || saved === "en") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("graduation-language", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      t: translations[lang],
      toggleLanguage: () => setLang((current) => (current === "vi" ? "en" : "vi")),
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

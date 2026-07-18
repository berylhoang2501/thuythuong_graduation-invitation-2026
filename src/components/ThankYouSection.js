import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ThankYouSection() {
  const { t } = useLanguage();

  return (
    <section className="section section--cream">
      <div className="container container--narrow">
        <p className="eyebrow">{t.thankYou.eyebrow}</p>
        <h2>{t.thankYou.title}</h2>
        <p className="lead">{t.thankYou.lead}</p>
      </div>
    </section>
  );
}

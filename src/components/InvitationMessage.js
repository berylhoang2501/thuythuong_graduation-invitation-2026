import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function InvitationMessage() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container container--narrow">
        <h2>{t.message.title}</h2>
        <p className="lead">{t.message.lead}</p>
        <p>{t.message.body}</p>
      </div>
    </section>
  );
}

import React from "react";
import { withPrefix } from "gatsby";
import { useLanguage } from "../context/LanguageContext";

export default function InvitationHero({ guestName }) {
  const { t } = useLanguage();

  return (
    <header className="hero">
      <img
        className="hero__image"
        src={withPrefix("/images/IMG_6022.JPG")}
        alt={t.hero.name}
      />
      <div className="hero__overlay" />

      <div className="hero__content">
        {/* Dùng class riêng hoàn toàn để không bị CSS .eyebrow cũ ghi đè */}
        <div className="hero__invite-label">{t.hero.eyebrow}</div>

        <h1>{t.hero.title}</h1>
        <p className="hero__name">{t.hero.name}</p>

        {guestName ? (
          <p className="hero__guest">
            {t.hero.invitationNamed} <strong>{guestName}</strong>
          </p>
        ) : (
          <p className="hero__guest">{t.hero.invitation}</p>
        )}

        <a className="button button--light" href="#event">
          {t.hero.button}
        </a>
      </div>
    </header>
  );
}

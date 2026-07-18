import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function EventDetails() {
  const { t } = useLanguage();

  const calendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" +
    encodeURIComponent(t.event.calendarTitle) +
    "&dates=20260730T033000Z/20260730T050000Z" +
    "&location=" +
    encodeURIComponent("Nhà hát Hòa Bình, 240 Đường 3 tháng 2, Phường Hòa Hưng, TP.HCM") +
    "&details=" +
    encodeURIComponent(t.event.calendarDetails);

  return (
    <section className="section section--cream" id="event">
      <div className="container">
        <p className="eyebrow">{t.event.eyebrow}</p>
        <h2>{t.event.title}</h2>

        <div className="details-grid details-grid--single">
          <article className="detail-card">
            <span className="detail-card__icon" aria-hidden="true">◷</span>
            <h3>{t.event.timeHeading}</h3>
            <p><strong>{t.event.time}</strong></p>
            <p>{t.event.date}</p>
          </article>
        </div>

        <div className="actions">
          <a className="button" href={calendarUrl} target="_blank" rel="noreferrer">
            {t.event.calendar}
          </a>
        </div>
      </div>
    </section>
  );
}

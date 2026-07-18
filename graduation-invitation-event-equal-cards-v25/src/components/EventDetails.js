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
    encodeURIComponent(
      "Nhà hát Hòa Bình, 240 Đường 3 tháng 2, Phường Hòa Hưng, TP.HCM"
    ) +
    "&details=" +
    encodeURIComponent(t.event.calendarDetails);

  return (
    <section className="section section--cream" id="event">
      <div className="container">
        <p className="eyebrow">{t.event.eyebrow}</p>
        <h2>{t.event.title}</h2>

        <div className="event-v25-grid">
          {/* KHUNG TRÁI */}
          <article className="event-v25-card">
            <div className="event-v25-card__top">
              <div className="event-v25-icon" aria-hidden="true">◷</div>

              <h3 className="event-v25-title">
                {t.event.timeHeading}
              </h3>

              <p className="event-v25-time">
                <strong>{t.event.time}</strong>
              </p>

              <p className="event-v25-date">
                {t.event.date}
              </p>
            </div>

            {/* Nút nằm BÊN TRONG khung trái */}
            <div className="event-v25-card__bottom">
              <a
                className="button event-v25-calendar"
                href={calendarUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.event.calendar}
              </a>
            </div>
          </article>

          {/* KHUNG PHẢI */}
          <article className="event-v25-card">
            <div className="event-v25-card__top">
              <div className="event-v25-icon event-v25-icon--gold" aria-hidden="true">
                ☎
              </div>

              <h3 className="event-v25-contact-heading">
                {t.event.contactHeading}
              </h3>

              <div className="event-v25-contact-list">
                {t.event.contacts.map((contact) => (
                  <a
                    className="event-v25-contact-item"
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    key={contact.phone}
                  >
                    <span className="event-v25-contact-icon" aria-hidden="true">
                      📞
                    </span>
                    <span>
                      <strong>{contact.name}:</strong> {contact.phone}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

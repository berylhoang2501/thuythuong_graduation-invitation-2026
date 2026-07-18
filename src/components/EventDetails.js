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

        <div className="event-equal-grid">
          {/* Cột trái: thời gian + Google Calendar trong cùng khung */}
          <article className="event-equal-card">
            <div className="event-equal-card__icon" aria-hidden="true">◷</div>

            <h3>{t.event.timeHeading}</h3>
            <p className="event-time">
              <strong>{t.event.time}</strong>
            </p>
            <p className="event-date">{t.event.date}</p>

            <a
              className="button event-calendar-button"
              href={calendarUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t.event.calendar}
            </a>
          </article>

          {/* Cột phải: thông tin liên hệ */}
          <article className="event-equal-card">
            <div className="event-equal-card__icon event-equal-card__icon--gold" aria-hidden="true">
              ☎
            </div>

            <h3 className="event-contact-heading">
              {t.event.contactHeading}
            </h3>

            <div className="event-contact-list">
              {t.event.contacts.map((contact) => (
                <a
                  className="event-contact-item"
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  key={contact.phone}
                >
                  <span className="event-contact-phone-icon" aria-hidden="true">📞</span>
                  <span>
                    <strong>{contact.name}:</strong> {contact.phone}
                  </span>
                </a>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

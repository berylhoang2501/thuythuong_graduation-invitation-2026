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

        <div className="event-info-grid-v24">
          {/* CỘT TRÁI */}
          <article className="event-info-card-v24">
            <div className="event-info-icon-v24" aria-hidden="true">
              ◷
            </div>

            <h3 className="event-info-heading-v24">
              {t.event.timeHeading}
            </h3>

            <p className="event-info-time-v24">
              <strong>{t.event.time}</strong>
            </p>

            <p className="event-info-date-v24">
              {t.event.date}
            </p>

            <a
              className="button event-calendar-v24"
              href={calendarUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t.event.calendar}
            </a>
          </article>

          {/* CỘT PHẢI */}
          <article className="event-info-card-v24 event-contact-card-v24">
            <div className="event-info-icon-v24 event-info-icon-v24--gold" aria-hidden="true">
              ☎
            </div>

            <h3 className="event-contact-heading-v24">
              {t.event.contactHeading}
            </h3>

            <div className="event-contact-list-v24">
              {t.event.contacts.map((contact) => (
                <a
                  className="event-contact-item-v24"
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  key={contact.phone}
                >
                  <span className="event-contact-phone-v24" aria-hidden="true">
                    📞
                  </span>

                  <span className="event-contact-text-v24">
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

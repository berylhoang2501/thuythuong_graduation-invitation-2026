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
      {/* CSS đặt trực tiếp trong component để chắc chắn không bị global.css cũ ghi đè */}
      <style>{`
        #event .event-v26-grid {
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 28px !important;
          align-items: stretch !important;
          width: min(1100px, 100%) !important;
          margin: 38px auto 0 !important;
        }

        #event .event-v26-card {
          display: flex !important;
          flex-direction: column !important;
          min-width: 0 !important;
          min-height: 500px !important;
          padding: 42px 36px !important;
          border: 1px solid rgba(20, 33, 61, 0.15) !important;
          border-radius: 24px !important;
          background: #f8f5ef !important;
          color: #14213d !important;
          text-align: center !important;
          box-shadow: none !important;
        }

        #event .event-v26-icon {
          margin-bottom: 24px !important;
          font-size: 2rem !important;
          line-height: 1 !important;
        }

        #event .event-v26-icon.gold {
          color: #9b6b17 !important;
        }

        #event .event-v26-title {
          margin: 0 0 26px !important;
          font-family: Arial, sans-serif !important;
          font-size: 1.15rem !important;
          font-weight: 800 !important;
          line-height: 1.4 !important;
          letter-spacing: 0.06em !important;
          text-transform: uppercase !important;
        }

        #event .event-v26-time {
          margin: 0 0 18px !important;
          font-size: 1.2rem !important;
        }

        #event .event-v26-date {
          margin: 0 !important;
          font-size: 1.08rem !important;
          line-height: 1.6 !important;
        }

        #event .event-v26-calendar-wrap {
          margin-top: auto !important;
          padding-top: 32px !important;
        }

        #event .event-v26-calendar {
          display: inline-block !important;
          margin: 0 !important;
          padding: 14px 26px !important;
          border-radius: 999px !important;
          background: #14213d !important;
          color: #fff !important;
          font-family: Arial, sans-serif !important;
          font-weight: 700 !important;
          text-decoration: none !important;
        }

        #event .event-v26-contact-heading {
          margin: 0 0 28px !important;
          font-family: Arial, sans-serif !important;
          font-size: 1.12rem !important;
          font-weight: 800 !important;
          line-height: 1.6 !important;
          letter-spacing: 0 !important;
          text-transform: none !important;
          text-align: center !important;
        }

        #event .event-v26-contact-list {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 16px !important;
          width: 100% !important;
          margin-top: auto !important;
        }

        #event .event-v26-contact-item {
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
          width: 100% !important;
          min-height: 76px !important;
          padding: 16px 18px !important;
          border: 1px solid rgba(20, 33, 61, 0.10) !important;
          border-radius: 16px !important;
          background: rgba(255, 255, 255, 0.82) !important;
          color: #14213d !important;
          font-family: Arial, sans-serif !important;
          font-size: 1rem !important;
          text-align: left !important;
          text-decoration: none !important;
        }

        #event .event-v26-phone {
          flex: 0 0 auto !important;
          font-size: 1.2rem !important;
        }

        @media (max-width: 800px) {
          #event .event-v26-grid {
            grid-template-columns: 1fr !important;
          }

          #event .event-v26-card {
            min-height: auto !important;
          }

          #event .event-v26-calendar-wrap {
            margin-top: 0 !important;
          }

          #event .event-v26-contact-list {
            margin-top: 0 !important;
          }
        }
      `}</style>

      <div className="container">
        <p className="eyebrow">{t.event.eyebrow}</p>
        <h2>{t.event.title}</h2>

        <div className="event-v26-grid">
          {/* KHUNG TRÁI */}
          <article className="event-v26-card">
            <div className="event-v26-icon" aria-hidden="true">◷</div>

            <h3 className="event-v26-title">
              {t.event.timeHeading}
            </h3>

            <p className="event-v26-time">
              <strong>{t.event.time}</strong>
            </p>

            <p className="event-v26-date">
              {t.event.date}
            </p>

            <div className="event-v26-calendar-wrap">
              <a
                className="event-v26-calendar"
                href={calendarUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.event.calendar}
              </a>
            </div>
          </article>

          {/* KHUNG PHẢI */}
          <article className="event-v26-card">
            <div className="event-v26-icon gold" aria-hidden="true">☎</div>

            <h3 className="event-v26-contact-heading">
              {t.event.contactHeading}
            </h3>

            <div className="event-v26-contact-list">
              {t.event.contacts.map((contact) => (
                <a
                  className="event-v26-contact-item"
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  key={contact.phone}
                >
                  <span className="event-v26-phone" aria-hidden="true">📞</span>
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

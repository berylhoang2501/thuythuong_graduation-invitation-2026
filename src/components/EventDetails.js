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

        {/* Chia 2 cột giống phần ĐỊA ĐIỂM */}
        <div className="details-grid" style={{ alignItems: "stretch", maxWidth: "980px", margin: "38px auto 0" }}>
          {/* Cột trái: giữ nguyên thông tin hiện có */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <article className="detail-card" style={{ flex: 1 }}>
              <span className="detail-card__icon" aria-hidden="true">◷</span>
              <h3>{t.event.timeHeading}</h3>
              <p><strong>{t.event.time}</strong></p>
              <p>{t.event.date}</p>
            </article>

            <div className="actions" style={{ marginTop: "12px", textAlign: "center" }}>
              <a
                className="button"
                href={calendarUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.event.calendar}
              </a>
            </div>
          </div>

          {/* Cột phải: liên hệ hướng dẫn */}
          <aside
            className="detail-card"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "left",
              padding: "34px 28px",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                textAlign: "center",
                fontSize: "2rem",
                color: "#9b6b17",
                marginBottom: "14px",
              }}
            >
              ☎
            </div>

            <h3
              style={{
                marginTop: 0,
                marginBottom: "22px",
                textTransform: "none",
                letterSpacing: "0",
                lineHeight: 1.6,
                textAlign: "center",
              }}
            >
              {t.event.contactHeading}
            </h3>

            <div style={{ display: "grid", gap: "14px" }}>
              {t.event.contacts.map((contact) => (
                <a
                  key={contact.phone}
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 16px",
                    border: "1px solid rgba(20, 33, 61, 0.1)",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.66)",
                    color: "#14213d",
                    textDecoration: "none",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  <span aria-hidden="true" style={{ fontSize: "1.15rem", flex: "0 0 auto" }}>📞</span>
                  <span>
                    <strong>{contact.name}:</strong> {contact.phone}
                  </span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

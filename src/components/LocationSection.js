import React from "react";
import { useLanguage } from "../context/LanguageContext";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Nhà hát Hòa Bình, 240 Đường 3 tháng 2, Phường Hòa Hưng, TP.HCM");

const embedUrl =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Nhà hát Hòa Bình, 240 Đường 3 tháng 2, Phường Hòa Hưng, TP.HCM") +
  "&output=embed";

export default function LocationSection() {
  const { t } = useLanguage();

  return (
    <section className="section location-section">
      <div className="container">
        <p className="eyebrow">{t.location.eyebrow}</p>
        <h2>{t.location.title}</h2>
        <p className="lead">{t.location.address}</p>

        <div className="map-card">
          <iframe
            className="map-frame"
            src={embedUrl}
            title={t.location.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <a
          className="button"
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t.location.mapButton}
        </a>
      </div>
    </section>
  );
}

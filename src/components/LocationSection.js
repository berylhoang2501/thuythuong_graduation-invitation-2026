import React from "react";
import { useLanguage } from "../context/LanguageContext";

function googleMapsUrl(query) {
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(query)
  );
}

const venueQuery =
  "Nhà hát Hòa Bình, 240 Đường 3 tháng 2, Phường Hòa Hưng, TP.HCM";

const parkingQueries = [
  "Phân viện Học viện Hành chính Quốc gia, Số 10 đường 3/2, Phường Hòa Hưng, TP.HCM",
  "Việt Nam Quốc Tự, 242 đường 3/2, Phường Hòa Hưng, TP.HCM",
  "Cafe Rose, 238 đường 3/2, Phường Hòa Hưng, TP.HCM",
  "700 Lê Hồng Phong, Phường Hòa Hưng, TP.HCM",
  "332 Cao Thắng, Phường Hòa Hưng, TP.HCM",
  "177B Cao Thắng, Phường Hòa Hưng, TP.HCM",
];

export default function LocationSection() {
  const { t } = useLanguage();

  return (
    <section className="section location-section">
      <div className="container container--location">
        <p className="eyebrow">{t.location.eyebrow}</p>
        <h2>{t.location.title}</h2>

        <a
          className="location-main-link"
          href={googleMapsUrl(venueQuery)}
          target="_blank"
          rel="noreferrer"
          title={t.location.clickHint}
        >
          {t.location.address}
        </a>

        <p className="location-click-hint">{t.location.clickHint}</p>

        <div className="parking-guide">
          <h3>{t.location.parkingTitle}</h3>

          <div className="parking-list">
            {t.location.parking.map((item, index) => (
              <a
                className="parking-item"
                href={googleMapsUrl(parkingQueries[index])}
                target="_blank"
                rel="noreferrer"
                title={t.location.clickHint}
                key={item.name}
              >
                <strong>{item.name}</strong>
                <span>{item.address}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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

const venueEmbedUrl =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(venueQuery) +
  "&output=embed";

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
      <div className="container">
        <p className="eyebrow">{t.location.eyebrow}</p>

        <div className="location-layout">
          {/* Cột trái: địa điểm tổ chức + bản đồ nhúng */}
          <div className="venue-column">
            <h2>{t.location.title}</h2>
            <p className="venue-address">{t.location.address}</p>

            <div className="map-card">
              <iframe
                className="map-frame"
                src={venueEmbedUrl}
                title={`${t.location.title} - Google Maps`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Cột phải: danh sách gửi xe dạng bullet point.
              Chỉ các mục gửi xe mới nhúng URL Google Maps. */}
          <aside className="parking-column">
            <h3>{t.location.parkingTitle}</h3>

            <ul className="parking-list">
              {t.location.parking.map((item, index) => (
                <li className="parking-item" key={item.name}>
                  <a
                    href={googleMapsUrl(parkingQueries[index])}
                    target="_blank"
                    rel="noreferrer"
                    title={t.location.clickHint}
                  >
                    <strong>{item.name}</strong>
                    <span>{item.address}</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

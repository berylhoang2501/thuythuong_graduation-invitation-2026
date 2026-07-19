import React from "react";
import { useLanguage } from "../context/LanguageContext";

function googleMapsUrl(query) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
}

const venueQuery =
  "Nhà hát Hòa Bình, 240 Đường 3 tháng 2, Phường Hòa Hưng, TP.HCM";

const venueEmbedUrl =
  "https://www.google.com/maps?q=" + encodeURIComponent(venueQuery) + "&output=embed";

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
      <style>{`
        .location-v28-grid {
          display: grid !important;
          grid-template-columns: minmax(0, 1.18fr) minmax(320px, 0.82fr) !important;
          grid-template-rows: auto 500px !important;
          column-gap: 42px !important;
          row-gap: 24px !important;
          align-items: stretch !important;
          width: 100% !important;
          margin-top: 34px !important;
          text-align: left !important;
        }

        .location-v28-info {
          grid-column: 1 !important;
          grid-row: 1 !important;
        }

        .location-v28-info h2 {
          margin: 0 0 10px !important;
          text-align: left !important;
        }

        .location-v28-address {
          margin: 0 !important;
          color: rgba(20, 33, 61, 0.82) !important;
          font-size: 1.08rem !important;
        }

        .location-v28-map {
          grid-column: 1 !important;
          grid-row: 2 !important;
          width: 100% !important;
          height: 500px !important;
          overflow: hidden !important;
          border: 1px solid rgba(20, 33, 61, 0.12) !important;
          border-radius: 22px !important;
          background: #e8e3da !important;
          box-shadow: 0 18px 45px rgba(20, 33, 61, 0.09) !important;
        }

        .location-v28-map iframe {
          display: block !important;
          width: 100% !important;
          height: 100% !important;
          border: 0 !important;
        }

        .location-v28-parking {
          grid-column: 2 !important;
          grid-row: 2 !important;
          height: 500px !important;
          min-height: 500px !important;
          max-height: 500px !important;
          padding: 28px 30px !important;
          overflow-y: auto !important;
          border: 1px solid rgba(20, 33, 61, 0.11) !important;
          border-radius: 22px !important;
          background: #f0e8d9 !important;
          box-shadow: 0 18px 45px rgba(20, 33, 61, 0.06) !important;
        }

        .location-v28-parking h3 {
          margin: 0 0 20px !important;
          color: #14213d !important;
          font-family: Arial, sans-serif !important;
          font-size: 1rem !important;
          line-height: 1.5 !important;
          letter-spacing: 0.08em !important;
          text-align: center !important;
        }

        .location-v28-list {
          margin: 0 !important;
          padding-left: 1.35rem !important;
        }

        .location-v28-item {
          margin: 0 0 13px !important;
          padding-left: 4px !important;
        }

        .location-v28-item:last-child {
          margin-bottom: 0 !important;
        }

        .location-v28-item::marker {
          color: #9b6b17 !important;
        }

        .location-v28-item a {
          color: #14213d !important;
          text-decoration: none !important;
        }

        .location-v28-item strong,
        .location-v28-item span {
          display: block !important;
        }

        .location-v28-item strong {
          margin-bottom: 2px !important;
          font-family: Arial, sans-serif !important;
          font-size: 0.9rem !important;
          line-height: 1.4 !important;
        }

        .location-v28-item span {
          color: rgba(20, 33, 61, 0.76) !important;
          font-size: 0.96rem !important;
          line-height: 1.45 !important;
        }

        @media (max-width: 900px) {
          .location-v28-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto 420px auto !important;
          }

          .location-v28-info {
            grid-column: 1 !important;
            grid-row: 1 !important;
          }

          .location-v28-info h2,
          .location-v28-address {
            text-align: center !important;
          }

          .location-v28-map {
            grid-column: 1 !important;
            grid-row: 2 !important;
            height: 420px !important;
          }

          .location-v28-parking {
            grid-column: 1 !important;
            grid-row: 3 !important;
            height: auto !important;
            min-height: 0 !important;
            max-height: none !important;
            overflow-y: visible !important;
          }
        }
      `}</style>

      <div className="container">
        <p className="eyebrow">{t.location.eyebrow}</p>

        <div className="location-v28-grid">
          <div className="location-v28-info">
            <h2>{t.location.title}</h2>
            <p className="location-v28-address">{t.location.address}</p>
          </div>

          <div className="location-v28-map">
            <iframe
              src={venueEmbedUrl}
              title={`${t.location.title} - Google Maps`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <aside className="location-v28-parking">
            <h3>{t.location.parkingTitle}</h3>
            <ul className="location-v28-list">
              {t.location.parking.map((item, index) => (
                <li className="location-v28-item" key={item.name}>
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

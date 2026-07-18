import React from "react";

const calendarUrl =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=" + encodeURIComponent("Lễ Tốt Nghiệp 2026 - Hoàng Ngọc Thủy Thương") +
  "&dates=20260730T030000Z/20260730T050000Z" +
  "&location=" + encodeURIComponent("Nhà hát Hòa Bình, 240 Đường 3 tháng 2, Phường Hòa Hưng, TP.HCM") +
  "&details=" + encodeURIComponent("Tham dự Lễ Tốt Nghiệp Năm 2026 của Hoàng Ngọc Thủy Thương.");

export default function EventDetails() {
  return (
    <section className="section section--cream" id="event">
      <div className="container">
        <p className="eyebrow">THÔNG TIN BUỔI LỄ</p>
        <h2>Lễ Tốt Nghiệp Năm 2026</h2>
        <div className="details-grid">
          <article className="detail-card">
            <span className="detail-card__icon">◷</span>
            <h3>Thời gian</h3>
            <p><strong>10:00</strong></p>
            <p>Thứ Năm, ngày 30/07/2026</p>
          </article>
          <article className="detail-card">
            <span className="detail-card__icon">⌖</span>
            <h3>Địa điểm</h3>
            <p><strong>Nhà hát Hòa Bình</strong></p>
            <p>240 Đường 3 tháng 2, Phường Hòa Hưng, TP.HCM</p>
          </article>
        </div>
        <div className="actions">
          <a className="button" href={calendarUrl} target="_blank" rel="noreferrer">
            Thêm vào Google Calendar
          </a>
        </div>
      </div>
    </section>
  );
}

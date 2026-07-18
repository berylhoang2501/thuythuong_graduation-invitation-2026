import React from "react";

export default function LocationSection() {
  return (
    <section className="section">
      <div className="container container--narrow">
        <p className="eyebrow">ĐỊA ĐIỂM</p>
        <h2>Nhà hát Hòa Bình</h2>
        <p className="lead">240 Đường 3 tháng 2, Phường Hòa Hưng, TP.HCM</p>
        <a
          className="button"
          href="https://www.google.com/maps/search/?api=1&query=Nh%C3%A0+h%C3%A1t+H%C3%B2a+B%C3%ACnh+240+%C4%90%C6%B0%E1%BB%9Dng+3+th%C3%A1ng+2+TPHCM"
          target="_blank"
          rel="noreferrer"
        >
          Mở Google Maps
        </a>
      </div>
    </section>
  );
}

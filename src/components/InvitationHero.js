import React from "react";
import { withPrefix } from "gatsby";

export default function InvitationHero({ guestName }) {
  return (
    <header className="hero">
      <img
        className="hero__image"
        src={withPrefix("/images/IMG_6022.JPG")}
        alt="Hoàng Ngọc Thủy Thương trong lễ phục tốt nghiệp"
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="eyebrow hero__eyebrow">THIỆP MỜI</p>
        <h1>LỄ TỐT NGHIỆP NĂM 2026</h1>
        <p className="hero__name">Hoàng Ngọc Thủy Thương</p>
        {guestName ? (
          <p className="hero__guest">
            Trân trọng kính mời <strong>{guestName}</strong>
          </p>
        ) : (
          <p className="hero__guest">Trân trọng kính mời bạn đến tham dự</p>
        )}
        <a className="button button--light" href="#event">
          Xem thông tin buổi lễ
        </a>
      </div>
    </header>
  );
}

import React from 'react';
import Countdown from './Countdown';
import heroImage from '../images/IMG_6026.JPG';

const CALENDAR_LINK =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=L%E1%BB%85%20t%E1%BB%91t%20nghi%E1%BB%87p%20n%C4%83m%202026%20-%20Ho%C3%A0ng%20Ng%E1%BB%8Dc%20Th%E1%BB%A7y%20Th%C6%B0%C6%A1ng&dates=20260730T030000Z%2F20260730T040000Z&details=Tr%C3%A2n%20tr%E1%BB%8Dng%20k%C3%ADnh%20m%E1%BB%9Di%20b%E1%BA%A1n%20%C4%91%E1%BA%BFn%20tham%20d%E1%BB%B1%20L%E1%BB%85%20t%E1%BB%91t%20nghi%E1%BB%87p%20n%C4%83m%202026%20c%E1%BB%A7a%20Ho%C3%A0ng%20Ng%E1%BB%8Dc%20Th%E1%BB%A7y%20Th%C6%B0%C6%A1ng.&location=Nh%C3%A0%20h%C3%A1t%20H%C3%B2a%20B%C3%ACnh%2C%20240%20%C4%90%C6%B0%E1%BB%9Dng%203%20th%C3%A1ng%202%2C%20Ph%C6%B0%E1%BB%9Dng%20H%C3%B2a%20H%C6%B0ng%2C%20TP.HCM';

export default function InvitationHero({ guestName, onOpen }) {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-content">
        <div className="hero-photo-wrap">
          <img
            className="hero-photo"
            src={heroImage}
            alt="Hoàng Ngọc Thủy Thương trong lễ phục tốt nghiệp"
          />
        </div>

        <div className="cap" aria-hidden="true">🎓</div>
        <p className="eyebrow">Thiệp mời tham dự</p>
        <h1>Lễ Tốt Nghiệp 2026</h1>
        <h2>Hoàng Ngọc Thủy Thương</h2>
        <p className="hero-date">10:00 • 30/07/2026</p>

        <Countdown />

        <div className="hero-actions">
          <button className="button button-gold" type="button" onClick={onOpen}>
            Mở thiệp
          </button>
          <a className="button button-outline" href={CALENDAR_LINK} target="_blank" rel="noreferrer">
            Thêm vào lịch
          </a>
        </div>

        <div className="guest-block">
          <span>Trân trọng kính mời</span>
          <strong>{guestName || 'Gia đình và bạn bè'}</strong>
        </div>
      </div>
    </section>
  );
}

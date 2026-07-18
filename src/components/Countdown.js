import React, { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const TARGET = new Date("2026-07-30T10:00:00+07:00").getTime();

function getRemaining() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const { t } = useLanguage();
  const [time, setTime] = useState(getRemaining());

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getRemaining()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const items = useMemo(
    () => [
      [t.countdown.units[0], time.days],
      [t.countdown.units[1], time.hours],
      [t.countdown.units[2], time.minutes],
      [t.countdown.units[3], time.seconds],
    ],
    [t, time]
  );

  return (
    <section className="section section--navy">
      <div className="container">
        <p className="eyebrow eyebrow--gold">{t.countdown.eyebrow}</p>
        <h2>{t.countdown.title}</h2>
        <div className="countdown">
          {items.map(([label, value]) => (
            <div className="countdown__item" key={label}>
              <strong>{String(value).padStart(2, "0")}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

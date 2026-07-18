import React from "react";

const flakes = Array.from({ length: 80 }, (_, index) => {
  const left = (index * 29 + 7) % 100;
  const size = 6 + ((index * 11) % 10); // 6px - 15px
  const duration = 7 + ((index * 7) % 8); // 7s - 14s
  const delay = -((index * 5) % 12); // spread flakes across the screen immediately
  const drift = -60 + ((index * 17) % 120);
  const opacity = 0.72 + (((index * 13) % 28) / 100);

  return {
    id: index,
    style: {
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      "--snow-drift": `${drift}px`,
      opacity,
    },
  };
});

export default function SnowfallEffect() {
  return (
    <div className="snowfall" aria-hidden="true">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className={`snowflake snowflake--${flake.id % 3}`}
          style={flake.style}
        />
      ))}
    </div>
  );
}

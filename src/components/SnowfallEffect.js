import React from "react";

const flakes = Array.from({ length: 42 }, (_, index) => {
  const left = (index * 37) % 100;
  const size = 4 + ((index * 13) % 8);
  const duration = 7 + ((index * 17) % 9);
  const delay = -((index * 19) % 14);
  const drift = -35 + ((index * 23) % 70);
  const opacity = 0.35 + (((index * 11) % 60) / 100);

  return {
    id: index,
    style: {
      "--snow-left": `${left}%`,
      "--snow-size": `${size}px`,
      "--snow-duration": `${duration}s`,
      "--snow-delay": `${delay}s`,
      "--snow-drift": `${drift}px`,
      "--snow-opacity": opacity,
    },
  };
});

export default function SnowfallEffect() {
  return (
    <div className="snowfall" aria-hidden="true">
      {flakes.map((flake) => (
        <span
          className="snowflake"
          style={flake.style}
          key={flake.id}
        />
      ))}
    </div>
  );
}

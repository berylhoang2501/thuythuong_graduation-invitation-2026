import React, { useEffect, useRef, useState } from "react";

const VIDEO_ID = "cOEuJq-TnZs";

function sendPlayerCommand(iframe, func, args = []) {
  if (!iframe?.contentWindow) return;

  iframe.contentWindow.postMessage(
    JSON.stringify({
      event: "command",
      func,
      args,
    }),
    "*"
  );
}

function MusicIcon({ muted }) {
  return (
    <svg
      className="music-toggle__svg"
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <path
        d="M25 43V18l24-5v25"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="19" cy="45" rx="8" ry="6" fill="currentColor" />
      <ellipse cx="43" cy="40" rx="8" ry="6" fill="currentColor" />

      {muted && (
        <path
          d="M10 10L54 54"
          fill="none"
          stroke="#e63946"
          strokeWidth="6"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export default function BackgroundMusic() {
  const iframeRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  const startMusic = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    sendPlayerCommand(iframe, "playVideo");
    sendPlayerCommand(iframe, "unMute");
    setMuted(false);
    setStarted(true);
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      startMusic();
    }, 1200);

    // Nếu trình duyệt chặn autoplay có tiếng,
    // lần chạm/click/phím đầu tiên sẽ kích hoạt nhạc.
    const handleFirstInteraction = () => {
      if (!started) {
        startMusic();
      }
    };

    window.addEventListener("pointerdown", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [started]);

  const toggleMusic = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    if (!started) {
      startMusic();
      return;
    }

    if (muted) {
      sendPlayerCommand(iframe, "unMute");
      sendPlayerCommand(iframe, "playVideo");
      setMuted(false);
    } else {
      sendPlayerCommand(iframe, "mute");
      setMuted(true);
    }
  };

  return (
    <>
      <div className="youtube-music-player" aria-hidden="true">
        <iframe
          ref={iframeRef}
          title="Graduation background music"
          width="200"
          height="200"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}&controls=0&enablejsapi=1&playsinline=1&rel=0`}
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <button
        type="button"
        className={`music-toggle${muted ? " music-toggle--muted" : ""}`}
        onClick={toggleMusic}
        aria-label={muted ? "Bật nhạc" : "Tắt nhạc"}
        title={muted ? "Bật nhạc" : "Tắt nhạc"}
      >
        <MusicIcon muted={muted} />
      </button>
    </>
  );
}

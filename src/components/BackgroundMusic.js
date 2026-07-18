import React, { useEffect, useRef, useState } from "react";

const VIDEO_ID = "cOEuJq-TnZs";

function sendCommand(iframe, func, args = []) {
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

function EqualizerIcon() {
  return (
    <span className="music-equalizer" aria-hidden="true">
      <span className="music-equalizer__bar music-equalizer__bar--1" />
      <span className="music-equalizer__bar music-equalizer__bar--2" />
      <span className="music-equalizer__bar music-equalizer__bar--3" />
    </span>
  );
}

function MusicNoteIcon() {
  return (
    <span className="music-note-icon" aria-hidden="true">
      🎵
    </span>
  );
}

export default function BackgroundMusic() {
  const iframeRef = useRef(null);
  const hasStartedRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const startMusic = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    sendCommand(iframe, "unMute");
    sendCommand(iframe, "setVolume", [70]);
    sendCommand(iframe, "playVideo");

    hasStartedRef.current = true;
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    sendCommand(iframe, "pauseVideo");
    setIsPlaying(false);
  };

  useEffect(() => {
    const handleFirstInteraction = (event) => {
      const target = event.target;

      if (target?.closest?.(".music-player-button")) return;

      if (!hasStartedRef.current) {
        startMusic();
      }
    };

    document.addEventListener("pointerdown", handleFirstInteraction, true);
    document.addEventListener("keydown", handleFirstInteraction, true);
    document.addEventListener("touchstart", handleFirstInteraction, true);

    return () => {
      document.removeEventListener("pointerdown", handleFirstInteraction, true);
      document.removeEventListener("keydown", handleFirstInteraction, true);
      document.removeEventListener("touchstart", handleFirstInteraction, true);
    };
  }, []);

  const toggleMusic = () => {
    if (!hasStartedRef.current) {
      startMusic();
      return;
    }

    if (isPlaying) {
      pauseMusic();
    } else {
      startMusic();
    }
  };

  return (
    <>
      {/* YouTube player chỉ dùng làm nguồn nhạc, hoàn toàn ẩn khỏi giao diện */}
      <div className="youtube-audio-only-player" aria-hidden="true">
        <iframe
          ref={iframeRef}
          title="Graduation background music"
          width="200"
          height="200"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=0&loop=1&playlist=${VIDEO_ID}&controls=0&enablejsapi=1&playsinline=1&rel=0&modestbranding=1`}
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex="-1"
        />
      </div>

      <div className="music-player-wrap">
        {/* Vòng tiến trình trang trí giống mẫu tham khảo */}
        <svg
          className={`music-progress-ring${isPlaying ? " music-progress-ring--playing" : ""}`}
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="musicGradientV22" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          <circle
            cx="32"
            cy="32"
            r="28"
            className="music-progress-ring__track"
          />

          <circle
            cx="32"
            cy="32"
            r="28"
            className="music-progress-ring__value"
          />
        </svg>

        <button
          type="button"
          className={`music-player-button${isPlaying ? " music-player-button--playing" : ""}`}
          onClick={toggleMusic}
          aria-label={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
          title={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
        >
          <span className="music-player-button__gradient" aria-hidden="true" />

          <span className="music-player-button__content">
            {isPlaying ? <EqualizerIcon /> : <MusicNoteIcon />}
          </span>

          <span className="music-player-button__ripple" aria-hidden="true" />
        </button>

        {isPlaying && (
          <span className="music-playing-dot" aria-hidden="true">
            <span />
          </span>
        )}
      </div>
    </>
  );
}

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

function MusicIcon({ paused }) {
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

      {paused && (
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
  const hasStartedRef = useRef(false);

  const [paused, setPaused] = useState(false);
  const [started, setStarted] = useState(false);

  const startMusic = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    sendCommand(iframe, "unMute");
    sendCommand(iframe, "setVolume", [70]);
    sendCommand(iframe, "playVideo");

    hasStartedRef.current = true;
    setStarted(true);
    setPaused(false);
  };

  const pauseMusic = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    sendCommand(iframe, "pauseVideo");
    setPaused(true);
  };

  const resumeMusic = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    sendCommand(iframe, "unMute");
    sendCommand(iframe, "playVideo");
    setPaused(false);
  };

  useEffect(() => {
    // Nhạc chỉ bắt đầu sau tương tác đầu tiên với trang.
    // Điều này phù hợp với chính sách autoplay của trình duyệt.
    const handleFirstInteraction = (event) => {
      const target = event.target;

      // Nếu người dùng bấm thẳng nút nhạc thì để onClick của nút tự xử lý,
      // tránh trường hợp vừa bật xong lại bị pause ngay.
      if (target?.closest?.(".music-toggle")) return;

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
    if (!started) {
      startMusic();
      return;
    }

    if (paused) {
      resumeMusic();
    } else {
      pauseMusic();
    }
  };

  return (
    <>
      {/* Player YouTube được giữ ẩn hoàn toàn khỏi giao diện */}
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

      <button
        type="button"
        className={`music-toggle${paused ? " music-toggle--paused" : ""}`}
        onClick={toggleMusic}
        aria-label={
          !started
            ? "Bật nhạc"
            : paused
              ? "Tiếp tục phát nhạc"
              : "Tạm dừng nhạc"
        }
        title={
          !started
            ? "Bật nhạc"
            : paused
              ? "Tiếp tục phát nhạc"
              : "Tạm dừng nhạc"
        }
      >
        <MusicIcon paused={paused || !started} />
      </button>
    </>
  );
}

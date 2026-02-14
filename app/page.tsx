"use client";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const moveNo = () => {
    setNoPos({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  };

  const celebrate = () => {
    setAccepted(true);

    // Confetti burst
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
    });

    // Side confetti
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,_#ff9a9e,_#fad0c4,_#fbc2eb)] overflow-hidden relative">

      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none opacity-25 text-6xl animate-pulse select-none">
        💖 💕 💘 💗 💓 💞
      </div>

      {!accepted ? (
        <div className="relative">
          {/* Envelope */}
          <div
            onClick={() => setOpen(true)}
            className={`cursor-pointer transition-all duration-700 ${
              open ? "scale-110" : "hover:scale-105"
            }`}
          >
            <div className="w-80 h-52 bg-red-400 rounded-b-xl relative shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-0 border-l-[160px] border-r-[160px] border-t-[100px] border-l-transparent border-r-transparent border-t-red-500"></div>

              {/* Letter */}
              {open && (
                <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-72 bg-white rounded-xl p-6 text-center shadow-xl animate-slideUp">
                  <h1 className="text-2xl font-bold text-red-500 mb-2">
                    💌 Dear Mrunal
                  </h1>

                  <p className="text-gray-700 mb-4">
                    Every smile, every moment, every heartbeat feels better
                    thinking of you.
                  </p>

                  <h2 className="text-xl font-semibold mb-6">
                    Will you be my Valentine? ❤️
                  </h2>

                  <div className="flex justify-center gap-4 relative h-12">
                    <button
                      onClick={celebrate}
                      className="px-5 py-2 rounded-lg bg-red-500 text-white font-semibold shadow-md hover:scale-105 transition"
                    >
                      Yes 💖
                    </button>

                    <button
                      onMouseEnter={moveNo}
                      onClick={moveNo}
                      style={{
                        transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                      }}
                      className="px-5 py-2 rounded-lg bg-gray-300 font-semibold shadow-md absolute"
                    >
                      No 🙃
                    </button>
                  </div>
                </div>
              )}
            </div>

            {!open && (
              <p className="text-center mt-4 text-lg font-semibold text-white">
                Tap to open 💌
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center animate-fadeIn relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4">
            I LOVE YOU ❤️
          </h1>
          <p className="text-xl text-white mb-6">
            Happy Valentine’s Day 💕
          </p>

          {/* Balloons */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="balloon left-10">🎈</div>
            <div className="balloon left-1/3">💖</div>
            <div className="balloon right-1/3">🎈</div>
            <div className="balloon right-10">💕</div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translate(-50%, 100px);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in forwards;
        }

        @keyframes floatUp {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-300px);
            opacity: 0;
          }
        }
        .balloon {
          position: absolute;
          bottom: -50px;
          font-size: 3rem;
          animation: floatUp 4s ease-in forwards;
        }
      `}</style>
    </main>
  );
}

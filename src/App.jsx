import React, { useState } from 'react';
import Confetti from 'react-confetti';

const BirthdayWish = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenGift = () => {
    setIsOpened(true);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden"
      style={{
        backgroundImage: "url('src/assets/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {isOpened && <Confetti numberOfPieces={400} gravity={0.3} />}

      {/* Birthday Image */}
      <img 
        src="src/assets/images/bodda.jpg" 
        alt="Birthday Celebration" 
        className="w-40 md:w-60 rounded-full shadow-lg mb-6 animate-fade-in"
      />

      {/* Heading */}
      <h1 
        className="text-5xl md:text-6xl font-extrabold mb-10 animate-wiggle"
        style={{
          color: "#FFFFFF"
        }}
      >
        🎊 HAPPY BIRTHDAY 'BODDA'! 🎊
      </h1>

      {/* Gift Box */}
      <div
        className={`relative w-40 h-40 md:w-48 md:h-48 rounded-lg shadow-2xl cursor-pointer transform transition-all duration-700 hover:scale-110 ${
          isOpened ? 'animate-bounce' : 'animate-bounce'
        }`}
        onClick={handleOpenGift}
        style={{
          background: "radial-gradient(circle, #32CD32 30%, #00CED1 70%)",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.5)"
        }}
      >
        {/* Ribbons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-full bg-yellow-400 absolute left-1/2 transform -translate-x-1/2 opacity-80"></div>
          <div className="h-5 w-full bg-yellow-400 absolute top-1/2 transform -translate-y-1/2 opacity-80"></div>
        </div>

        {/* Glow */}
        <div className="absolute inset-0 rounded-lg border-4 border-white opacity-80 blur-sm animate-glow"></div>

        {/* Gift Lid */}
        <div
          className={`absolute top-[-30px] left-0 w-full h-8 rounded-t-lg shadow-md transition-transform duration-500 ${
            isOpened ? '-rotate-35 -translate-x-12 -translate-y-12 opacity-0' : 'animate-wiggle'
          }`}
          style={{
            background: "linear-gradient(45deg, #32CD32, #00CED1)"
          }}
        ></div>

        {!isOpened && (
          <p 
            className="absolute top-[130%] left-1/2 -translate-x-1/2 text-lg font-bold animate-pulse text-white"
          >
            Tap to unlock the <strong>MAGICAL SURPRISE</strong>! 🎁✨
          </p>
        )}
      </div>

      {/* Surprise Text */}
      {isOpened && (
        <div className="mt-10 bg-white p-8 rounded-2xl shadow-xl animate-fade-in relative overflow-hidden">
          <p 
            className="text-xl md:text-2xl font-semibold text-black"
          >
            🎂 May your day be filled with joy, laughter, and <strong>EPIC</strong> adventures! 🚀🥳
          </p>

          {/* Sparkles */}
          <div className="absolute inset-0 pointer-events-none animate-sparkles"></div>
        </div>
      )}
    </div>
  );
};

export default BirthdayWish;

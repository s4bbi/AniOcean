import React, { useState, useRef } from "react";
import { MdPlayArrow, MdChevronRight } from "react-icons/md";

const days = [
  { date: "JUL 6th", day: "SUN" },
  { date: "JUL 7th", day: "MON" },
  { date: "JUL 8th", day: "TUE" },
  { date: "JUL 9th", day: "WED" },
  { date: "JUL 10th", day: "THU" },
  { date: "JUL 11th", day: "FRI" },
  { date: "JUL 12th", day: "SAT" },
];

const scheduleData = {
  0: [
    { time: "05:30", title: "Princession Orchestra", episode: 13 },
    { time: "06:30", title: "To be Hero X", episode: 2 },
    { time: "08:00", title: "Himitsu no AiPri Season 2", episode: 5 },
    { time: "12:30", title: "Cleavtess", episode: 12 },
    { time: "16:00", title: "Be Stronger: New Saga", episode: 7 },
    { time: "23:30", title: "ONE PIECE", episode: 1135 },
  ],
  1: [
    { time: "10:00", title: "Boruto: Two Blue Vortex", episode: 19 },
    { time: "13:00", title: "Mob Psycho 100", episode: 9 },
  ],
  2: [],
  3: [
    { time: "14:00", title: "Zom 100", episode: 5 },
    { time: "21:00", title: "Tokyo Revengers", episode: 10 },
  ],
  4: [
    { time: "15:30", title: "Kaiju No. 8", episode: 12 },
  ],
  5: [
    { time: "17:00", title: "Black Clover", episode: 170 },
    { time: "20:00", title: "Vinland Saga", episode: 24 },
  ],
  6: [
    { time: "18:00", title: "Dr. Stone", episode: 11 },
  ],
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const scrollRef = useRef(null);

  return (
    <section id="schedule" className="max-w-screen py-12 bg-background text-white px-6 md:px-18 relative h-full">
      {/* Heading */}
      <h2 className="text-2xl font-pM mb-6 flex items-center gap-3">
        <span className="w-1 h-6 bg-ocean rounded-sm inline-block"></span>
        Schedule
      </h2>

      {/* Day Selector - Scrollable on small screens */}
      <div className="lg:hidden relative overflow-x-hidden mb-10">
        <div
          ref={scrollRef}
          className="flex gap-4 px-2 overflow-x-auto scrollbar-hide"
        >
          {days.map(({ date, day }, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`min-w-[90px] text-center border-b-4 pb-1 transition-all duration-200 font-bN tracking-wide ${
                activeDay === index
                  ? "text-white border-[#00AEEF]"
                  : "text-white/40 border-transparent hover:border-white/30"
              }`}
            >
              <div className="text-xs text-white/60 font-pM">{date}</div>
              <div className="text-base">{day}</div>
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() =>
            scrollRef.current?.scrollBy({ left: 120, behavior: "smooth" })
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#00AEEF] p-1 rounded-full shadow-md hover:bg-[#0095cc] z-10"
        >
          <MdChevronRight size={20} className="text-white" />
        </button>
      </div>

      {/* Day Selector - Grid for large screens */}
      <div className="hidden lg:grid grid-cols-7 gap-4 mb-10">
        {days.map(({ date, day }, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`w-full text-center border-b-4 pb-1 transition-all duration-200 font-bN tracking-wide ${
              activeDay === index
                ? "text-white border-[#00AEEF]"
                : "text-white/40 border-transparent hover:border-white/30"
            }`}
          >
            <div className="text-xs text-white/60 font-pM">{date}</div>
            <div className="text-base sm:text-5xl">{day}</div>
          </button>
        ))}
      </div>

      {/* Schedule Rows */}
      <div className="flex flex-col gap-6">
        {(scheduleData[activeDay] || []).length > 0 ? (
          scheduleData[activeDay].map(({ time, title, episode }, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center justify-between border-b border-white/10 pb-4"
            >
              <div className="w-full sm:w-[90px] text-lg font-nM text-white/90 mb-2 sm:mb-0">
                {time}
              </div>
              <div className="flex-1 text-sm sm:text-base font-nM text-white text-center mb-2 sm:mb-0">
                {title}
              </div>
              <div>
                <button className="flex items-center gap-2 px-4 py-1 rounded-full border border-[#00AEEF] text-sm font-nM hover:bg-[#00AEEF] transition cursor-pointer">
                  <MdPlayArrow size={16} /> Episode {episode}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white/50 text-center py-6">No scheduled anime for this day.</p>
        )}
      </div>
    </section>
  );
}

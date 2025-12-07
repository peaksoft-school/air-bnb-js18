import { useState } from "react";

const dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const Calendar = () => {
  const today = new Date();
  const [current, setCurrent] = useState(new Date());
  const [selected, setSelected] = useState<Date | null>(null);

  const year = current.getFullYear();
  const month = current.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const prevMonth = () => setCurrent(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrent(new Date(year, month + 1, 1));

  const buildDays = () => {
    const arr: (number | null)[] = [];

    const pad = (firstDay.getDay() + 6) % 7;
    for (let i = 0; i < pad; i++) arr.push(null);

    for (let d = 1; d <= lastDay.getDate(); d++) arr.push(d);

    return arr;
  };

  const isToday = (day: number) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const isSelected = (day: number) =>
    selected &&
    day === selected.getDate() &&
    month === selected.getMonth() &&
    year === selected.getFullYear();

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 select-none">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevMonth}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
        >
          ‹
        </button>

        <h2 className="text-xl font-semibold capitalize">
          {current.toLocaleString("ru-RU", { month: "long", year: "numeric" })}
        </h2>

        <button
          onClick={nextMonth}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
        >
          ›
        </button>
      </div>

      {/* Week days */}
      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 mb-2">
        {dayNames.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-1">
        {buildDays().map((day, idx) => {
          if (!day) return <div key={idx}></div>;

          const activeToday = isToday(day);
          const activeSelected = isSelected(day);

          return (
            <button
              key={idx}
              onClick={() => setSelected(new Date(year, month, day))}
              className={`
                h-10 flex items-center justify-center rounded-full transition
                ${activeSelected ? "bg-orange-400 text-white scale-105" : ""}
                ${
                  activeToday && !activeSelected
                    ? "border border-red-500 text-red-500"
                    : ""
                }
                ${!activeSelected && !activeToday ? "hover:bg-gray-100" : ""}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

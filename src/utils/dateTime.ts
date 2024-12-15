import type { Day } from "../data/data";

export const getCurrentWeek = (): Date[] => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const dayOfMonth = now.getDate();
  const startOfWeek = new Date(now);

  startOfWeek.setDate(dayOfMonth - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

  const week: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    week.push(day);
  }

  return week;
};

export type DateData = {
  monthDay: string;
  weekDay: Day;
  isToday: boolean;
};
export const getDateData = (date: Date): DateData => {
  return {
    monthDay: date.getDate().toString().padStart(2, "0"),
    weekDay: date
      .toLocaleDateString(undefined, { weekday: "short" })
      .toLowerCase() as Day,
    isToday: date.toDateString() === new Date().toDateString(),
  };
};

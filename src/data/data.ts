export interface IExercise {
  id: number;
  name: string;
  details: string;
  sets: number;
}

export interface IWorkout {
  id: number;
  name: string;
  exercises: IExercise[];
}

export type Day = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export interface IWeekDay {
  day: Day;
  workouts: IWorkout[];
}

const weekData: IWeekDay[] = [
  {
    //Just use the weekday here to ensure the week always has data.
    day: "mon",
    workouts: [
      {
        id: 1,
        name: "Legs Are For Walking, Not For Exercise",
        exercises: [
          {
            id: 1,
            name: "Squats",
            details: "50 lb x 5, 60 lb x 5, 70 lb x 5",
            sets: 0,
          },
          {
            id: 2,
            name: "Lunges",
            details: "30 lb x 5, 40 lb x 5, 50 lb x 5",
            sets: 6,
          },
        ],
      },
      {
        id: 2,
        name: "Chest Day",
        exercises: [
          {
            id: 3,
            name: "Bench Press",
            details: "50 lb x 5, 60 lb x 5, 70 lb x 5",
            sets: 9,
          },
          { id: 4, name: "Push Ups", details: "Bodyweight x 20", sets: 3 },
        ],
      },
    ],
  },
  {
    day: "tue",
    workouts: [],
  },
  {
    day: "wed",
    workouts: [
      {
        id: 3,
        name: "Back Day",
        exercises: [
          { id: 5, name: "Pull Ups", details: "Bodyweight x 8", sets: 3 },
          {
            id: 6,
            name: "Deadlifts",
            details: "100 lb x 5, 120 lb x 5, 140 lb x 5",
            sets: 12,
          },
        ],
      },
    ],
  },
  {
    day: "thu",
    workouts: [
      {
        id: 4,
        name: "Shoulder Day",
        exercises: [
          {
            id: 7,
            name: "Overhead Press",
            details: "40 lb x 5, 50 lb x 5, 60 lb x 5",
            sets: 12,
          },
          {
            id: 8,
            name: "Lateral Raises",
            details: "15 lb x 15, 20 lb x 15, 25 lb x 15, 25 lb x 15",
            sets: 3,
          },
        ],
      },
    ],
  },
  {
    day: "fri",
    workouts: [
      {
        id: 5,
        name: "Arm Day",
        exercises: [
          {
            id: 9,
            name: "Bicep Curls",
            details: "20 lb x 12, 25 lb x 12, 30 lb x 12",
            sets: 12,
          },
          { id: 10, name: "Tricep Dips", details: "Bodyweight x 15", sets: 3 },
        ],
      },
    ],
  },
  {
    day: "sat",
    workouts: [
      {
        id: 6,
        name: "Core Day",
        exercises: [
          { id: 11, name: "Planks", details: "60 seconds x 3", sets: 3 },
          { id: 12, name: "Russian Twists", details: "20 lb x 20", sets: 3 },
          {
            id: 13,
            name: "Russian Twists And Not Leg Day",
            details: "20 lb x 20",
            sets: 3,
          },
          {
            id: 14,
            name: "Legs day",
            details: "15 lb x 15, 20 lb x 15, 25 lb x 15, 25 lb x 15",
            sets: 12,
          },
          {
            id: 15,
            name: "Run",
            details: "42km",
            sets: 1,
          },
        ],
      },
    ],
  },
  {
    day: "sun",
    workouts: [
      {
        id: 7,
        name: "Rest Day",
        exercises: [],
      },
      {
        id: 8,
        name: "Legs Are For Walking, Not For Exercise",
        exercises: [],
      },
    ],
  },
];

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const getWeekData = (date: Date) => weekData;

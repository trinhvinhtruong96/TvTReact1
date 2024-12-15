import { createContext, useReducer } from "react";
import type { Day, IWeekDay } from "./data";
import { LOAD_DATA, MOVE_EXERCISE, MOVE_WORKOUT } from "./actionTypes";

interface State {
  weekData: IWeekDay[];
}

export type Action =
  | { type: "LOAD_DATA"; payload: IWeekDay[] }
  | {
      type: "MOVE_WORKOUT";
      payload: { fromDay: Day; toDay: Day; workoutId: number };
    }
  | {
      type: "MOVE_EXERCISE";
      payload: {
        fromWorkoutId: number;
        toWorkoutId: number;
        exerciseId: number;
      };
    };

const initialState: State = {
  weekData: [],
};

const DataReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, weekData: action.payload };

    case MOVE_WORKOUT: {
      const { fromDay, toDay, workoutId } = action.payload;

      if (fromDay === toDay) {
        return state;
      }

      const fromDayData = state.weekData.find((day) => day.day === fromDay);
      const toDayData = state.weekData.find((day) => day.day === toDay);

      if (fromDayData && toDayData) {
        const fromDayWorkouts = fromDayData.workouts.filter(
          (w) => w.id !== workoutId,
        );
        const workout = fromDayData.workouts.find((w) => w.id === workoutId);

        if (workout) {
          const todayWorkouts = [...toDayData.workouts, workout];

          return {
            ...state,
            weekData: state.weekData.map((day) => {
              if (day.day === fromDay) {
                return { ...day, workouts: fromDayWorkouts };
              }

              if (day.day === toDay) {
                return { ...day, workouts: todayWorkouts };
              }

              return day;
            }),
          };
        }
      }

      return state;
    }

    case MOVE_EXERCISE: {
      const { fromWorkoutId, toWorkoutId, exerciseId } = action.payload;

      if (fromWorkoutId === toWorkoutId) {
        return state;
      }

      const fromWorkoutData = state.weekData
        .map((day) => day.workouts)
        .flat()
        .find((workout) => workout.id === fromWorkoutId);
      const toWorkoutData = state.weekData
        .map((day) => day.workouts)
        .flat()
        .find((workout) => workout.id === toWorkoutId);

      if (fromWorkoutData && toWorkoutData) {
        const fromWorkoutExercises = fromWorkoutData.exercises.filter(
          (e) => e.id !== exerciseId,
        );
        const exercise = fromWorkoutData.exercises.find(
          (e) => e.id === exerciseId,
        );

        if (exercise) {
          const toWorkoutExercises = [...toWorkoutData.exercises, exercise];

          return {
            ...state,
            weekData: state.weekData.map((day) => {
              return {
                ...day,
                workouts: day.workouts.map((workout) => {
                  if (workout.id === fromWorkoutId) {
                    return { ...workout, exercises: fromWorkoutExercises };
                  }

                  if (workout.id === toWorkoutId) {
                    return { ...workout, exercises: toWorkoutExercises };
                  }

                  return workout;
                }),
              };
            }),
          };
        }
      }

      return state;
    }

    default:
      return state;
  }
};

const DataContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const DataProvider: React.FC<ParentProps> = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };

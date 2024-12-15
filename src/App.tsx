import { StyleAppWrapper } from "./App.styled";
import WorkoutSchedule from "./containers/pages/WorkoutSchedule/WorkoutSchedule";
import { DataProvider } from "./data/DataReducer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DataProvider>
        <StyleAppWrapper>
          <WorkoutSchedule />
        </StyleAppWrapper>
      </DataProvider>
    </DndProvider>
  );
};

export default App;

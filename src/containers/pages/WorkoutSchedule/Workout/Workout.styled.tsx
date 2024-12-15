import styled from "styled-components";

export const StyleWorkoutWrapper = styled.div`
  background-color: var(--bg-primary);
  border: 1px solid #22242626;
  padding: 5px;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  cursor: grab;
`;

export const StyleWorkoutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--text-primary);
  gap: 7px;
`;

export const StyleWorkoutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyleWorkoutFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

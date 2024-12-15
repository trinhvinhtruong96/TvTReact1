import styled from "styled-components";

export const StyledExerciseWrapper = styled.div`
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 1px; // it looks better with box-shadow
`;

export const StyledExerciseHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledExerciseDetail = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

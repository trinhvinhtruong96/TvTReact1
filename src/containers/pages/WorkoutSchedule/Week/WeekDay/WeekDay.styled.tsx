import styled, { css } from "styled-components";

export const StyledWeekDayWrapper = styled.div`
  min-height: calc(100vh - 120px);
  min-width: 100px;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  gap: 9px;

  flex: 1;
`;

export const StyledWeekDayHeader = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: var(--text-secondary);
`;

export const StyledWeekDayContent = styled.div`
  background: var(--bg-secondary);
  padding: 5px;
  height: 100%;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  // opacity: 0.8017;
`;

export const StyledWeekDayTitle = styled.h3<{ $isActive: boolean }>(
  ({ $isActive }) => {
    return css`
      font-weight: 600;
      font-size: 1.1rem;
      color: var(--text-tertiary);

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      ${$isActive &&
      css`
        color: var(--text-hightlight);
        font-weight: 700;
      `}
    `;
  },
);

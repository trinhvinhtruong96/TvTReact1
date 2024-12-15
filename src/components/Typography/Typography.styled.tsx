import styled, { css } from "styled-components";

const ellipsisOverflow = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledH5Typography = styled.h5`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;

  ${ellipsisOverflow};
`;

export const StyledH6Typography = styled.h6`
  font-size: 1.3rem;
  font-weight: 600;
  ${ellipsisOverflow};
`;

export const StyledBody1Typography = styled.p`
  font-weight: 700;
  color: #919cad;
`;
export const StyledBody2Typography = styled.p`
  font-weight: 400;
  color: #95a6b7;

  ${ellipsisOverflow};
`;

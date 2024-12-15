import styled, { css } from "styled-components";
import type { IconButtonVariant } from "./IconButton";

export const StyledIconButton = styled.button<{ $variant: IconButtonVariant }>(
  ({ $variant }) => {
    return css`
      background-color: transparent;
      cursor: pointer;

      border: none;

      width: 12px;
      height: 12px;
      font-size: 12px;
      font-weight: 700;

      display: flex;
      justify-content: center;
      align-items: center;

      ${$variant === "contained" &&
      css`
        color: white;
        border-radius: 50%;
        background-color: var(--interactive);
        transition: background-color 0.3s;

        &:hover {
          background-color: var(--active);
        }
      `}

      ${$variant === "icon" &&
      css`
        color: #c4c4c4;
        transition: color 0.3s;

        &:hover {
          color: var(--active);
        }
      `}
    `;
  },
);

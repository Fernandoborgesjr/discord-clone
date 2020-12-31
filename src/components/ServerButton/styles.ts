import styled from "styled-components";

import { Props } from ".";

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  background-color: ${(props) =>
    props.isHome ? "var(--rocketseat)" : "var(--primary)"};

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
  }

  &::after {
  }
  transition: border-radius 0.2s, background-color 0.2s;
  &:active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? "var(--rocketseat)" : "var(--discord)"};
  }
`;
import React from "react";
import styled, { css } from "styled-components";

interface StyleProps {
  variant: string;
}
const Root = styled.button<StyleProps>`
  width: 100%;
  max-width: 248px;
  height: 40px;
  margin-top: 32px;
  border: 1px solid #000;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  ${(props) =>
    props.variant === ButtonVariant.default
      ? css`
          background-color: ${(props) => props.theme.colors.primary};
        `
      : css`
          background-color: transparent;
        `};
  &:disabled {
    background-color: ${(props) => props.theme.colors.disabled};
    color: ${(props) => props.theme.colors.typography};
    cursor: default;
  }
`;

export const ButtonVariant = {
  default: "default",
  outlined: "outlined",
};

export type variantType = "default" | "outlined"

interface ButtonProps {
  children: JSX.Element;
  variant: variantType;
  type?: any;
  handleClick?: any;
  disabled?: boolean;
}

const Button = ({
  children,
  variant = "default",
  handleClick,
  disabled = false,
  type
}: ButtonProps) => {
  return (
    <Root
      variant={variant}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </Root>
  );
};

export default Button;

import React from "react";
import styled, { css } from "styled-components";

interface StyleProps {
  success?: boolean;
  testId?: string;
}

const Root = styled.div<StyleProps>`
  display: flex;
  width: 192px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #F4F4F4;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  h5 {
    margin: 2px 0 12px 0;
  }
  p {
    margin: 12px 0 2px 0;
    ${(props) =>
      props.success &&
      css`
        color: ${props => props.theme.colors.success};
        font-weight: bold;
      `};
  }
`;

interface CardProps {
  title: string;
  value: string;
  success?: boolean;
  testId?: string;
}
const Card = ({ title, value, success, testId }: CardProps) => {
  return (
    <Root success={success} testId={testId}>
      <h5>{title}</h5>
      <p>{value}</p>
    </Root>
  );
};

export default Card;

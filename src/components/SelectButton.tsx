import React from "react";
import { MdInfoOutline, MdCheck } from "react-icons/md";
import styled, { css } from "styled-components";

interface StyleType {
  select: boolean;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 224px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
`;
const SelectWrapper = styled.div`
  display: flex;
`;

const SelectItem = styled.button<StyleType>`
  height: 40px;
  padding: 0;
  margin: 0;
  border: 1px solid #000;
  flex: 1;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.select &&
    css`
      background-color: ${(props) => props.theme.colors.primary};
      color: white;
      font-weight: bold;
      &:hover {
        cursor: default;
      }
    `}
  &:first-of-type {
    border-radius: 8px 0 0 8px;
  }
  &:last-of-type {
    border-radius: 0 8px 8px 0;
  }
`;

interface SelectButtonTypes {
  title: string;
  options: string[];
  handleSelect?: any;
  selected: string;
  id?: any;
}

const SelectButton = ({
  title,
  options,
  handleSelect,
  id,
  selected,
}: SelectButtonTypes): JSX.Element => {
  return (
    <Root>
      <Title>
        <span>{title}</span>
        <MdInfoOutline />
      </Title>
      <SelectWrapper>
        {options.map((option, idx) => (
          <SelectItem
            type="button"
            key={idx}
            select={selected === option}
            onClick={handleSelect}
            id={id}
            disabled={selected === option}
          >
            {selected === option && <MdCheck />}
            {option}
          </SelectItem>
        ))}
      </SelectWrapper>
    </Root>
  );
};

export default SelectButton;

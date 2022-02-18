import React from "react";
import styled, { css } from "styled-components";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

interface StyleType {
  erro?: boolean;
  ref?: any;
}

const Root = styled.div<StyleType>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 224px;
  margin-top: 24px;
  p {
    margin: 8px 0;
    padding: 16px 0;
  }
  ${(props) =>
    props.erro &&
    css`
      color: ${(props) => props.theme.colors.error};
    `}
`;

const Label = styled.label`
  margin-bottom: 16px;
  p {
    margin: 0;
  }
`;

const InputStyled = styled.input<StyleType>`
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.typography};
  &:focus {
    outline-style: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.typography};
  }
`;

const Erro = styled.span`
  color: ${(props) => props.theme.colors.error};
`;

const defaultMaskOptions = {
  prefix: "R$ ",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ".",
  allowDecimal: true,
  decimalSymbol: ",",
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  requireDecimal: false,
  allowNegative: false,
  allowLeadingZeroes: false,
};

type mask = "coin" | "percent" | "integer";

const maskOptions = (maskType: mask) => {
  switch (maskType) {
    case "integer":
      return {
        ...defaultMaskOptions,
        prefix: "",
        includeThousandsSeparator: false,
        thousandsSeparatorSymbol: "",
        allowDecimal: false,
        decimalLimit: 0, // how many digits allowed after the decimal
        integerLimit: 5, // limit length of integer numbers
      };
    case "percent":
      return { ...defaultMaskOptions, prefix: "", suffix: "%" };
    default:
      return defaultMaskOptions;
  }
};

interface InputProps {
  erro?: {
    hasErro: boolean;
    message: string;
  };
  title: string;
  name: string;
  handleChange?: any;
  value?: string;
  maskType: mask;
  alt?: string;
}

const Input = ({
  erro,
  title,
  name,
  handleChange,
  value,
  maskType,
  alt,
}: InputProps) => {
  const numberMask = createNumberMask(maskOptions(maskType));
  return (
    <Root erro={erro?.hasErro}>
      <Label>
        <p>{title}</p>
      </Label>
      <MaskedInput
        alt={alt}
        mask={numberMask}
        name={name}
        value={value}
        onChange={handleChange}
        render={(ref, props) => <InputStyled {...props} ref={ref} />}
      />
      {erro && <Erro>{erro?.message}</Erro>}
    </Root>
  );
};

export default Input;

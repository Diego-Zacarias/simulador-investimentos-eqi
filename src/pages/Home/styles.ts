import styled from "styled-components";

export const Root = styled.div`
  padding: 32px;
  margin: 16px;
  background-color: ${props => props.theme.colors.bgColor};
  h1 {
    text-align: center;
    margin: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 512px;
  margin: 0 0 64px 0;
  h2 {
    width: 100%;
  }
  @media (min-width: 768px) {
    margin: 0 64px 64px 0;
  }

`;

export const Results = styled.div`
`;


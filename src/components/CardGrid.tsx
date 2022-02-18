import React from "react";
import styled from "styled-components";

import Card from "./Card";

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 672px;
  /* border: 1px solid #000; */
  div {
    margin: 16px 32px 16px 0;
  }
`;

export interface CardGridProps {
  cardList: {
    title: string;
    value: string;
    success: boolean;
  }[];
}

const CardGrid = ({ cardList }: CardGridProps): JSX.Element => {
  return (
    <Root>
      {cardList.map(
        (card: { value: string; title: string; success: boolean }) => (
          <Card
            testId="card"
            key={card.title}
            value={card.value}
            title={card.title}
            success={card.success}
          />
        )
      )}
    </Root>
  );
};

export default CardGrid;

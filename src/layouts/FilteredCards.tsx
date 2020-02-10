import React, {ReactNode} from 'react';
import styled from '@emotion/styled';

import {Default} from './media';

const Root = styled.div`
  display: flex;
`;

const Filter = styled.div`
  width: 300px;
  margin-right: 12px;
`;

const Cards = styled.div`
  flex-grow: 1;
`;

type Props = {
  filter: ReactNode,
  children: ReactNode
};

function FilteredCards({filter, children}: Props) {
  return (
    <Root>
      <Default>
        <Filter>{filter}</Filter>
      </Default>
      <Cards>{children}</Cards>
    </Root>
  );
}

export default FilteredCards;

import React from 'react';
import styled from '@emotion/styled';

import Form from './Form';
import Tagline from './Tagline';
import {Default, Mobile} from '../../layouts/media';

const Panel = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 8px;
`;

function Search() {
  return (
    <div>
      <Mobile>
        <Form />
      </Mobile>
      <Default>
        <Panel>
          <Form />
        </Panel>
        <Tagline />
      </Default>
    </div>
  );
};

export default Search;

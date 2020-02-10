import React from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
  & h3 {
    margin-bottom: 0;
    & span {
      color: violet;
    }
  }
  & p {
    margin-top: 0;
  }
`;

function Tagline() {
  return (
    <Root>
      <h3>Travel With <span>TRAVOLTA</span></h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel feugiat ligula. Nunc accumsan dignissim neque non egestas. Aliquam ullamcorper dui quis est sollicitudin bibendum. Donec pharetra lacus id leo porttitor pharetra. Vestibulum mollis vestibulum auctor. Donec sodales sed tellus sed condimentum. Cras ac sapien eget ex ullamcorper euismod a tempor lorem. Pellentesque consectetur sagittis facilisis. Donec vehicula euismod luctus. Nullam id scelerisque eros, scelerisque luctus ante. In turpis mauris, posuere in nulla ac, egestas sodales augue.
      </p>
    </Root>
  );
}

export default Tagline;

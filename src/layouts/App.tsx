import React, {ReactNode} from 'react';
import styled from '@emotion/styled';

import {Default} from './media';

const Root = styled.div`
  background-color: #EEEEEE;
  padding: 0 24px 0 24px;
  min-height: 100%;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: violet;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

type Props = {
  title: string,
  menu: ReactNode,
  children: ReactNode
};

function App({title, menu, children}: Props) {
  return (
    <Root>
      <Header>
        <TitleContainer>
          <Logo />
          <h1>{title}</h1>
        </TitleContainer>
        <Default>
          {menu}
        </Default>
      </Header>
      <div>
        {children}
      </div>
    </Root>
  );
}

export default App;

import React, {ReactNode} from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
  min-width: 50px;
  flex-grow: 1;
`;

const Error = styled.span`
  color: red;
`;

type Props = {
  title: string,
  error?: string,
  children: ReactNode
};

function FormItem({title, error, children, ...props}: Props) {
  return (
    <Root {...props}>
      <div>
        {title}
      </div>
      <div>
        {children}
      </div>
      {error && (
        <Error>
          {error}
        </Error>
      )}
    </Root>
  );
}

export default FormItem;

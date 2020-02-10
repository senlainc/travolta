import styled from '@emotion/styled';

export type Props = React.HTMLProps<HTMLInputElement>;

const TextField = styled.input`
  height: 24px;
  border-radius: 4px;
  border: solid 2px grey;
  width: 100%;
`;

export default TextField;
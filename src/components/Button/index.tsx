import styled from '@emotion/styled';

type Props = {
  fullWidth?: boolean
};

const Button = styled.button<Props>`
  background-color: violet;
  border: solid 2px gray;
  border-radius: 4px;
  color: white;
  width: ${({fullWidth}) => fullWidth ? '100%' : null};
  height: 30px;
`;

export default Button;

import {FunctionComponent, ReactElement} from 'react';
import {useMediaQuery} from 'react-responsive';

const Mobile: FunctionComponent  = ({children}) => {
  const isMobile = useMediaQuery({maxWidth: 767});
  return (isMobile ? children : null) as ReactElement<any>;
}

const Default: FunctionComponent = ({children}) => {
  const isNotMobile = useMediaQuery({minWidth: 768});
  return (isNotMobile ? children : null) as ReactElement<any>;
}

export {
  Mobile,
  Default
};

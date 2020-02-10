import React, {useCallback} from 'react';

import {ReactComponent as Star} from './star.svg';

export type Props = {
  value?: number | null,
  onClick?: (value?: number | null) => void,
  color?: string
};

function Rating({value, color = "violet", onClick}: Props) {
  const handleClick = useCallback(() => {
    onClick && onClick(value);
  }, [onClick, value]);

  return (
    <div onClick={handleClick}>
      {value && Array(Math.ceil(value)).fill(0).map((value, index) => (
        <Star key={index} fill={color} />
      ))}
    </div>
  );
}

export default Rating;
// export type Props;

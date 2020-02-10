import React, {useCallback} from 'react';

import Rating, {Props as RatingProps} from '../Rating';

type Value = RatingProps['value'][];

export type Props = {
  value?: Value,
  onChange: (value: Value) => void
};

function RatingsFilter({value = [], onChange}: Props) {
  const handleChange = useCallback((rating) => {
    const ratingEnabled = value.includes(rating);

    // If rating was enabled - disble it,
    // else - enable
    const newValue = ratingEnabled
      ? value.filter((item) => item !== rating)
      : [...value, rating];

    onChange(newValue);
  }, [value, onChange]);

  return (
    <div>
      {Array(5).fill(0).map((v, index) => (
        <Rating
          key={index}
          value={index + 1}
          color={(value && value.includes(index + 1) ? 'violet' : 'black')}
          onClick={handleChange}
        />
      ))}
    </div>
  );
}

export default RatingsFilter;

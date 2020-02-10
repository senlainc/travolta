import React from 'react';

import TextField from '../TextField';

type Props = React.ComponentProps<typeof TextField>;

function NumberField(props: Props) {
  return (
    <TextField type="number" {...props} />
  );
}

export default NumberField;

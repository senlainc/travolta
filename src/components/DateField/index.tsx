import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import TextField from '../TextField';

type Props = React.ComponentProps<typeof DatePicker>;

function DateField(props: Props) {
  return (
    <DatePicker customInput={<TextField />} {...props} />
  );
}

export default DateField;

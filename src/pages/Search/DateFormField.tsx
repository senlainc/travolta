import React from 'react';
import {Field} from 'react-final-form'
import {required} from 'redux-form-validators';

import FormItem from '../../layouts/FormItem';
import DateField from '../../components/DateField';

type Props = {
  title: string,
  name: string
};

function DateFormField({title, name}: Props) {
  return (
  <Field
    name={name}
    render={({input, meta}) => (
      <FormItem title={title} error={meta.touched && meta.error}>
        <DateField
          selected={input.value}
          onChange={input.onChange}
          onSelect={input.onChange}
        />
      </FormItem>
    )}
    validate={required()}
  />
  );
}

export default DateFormField;

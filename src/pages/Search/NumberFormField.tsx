import React from 'react';
import {Field} from 'react-final-form';
import {required} from 'redux-form-validators';

import FormItem from '../../layouts/FormItem';
import NumberField from '../../components/NumberField';

type Props = {
  title: string,
  name: string
};

function NumberFormField({title, name}: Props) {
  return (
    <Field
      name={name}
      render={({input, meta}) => (
        <FormItem title={title} error={meta.touched && meta.error}>
          <NumberField {...input} />
        </FormItem>
      )}
      validate={required()}
    />
  );
}

export default NumberFormField;

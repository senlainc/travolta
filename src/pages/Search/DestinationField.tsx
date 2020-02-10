import React from 'react';
import {Field} from 'react-final-form';
import {required} from 'redux-form-validators';

import FormItem from '../../layouts/FormItem';
import Autocomplete from '../../components/Autocomplete';
import {getDestinations} from '../../data';

const items = getDestinations();

function DestinationField() {
  return (
    <Field
      name="destination"
      render={({input, meta}) => (
        <FormItem title="Destination" error={meta.touched && meta.error}>
          <Autocomplete
            items={items}
            value={input.value}
            onSelect={value => input.onChange(value)}
            onChange={e => input.onChange(e.target.value)}
          />
        </FormItem>
      )}
      validate={required()}
    />
  );
}

export default DestinationField;

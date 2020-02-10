import React, {useCallback} from 'react';
import styled from '@emotion/styled';

import Panel from '../../components/Panel';
import TextField from '../../components/TextField';
import RatingsFilter from '../../components/RatingsFilter';
import FormItem from '../../layouts/FormItem';
import {Filters} from '../../data';

const Title = styled.h3`
  margin: 0 0 20px 0;
`;

const initialValue: Filters = {
  name: '',
  ratings: []
};

type Props = {
  value: Filters,
  onChange: (value: Filters) => void
};

function FilterBox({value = initialValue, onChange}: Props) {
  const changeName = useCallback((e) => {
    onChange({
      ...value,
      name: e.target.value
    });
  }, [value, onChange]);

  const changeRatings = useCallback((ratingsValue) => {
    onChange({
      ...value,
      ratings: ratingsValue
    });
  }, [value, onChange]);

  return (
    <Panel>
      <Title>FilterBox</Title>
      <FormItem title="Filter by hotel name:">
        <TextField value={value.name} onChange={changeName} />
      </FormItem>
      <FormItem title="Filter by rating:">
        <RatingsFilter value={value.ratings} onChange={changeRatings} />
      </FormItem>
    </Panel>
  );
}

export default FilterBox;

import React, {ComponentProps} from 'react';
import styled from '@emotion/styled';
import CoreAutocomplete from 'react-autocomplete';

import TextField, {Props as TextFieldProps} from '../TextField';

type ItemProps = {
  highlighted?: boolean
};

type DataItem = {
  id: number,
  name: string
};

type Props = Omit<ComponentProps<typeof CoreAutocomplete>,
  'getItemValue' |
  'renderItem' |
  'renderInput' |
  'shouldItemRender' |
  'wrapperStyle'>;


const Item = styled('div')<ItemProps>`
  background-color: ${({highlighted}) => highlighted ? '#DDF' : 'transparent'}
`;

const getItemValue = (item: DataItem) => item.name;

const renderItem = (item: DataItem, highlighted?: boolean) => (
  <Item
    key={item.id}
    highlighted={highlighted}
  >
    {item.name}
  </Item>
);

const renderInput = (props: TextFieldProps) => (
  <TextField {...props} />
);

const shouldItemRender = (item: DataItem, value: string) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1;

const wrapperStyle = {
  width: '100%'
};

function Autocomplete(props: Props) {
  return (
    <CoreAutocomplete
      getItemValue={getItemValue}
      renderItem={renderItem}
      renderInput={renderInput}
      shouldItemRender={shouldItemRender}
      wrapperStyle={wrapperStyle}
      {...props}
    />
  );
}

export default Autocomplete;

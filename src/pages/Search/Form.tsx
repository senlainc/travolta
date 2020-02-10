import React from 'react';
import {Form} from 'react-final-form'
import styled from '@emotion/styled';
import {Grid, Row, Col} from 'react-flexbox-grid';

import Button from '../../components/Button';
import DestinationField from './DestinationField';
import DateFormField from './DateFormField';
import NumberFormField from './NumberFormField';

import {getHotels, readSearch, writeSearch} from '../../data';

const StyledForm = styled.form`
  display: flex;
  width: 100%;
`;

const StyledGrid = styled(Grid)`
  width: 100%;
`;

function SearchForm() {
  return (
    <Form
      onSubmit={(values) => {
        writeSearch(values);
        return getHotels({name: '', ratings: [1, 2, 3, 4, 5]}).then(console.log);
      }}
      initialValues={readSearch()}
      render={({handleSubmit, submitting}) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledGrid fluid>
            <Row between="xs" bottom="xs">
              <Col xs={12} sm={3}>
                <DestinationField />
              </Col>
              <Col xs={12} sm={3}>
                <DateFormField title="Check-In" name="checkIn" />
              </Col>
              <Col xs={12} sm={3}>
                <DateFormField title="Check-Out" name="checkOut" />
              </Col>
              <Col xs={5} sm={1}>
                <NumberFormField title="Adults" name="adults" />
              </Col>
              <Col xs={5} sm={1}>
                <NumberFormField title="Children" name="children" />
              </Col>
              <Col xs={12} sm={1}>
                <Button type="submit" disabled={submitting} fullWidth>
                  {submitting ? 'Searching...' : 'SEARCH'}
                </Button>
              </Col>
            </Row>
          </StyledGrid>
        </StyledForm>
      )}
    />
  );
}

export default SearchForm;

import React from 'react';
import styled from '@emotion/styled';

import Panel from '../../components/Panel';
import Button from '../../components/Button';
import Rating from '../../components/Rating';
import {Default} from '../../layouts/media';
import {Hotel} from '../../data';

const Root = styled.div`
  margin-bottom: 12px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const InfoBlock = styled.div`
  margin-left: 12px;
  flex-grow: 1;
`;

const Image = styled.div`
  width: 100px;
  min-width: 100px;
  height: 100px;
  border: solid 2px grey;
  display: flex;
  &:before {
    margin: auto;
    content: "Hotel Image";
  }
`;

const Name = styled.h4`
  margin: 0;
`;

const Address = styled.h5`
  margin: 0;
`;

type Props = {
  hotel: Hotel
};

function HotelCard({hotel}: Props) {
  return hotel ? (
    <Root>
      <Panel>
        <Container>
          <Image />
          <InfoBlock>
            <Name>{hotel.name}</Name>
            <Rating value={hotel.hotel_rating} />
            <Address>
              {`${hotel.address}, ${hotel.state}, ${hotel.country_code}`}
            </Address>
          </InfoBlock>
          <Default>
            <Button>Show Details</Button>
          </Default>
        </Container>
      </Panel>
    </Root>
  ) : null;
}

export default HotelCard;

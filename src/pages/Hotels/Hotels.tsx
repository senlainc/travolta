import React, {useEffect, useState, useCallback} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import {Hotel, Filters, getHotels, getHotelsCount} from '../../data';
import HotelCard from './HotelCard';

const pageSize = 10;

type Props = {
  filters: Filters
};

function Hotels({filters}: Props) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<Hotel[]>([]);

  const loadMore = useCallback(() => {
    // I should cache previous data and get only additional,
    // but for simplisity I prefer not to cache
    const countToGet = data.length + pageSize;

    return getHotels(filters, countToGet)
      .then(setData);
  }, [data.length, filters]);

  useEffect(() => {
    getHotelsCount(filters)
      .then(setCount)
      .then(loadMore);
  }, [filters]);

  return count ? (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={loadMore}
        hasMore={data.length < count}
        loader={<h4>Loading...</h4>}
        endMessage="End"
      >
        {data.map(hotel => <HotelCard key={hotel.id} hotel={hotel} />)}
      </InfiniteScroll>
    </div>
  ) : null;
}

export default Hotels;

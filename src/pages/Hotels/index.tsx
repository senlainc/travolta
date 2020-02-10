import React, {useState} from 'react';

import FilteredCards from '../../layouts/FilteredCards';
import FilterBox from './FilterBox';
import Hotels from './Hotels';
import {Filters} from '../../data';

const initialFilters = {
  name: '',
  ratings: [1, 2, 3, 4, 5]
};

function Search() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  return (
    <div>
      <FilteredCards
        filter={<FilterBox value={filters} onChange={setFilters} />}
      >
        <Hotels filters={filters} />
      </FilteredCards>
    </div>
  );
};

export default Search;

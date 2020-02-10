import hotelsArray from './hotels.json';
import destinationsArray from './destinations.json';

export type Filters = {
  name?: string,
  ratings?: number[]
};

export type Hotel = {
  id: number,
  name: string,
  address: string,
  city: string,
  state: string | null,
  country_code: string,
  hotel_rating: number | null,
  phone_number: string | null,
  website: string | null
};

type Destination = {
  id: number,
  name: string
};

type SearchSerialized = {
  destination?: string,
  checkIn?: string,
  checkOut?: string,
  adults?: number,
  children?: number,
};

type SearchParams = {
  destination?: string,
  checkIn?: Date,
  checkOut?: Date,
  adults?: number,
  children?: number,
};

const hotels: Hotel[] = hotelsArray;
const destinations: Destination[] = destinationsArray;

/**
 * The best solution for me is to have agreement inside project team that all the dates should be
 * stored and transfered only in specific format, and converted to readable only for display.
 * But this aproach requires to modyfy data around 3rd party libs. So I desided not to waste time.
 */
function deserializeSearch({checkIn, checkOut, ...data}: SearchSerialized): SearchParams {
  return {
    ...data,
    checkIn: checkIn ? new Date(checkIn) : undefined,
    checkOut: checkOut ? new Date(checkOut) : undefined,
  };
};

const filterByName = (name?: string) => (hotel: Hotel) => !name || hotel.name.indexOf(name) > -1;

const filterByRatings = (ratings?: number[]) => (hotel: Hotel) => ratings
  && hotel.hotel_rating
  && ratings.includes(Math.ceil(hotel.hotel_rating));

function getHotels(filters: Filters = {}, count: number = hotels.length): Promise<Hotel[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredHotels = hotels
        .filter(filterByName(filters.name))
        .filter(filterByRatings(filters.ratings))
        .slice(0, count);
      resolve(filteredHotels);
    }, 1000);
  });
}

function getHotelsCount(filters: Filters = {}, count: number = hotels.length): Promise<number> {
  return getHotels(filters, count)
    .then(hotels => hotels.length);
}

function getDestinations(): Destination[] {
  return destinations;
}

function writeSearch(data: SearchParams) {
  localStorage.setItem('search', JSON.stringify(data));
}

function readSearch(): SearchParams {
  return deserializeSearch(JSON.parse(localStorage.getItem('search') || ''));
}

export {
  getHotels,
  getHotelsCount,
  getDestinations,
  writeSearch,
  readSearch,
};

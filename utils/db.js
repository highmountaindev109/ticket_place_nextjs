import axios from 'axios';

export function getHeaderEvents() {
  return axios
    .get('http://localhost:3000/api/events/featured')
    .then((res) => res.data);
}

export function getAmericanExpress() {
  return axios
    .get('http://localhost:3000/api/americanExpress/featured')
    .then((res) => res.data);
}

export function getBrowseCategory() {
  return axios
    .get('http://localhost:3000/api/browseCategories/featured')
    .then((res) => res.data);
}

export function getTopSelling() {
  return axios
    .get('http://localhost:3000/api/topSellings/featured')
    .then((res) => res.data);
}

export function getSport() {
  return axios
    .get('http://localhost:3000/api/sports/featured')
    .then((res) => res.data);
}

export function getArtsTheater() {
  return axios
    .get('http://localhost:3000/api/artsTheaters/featured')
    .then((res) => res.data);
}

export function getFamily() {
  return axios
    .get('http://localhost:3000/api/families/featured')
    .then((res) => res.data);
}

export function getDiscoverMoreEvent() {
  return axios
    .get('http://localhost:3000/api/discoverMoreEvents/featured')
    .then((res) => res.data);
}

export function getFeaturedArtists() {
  return axios
    .get('http://localhost:3000/api/artists/featured')
    .then((res) => res.data);
}

export function getTickets(event, numberOfTickets, zone, priceRange) {
  return axios
    .get(
      `http://localhost:3000/api/events/${event.artist.id}/${event.id}/tickets`,
      {
        params: { numberOfTickets, zone, priceRange },
      }
    )
    .then((res) => {
      return res.data;
    });
}

export function getEventDates(event) {
  return axios
    .get(
      `http://localhost:3000/api/events/${event.artist.id}/${event.id}/dates`
    )
    .then((res) => {
      return res.data;
    });
}

import axios from 'axios';

export const countPlanets = async () => {
  const response = await axios.get('https://swapi.co/api/planets/');
  const { count } = response.data;
  return count;
}

export const fetchPlanet = async (id) => {
  const response = await axios.get('https://swapi.co/api/planets/'+id);
  const planet = response.data;
  return planet;
}

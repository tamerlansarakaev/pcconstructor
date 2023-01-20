import axios from 'axios';

export const get = async (api: string) => {
  const result = await axios.get(`${api}.json`);
  return result;
};

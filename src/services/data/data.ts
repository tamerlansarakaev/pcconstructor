import { get } from '../api/api';

const api =
  'https://pcconstructor-7b163-default-rtdb.europe-west1.firebasedatabase.app/';

export const getData = async () => {
  const currentData = get(`${api}data`);
  return currentData;
};

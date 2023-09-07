import { index } from './index';

export const finder = async (search: string) => {
  const response = await index.get(`/sick?q=${search}`);

  return response.data;
};

import { RecommendType } from '../types/recommend';

export const getCacheData = async (debouncedValue: string) => {
  try {
    const cacheStorage = await caches.open('recommend');
    const cachedResponse = await cacheStorage.match(debouncedValue);

    if (!cachedResponse || !cachedResponse.ok) {
      return false;
    }

    return await cachedResponse.json();
  } catch (error) {
    console.error('Cache Data Error : ', error);
    return false;
  }
};

export const setCacheData = async (debouncedValue: string, response: RecommendType[]) => {
  //FIXME : 상수로 바꾸기
  const cache = await caches.open('recommend');
  const init = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const CachedData = new Response(JSON.stringify(response), init);
  await cache.put(debouncedValue, CachedData);
};

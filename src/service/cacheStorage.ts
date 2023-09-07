import { RecommendType } from '../types/recommend';
import { CACHENAME } from '../styles/constant/cacheName';

export const getCacheData = async (debouncedValue: string) => {
  try {
    const cacheStorage = await caches.open(CACHENAME);
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
  if (debouncedValue.length > 0) {
    const cache = await caches.open(CACHENAME);
    const init = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const CachedData = new Response(JSON.stringify(response), init);
    await cache.put(debouncedValue, CachedData);
  }
};

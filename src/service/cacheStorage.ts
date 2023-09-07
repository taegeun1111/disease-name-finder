import { RecommendType } from '../types/recommend';
import { CACHE_NAME, CACHE_EXPIRATION_TIME } from '../styles/constant/CACHE_NAME';

export const getCacheData = async (debouncedValue: string) => {
  try {
    const cacheStorage = await caches.open(CACHE_NAME);
    const cachedResponse = await cacheStorage.match(debouncedValue);

    if (cachedResponse) {
      const expirationTime = Number(cachedResponse.headers.get('Expiration'));
      if (expirationTime && expirationTime < Date.now()) {
        // console.log('만료시간 : ' ,new Date(expirationTime).toLocaleString("ko-KR"));
        // console.log('삭제시간 : ', new Date(Date.now()).toLocaleString("ko-KR"));
        await cacheStorage.delete(debouncedValue);
        console.log(`만료됨`);
      }
      return await cachedResponse.json();
    } else {
      return false;
    }
  } catch (error) {
    console.error('Cache Data Error : ', error);
    return false;
  }
};

export const setCacheData = async (debouncedValue: string, response: RecommendType[]) => {
  if (debouncedValue.length > 0) {
    const cache = await caches.open(CACHE_NAME);
    const expirationTime = Date.now() + CACHE_EXPIRATION_TIME;

    console.log(expirationTime);

    const init = {
      headers: {
        'Content-Type': 'application/json',
        Expiration: expirationTime.toString(),
      },
    };

    const CachedData = new Response(JSON.stringify(response), init);
    await cache.put(debouncedValue, CachedData);
  }
};

import { CACHE_TIME_MILLISECONDS } from "./constants";

// function that will return the cached value if it exists
export const getCache = (key: string) => {
  const cache = JSON.parse(localStorage.getItem(key) || "{}");
  if (cache?.expire > Date.now()) {
    return cache.data;
  }
  return null;
}

// function that will set the cache value
export const setCache = (key: string, data: any) => {
  const cache = {
    data,
    expire: Date.now() + CACHE_TIME_MILLISECONDS,
  };
  localStorage.setItem(key, JSON.stringify(cache));
}
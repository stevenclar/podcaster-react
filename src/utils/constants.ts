export const URL_PODCASTS_LIST: string =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

export const URL_PODCAST_DETAIL = (podcastId: number | undefined) => {
  const podcastUrl = `https://itunes.apple.com/lookup?id=${podcastId}&country=US&media=podcast&entity=podcastEpisode&limit=1000`;
  return `https://api.allorigins.win/get?url=${encodeURIComponent(podcastUrl)}`;
};

export const CACHE_TIME_MILLISECONDS = 24 * 60 * 60 * 1000;

export const PODCASTS_CACHE_KEY = "podcasts-cache";

export const PODCAST_CACHE_KEY = (podcastId: number | undefined) =>
  `podcast-cache-${podcastId}`;
  
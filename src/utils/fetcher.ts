import Podcast from "@/interfaces/podcast.interface";
import { getCache, setCache } from "./persistentCache";
import { PODCASTS_CACHE_KEY, URL_PODCASTS_LIST } from "./constants";

const formatPodcasts = (unFormattedPodcasts: any) => {
  const parsedPodcastsData: Podcast[] = unFormattedPodcasts.feed?.entry?.map(
    (podcast: any) => {
      const parsedPodcast: Podcast = {
        id: podcast.id.attributes["im:id"],
        title: podcast["im:name"].label,
        description: podcast.summary.label,
        image: podcast["im:image"].slice(-1)?.[0].label,
        author: podcast["im:artist"].label,
      };
      return parsedPodcast;
    }
  );
  return parsedPodcastsData;
};

export const podcastsFetcher = (type: string): Promise<Podcast[]> => {
  if (type !== "ignore-cache") {
    const cachedPodcasts = getCache(PODCASTS_CACHE_KEY);
    if (!!cachedPodcasts?.length) {
      return Promise.resolve(cachedPodcasts);
    }
  }
  return fetch(URL_PODCASTS_LIST).then(async (r) => {
    const podcasts = formatPodcasts(await r.json());
    setCache(PODCASTS_CACHE_KEY, podcasts);
    return podcasts;
  });
};

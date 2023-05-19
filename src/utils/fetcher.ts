import Podcast from "@/interfaces/podcast.interface";
import { getCache, setCache } from "./persistentCache";
import {
  PODCASTS_CACHE_KEY,
  PODCAST_CACHE_KEY,
  URL_PODCASTS_LIST,
  URL_PODCAST_DETAIL,
} from "./constants";
import Episode from "@/interfaces/episode.interface";

import { format, formatDuration, intervalToDuration } from "date-fns";

const formatPodcasts = (unFormattedPodcasts: any) => {
  const formattedPodcastsData: Podcast[] = unFormattedPodcasts.feed?.entry?.map(
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
  return formattedPodcastsData;
};

const formatEpisodes = (unFormattedEpisodes: any) => {
  const formattedEpisodesData: Episode[] = unFormattedEpisodes.results
    ?.slice?.(1)
    .map((unformattedEpisode: any) => {
      let formattedDuration = " - ";
      if (unformattedEpisode.trackTimeMillis) {
        const duration = intervalToDuration({
          start: 0,
          end: +unformattedEpisode.trackTimeMillis,
        });
        const zeroPad = (num: number) => String(num).padStart(2, "0");
        formattedDuration = formatDuration(duration, {
          format: ["hours", "minutes", "seconds"],
          zero: true,
          delimiter: ":",
          locale: {
            formatDistance: (_token, count) => zeroPad(count),
          },
        });
      }
      const releaseDate = new Date(unformattedEpisode.releaseDate);
      const parsedEpisode = {
        id: unformattedEpisode.trackId,
        title: unformattedEpisode.trackName,
        audioUrl: unformattedEpisode.previewUrl,
        description: unformattedEpisode.description,
        duration: formattedDuration,
        published: format(releaseDate, "d/M/yyyy"),
        image: unformattedEpisode.artworkUrl600,
        podcastId: unformattedEpisode.collectionId,
      };
      return parsedEpisode;
    });
  return formattedEpisodesData;
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

export const podcastEpisodesFetcher = (
  podcastId: number,
  type: string
): Promise<Episode[]> => {
  const podcastCacheId = PODCAST_CACHE_KEY(podcastId);
  if (type !== "ignore-cache") {
    const cachedEpisodes = getCache(podcastCacheId);
    if (!!cachedEpisodes?.length) {
      return Promise.resolve(cachedEpisodes);
    }
  }
  return fetch(URL_PODCAST_DETAIL(podcastId)).then(async (r) => {
    const data = await r.json();
    const contents = JSON.parse(data.contents);
    const episodes = formatEpisodes(contents);
    setCache(podcastCacheId, episodes);
    return episodes;
  });
};

import Episode from "./episode.interface";
import Podcast from "./podcast.interface";

export default interface PodcasterStore {
  selectedPodcast: Podcast | null;
  selectedEpisode: Episode | null;
}
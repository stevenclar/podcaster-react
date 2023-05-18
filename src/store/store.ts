import Episode from "@/interfaces/episode.interface";
import Podcast from "@/interfaces/podcast.interface";
import PodcasterStore from "@/interfaces/store.interface";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const podcasterStore = create<PodcasterStore>()(
  devtools(
    persist(
      (set) => ({
        selectedPodcast: null,
        selectedEpisode: null,
        setSelectedPodcast: (podcast: Podcast) =>
          set({ selectedPodcast: podcast }),
        setSelectedEpisode: (episode: Episode) =>
          set({ selectedEpisode: episode }),
      }),
      {
        name: "podcaster-storage",
      }
    )
  )
);

export default podcasterStore;

import PodcasterStore from "@/interfaces/store.interface";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const usePodcasterStore = create<PodcasterStore>()(
  devtools(
    persist(
      (set) => ({
        selectedPodcast: null,
        selectedEpisode: null,
      }),
      {
        name: "podcaster-storage",
      }
    )
  )
);

export default usePodcasterStore;

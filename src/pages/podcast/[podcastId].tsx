import React, { useEffect } from "react";
import usePodcasterStore from "@/store/store";
import DetailLayout from "@/components/layouts/detail-layout";
import useSWR from "swr";
import { podcastEpisodesFetcher } from "@/utils/fetcher";
import EpisodesList from "@/components/episodes-list/episodes-list.component";

const PodcastDetail = () => {
  const selectedPodcast = usePodcasterStore((state) => state.selectedPodcast);
  const {
    data: episodes,
    error,
    isLoading,
  } = useSWR(selectedPodcast?.id, podcastEpisodesFetcher);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <DetailLayout>
      <div className='w-full bg-white border border-gray-200 rounded-lg cursor-pointer mx-auto shadow-lg'>
        <div className='flex flex-col p-4'>
          <h1 className='text-lg font-bold text-gray-700'>
            Episodes: {episodes?.length}
          </h1>
        </div>
      </div>

      <EpisodesList episodes={episodes} isLoading={isLoading} />
    </DetailLayout>
  );
};

export default PodcastDetail;

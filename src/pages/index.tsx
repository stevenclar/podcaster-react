import { PodcastCard } from "@/components/podcast-card/podcast-card.component";
import Podcast from "@/interfaces/podcast.interface";
import { podcastsFetcher } from "@/utils/fetcher";
import { filterBy } from "@/utils/filterBy";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";

export default function Home() {
  const { data, error, isLoading } = useSWR('normal', podcastsFetcher);

  const [searchValue, setSearchValue] = useState("");

  const filteredPodcasts = useMemo(() => {
    if (!searchValue.length) return data;
    return filterBy(data, searchValue.toString(), "title", "author");
  }, [data, searchValue]);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='pt-10'>
      <div className='flex justify-end'>
        <div className='p-2 bg-cyan-600 rounded text-white font-bold'>
          {filteredPodcasts?.length}
        </div>
        <input
          className='border rounded p-2 ml-2 text-gray-700'
          type='text'
          placeholder='Filter podcast...'
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
      {isLoading && <div>Loading...</div>}
      {data && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
          {filteredPodcasts?.map((podcast: Podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      )}
    </div>
  );
}

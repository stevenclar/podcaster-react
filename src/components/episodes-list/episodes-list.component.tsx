import React, { useCallback } from "react";
import { useRouter } from "next/router";
import Episode from "@/interfaces/episode.interface";
import usePodcasterStore from "@/store/store";

interface EpisodesListProps {
  episodes: Episode[] | undefined;
  isLoading: boolean;
}

const EpisodesList = ({ episodes, isLoading }: EpisodesListProps) => {
  const router = useRouter();

  const navigateToEpisode = useCallback(
    (episode: Episode) => {
      usePodcasterStore.setState({ selectedEpisode: episode });
      router.push(`${router.asPath}/episode/${episode.id}}`);
    },
    [router]
  );

  return (
    <div className='w-full bg-white border border-gray-200 rounded-lg cursor-pointer mx-auto shadow-lg mt-6'>
      <div className='flex flex-col p-4'>
        <div className='relative overflow-x-auto sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-md text-gray-700 uppercase bg-white font-bold'>
              <tr className='border-b'>
                <th scope='col' className='px-6 py-3'>
                  Title
                </th>
                <th scope='col' className='px-6 py-3'>
                  Date
                </th>
                <th scope='col' className='px-6 py-3'>
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {!isLoading &&
                episodes?.map((episode) => (
                  <tr
                    className='border-b hover:bg-gray-100'
                    key={episode.id}
                    onClick={() => navigateToEpisode(episode)}
                  >
                    <td
                      scope='row'
                      className='px-6 py-4 font-medium text-cyan-700'
                    >
                      {episode.title}
                    </td>
                    <td className='px-6 py-4'>{episode.published}</td>
                    <td className='px-6 py-4'>{episode.duration}</td>
                  </tr>
                ))}
              {isLoading && (
                <tr className='border-b animate-pulse max-w-sm h-4'>
                  <th scope='row' className='px-6 py-4 bg-gray-200'></th>
                  <td className='bg-gray-200'></td>
                  <td className='bg-gray-200'></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EpisodesList;

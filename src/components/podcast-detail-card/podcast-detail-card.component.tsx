import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import Podcast from "@/interfaces/podcast.interface";

interface PodcastDetailCardProps {
  podcast: Podcast;
}

export const PodcastDetailCard = ({ podcast }: PodcastDetailCardProps) => {
  const router = useRouter();

  const goToPodcastDetail = useCallback(() => {
    router.push(`/podcast/${podcast.id}`);
  }, [router, podcast.id]);

  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg mx-auto shadow-lg'>
      <div className='flex flex-col items-center py-6 mx-2 divide-y'>
        <Image
          className='w-36 h-36 mb-3 rounded-sm shadow-lg image cursor-pointer'
          src={podcast.image}
          alt='Bonnie image'
          width={200}
          height={200}
          onClick={goToPodcastDetail}
        />
        <div className='py-4 cursor-pointer self-start pl-3' onClick={goToPodcastDetail}>
          <h5 className='font-bold text-gray-900'>{podcast.title}</h5>
          <span className='text-sm italic text-gray-500'>
            By: {podcast.author}
          </span>
        </div>
        <div className='w-full py-4'>
          <h5 className='font-bold text-gray-900'>Description</h5>
          <span className='text-sm text-gray-500 break-all italic'>
            {podcast.description}
          </span>
        </div>
      </div>
    </div>
  );
};

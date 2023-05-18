import React, { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Podcast from "@/interfaces/podcast.interface";
import styles from "./podcast-card.module.css";
import { mergeClasses } from "@/utils/mergeClasses";
import usePodcasterStore from "@/store/store";

interface PodcastCardProps {
  podcast: Podcast;
}

export const PodcastCard = ({ podcast }: PodcastCardProps) => {
  const router = useRouter();

  const goToPodcastDetail = useCallback(() => {
    usePodcasterStore.setState({ selectedPodcast: podcast });
    router.push(`/podcast/${podcast.id}`);
  }, [podcast, router]);

  return (
    <div
      className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-20 cursor-pointer mx-auto'
      onClick={goToPodcastDetail}
    >
      <div className='flex flex-col items-center pb-10 mx-5'>
        <Image
          className={mergeClasses(
            styles.image,
            "w-24 h-24 mb-3 rounded-full shadow-lg image"
          )}
          src={podcast.image}
          alt='Bonnie image'
          width={200}
          height={200}
        />
        <h5 className='mb-1 text-xl font-medium text-gray-900'>
          {podcast.title}
        </h5>
        <span className='text-sm text-gray-500'>Author: {podcast.author}</span>
      </div>
    </div>
  );
};

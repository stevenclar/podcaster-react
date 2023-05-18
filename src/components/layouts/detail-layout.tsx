import PodcastDetail from "@/pages/podcast/[podcastId]";
import usePodcasterStore from "@/store/store";
import { PodcastDetailCard } from "../podcast-detail-card/podcast-detail-card.component";
import Podcast from "@/interfaces/podcast.interface";

interface DetailLayoutProps {
  children: React.ReactNode;
}

const DetailLayout = ({ children }: DetailLayoutProps) => {
  const selectedPodcast: Podcast = usePodcasterStore(
    (state) => state.selectedPodcast
  ) as Podcast;

  return (
    <div className='flex flex-col xl:grid xl:grid-cols-3 pt-8'>
      <div className='px-10 w-full xl:col-span-1'>
        <PodcastDetailCard podcast={selectedPodcast} />
      </div>
      <div className='pt-4 xl:col-span-2 xl:pt-0'>{children}</div>
    </div>
  );
};

export default DetailLayout;

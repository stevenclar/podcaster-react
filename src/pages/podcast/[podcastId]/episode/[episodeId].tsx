import DetailLayout from "@/components/layouts/detail-layout";
import usePodcasterStore from "@/store/store";
import styles from "./[podcastId].module.css";
import { mergeClasses } from "@/utils/mergeClasses";

const EpisodeDetails = () => {
  const selectedEpisode = usePodcasterStore((state) => state.selectedEpisode);

  return (
    <DetailLayout>
      <div className='w-full bg-white border border-gray-200 rounded-lg mx-auto shadow-lg text-gray-700'>
        {selectedEpisode && (
          <div className='flex flex-col p-4'>
            <h1 className='text-xl font-bold pb-2'>{selectedEpisode.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: selectedEpisode.description }}
              className='pb-4'
            ></div>
            <audio
              controls
              className={mergeClasses(styles.audio, "w-full pt-4")}
              src={selectedEpisode.audioUrl}
              preload='auto'
            ></audio>
          </div>
        )}
      </div>
    </DetailLayout>
  );
};

export default EpisodeDetails;

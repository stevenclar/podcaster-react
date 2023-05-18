import { PodcastCard } from "@/components/podcast-card/podcast-card.component";

export default function Home() {
  return (
    <PodcastCard
      podcast={{
        author: "Bonnie",
        title: "Bonnie",
        image: "/bonnie.jpg",
        description: "Bonnie is a podcast about Bonnie",
        id: "1",
      }}
    ></PodcastCard>
  );
}

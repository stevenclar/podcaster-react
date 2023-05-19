import type { Meta, StoryObj } from "@storybook/react";
import { PodcastDetailCard } from "./podcast-detail-card.component";

const meta: Meta<typeof PodcastDetailCard> = {
  title: "Example/PodcastDetailCard",
  component: PodcastDetailCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof PodcastDetailCard>;

export const Default: Story = {
  args: {
    podcast: {
      id: "4rOoJ6Egrf8K2IrywzwOMk",
      title: "The Joe Rogan Experience",
      description: "The Joe Rogan Experience podcast",
      image: "https://random.imagecdn.app/200/200",
      author: "Joe Rogan",
    },
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/podcast/[id]',
        query: {
          user: 'santa',
        },
      },
    },
  },
};

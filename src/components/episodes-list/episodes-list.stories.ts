import type { Meta, StoryObj } from "@storybook/react";
import EpisodesList from "./episodes-list.component";

const meta: Meta<typeof EpisodesList> = {
  title: "Example/EpisodesList",
  component: EpisodesList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof EpisodesList>;

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
  parameters: {
    nextjs: {
      router: {
        basePath: '/profile',
      },
    },
  },
};

export const IsNotLoading: Story = {
  args: {
    episodes: [
      {
        id: "4rOoJ6Egrf8K2IrywzwOMk",
        title: "The Joe Rogan Experience",
        description: "The Joe Rogan Experience podcast",
        image: "https://random.imagecdn.app/200/200",
        audioUrl: "https://random.imagecdn.app/200/200",
        published: "2021-01-01",
        duration: "100",
        podcastId: "4rOoJ6Egrf8K2IrywzwOMk",
      },
      {
        id: "4rOoJ6Egrf8K2dsasass123123",
        title: "The Paradox Podcast",
        description: "The Paradox Podcast",
        image: "https://random.imagecdn.app/200/200",
        audioUrl: "https://random.imagecdn.app/200/200",
        published: "2021-01-01",
        duration: "100",
        podcastId: "4rOoJ6Egrf8K2IrywzwOMk",
      },
    ],
    isLoading: false,
  },
  parameters: {
    nextjs: {
      router: {
        basePath: '/profile',
      },
    },
  },
};

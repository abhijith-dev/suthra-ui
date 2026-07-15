import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "../../components/Accordion";

const meta = {
  title: "Layout/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    items: [
      { title: "What is Suthra UI?", content: "Component library for React.", defaultOpen: true },
      { title: "Is it typed?", content: "Yes, TypeScript first." }
    ],
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "../../components/Skeleton";

const meta = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: {
    width: 220,
    height: 16,
    rounded: true,
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

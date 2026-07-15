import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "../../components/Progress";

const meta = {
  title: "Feedback/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: {
    value: 60,
    max: 100,
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "../../components/Spinner";

const meta = {
  title: "Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  args: {
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

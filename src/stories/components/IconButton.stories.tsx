import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "../../components/IconButton";

const meta = {
  title: "Actions/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    label: "Settings",
    icon: "S",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

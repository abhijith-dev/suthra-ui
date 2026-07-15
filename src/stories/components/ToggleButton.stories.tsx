import type { Meta, StoryObj } from "@storybook/react";

import { ToggleButton } from "../../components/ToggleButton";

const meta = {
  title: "Actions/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  args: {
    children: "Toggle me",
    defaultPressed: false,
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

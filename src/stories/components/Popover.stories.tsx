import type { Meta, StoryObj } from "@storybook/react";

import { Popover } from "../../components/Popover";

const meta = {
  title: "Overlays/Popover",
  component: Popover,
  tags: ["autodocs"],
  args: {
    trigger: "Open",
    content: "Popover content",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

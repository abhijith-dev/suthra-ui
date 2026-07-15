import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "../../components/Divider";

const meta = {
  title: "Layout/Divider",
  component: Divider,
  tags: ["autodocs"],
  args: {
    orientation: "horizontal"
  }
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

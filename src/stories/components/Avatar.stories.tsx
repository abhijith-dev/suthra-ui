import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "../../components/Avatar";

const meta = {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    name: "Abhijith",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

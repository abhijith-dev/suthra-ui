import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../../components/Badge";

const meta = {
  title: "Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "New",
    variant: "normal",
    size: "sm"
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

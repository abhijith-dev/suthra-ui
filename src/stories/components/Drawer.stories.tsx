import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from "../../components/Drawer";

const meta = {
  title: "Overlays/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  args: {
    open: true,
    side: "right",
    title: "Drawer",
    children: "Drawer content",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

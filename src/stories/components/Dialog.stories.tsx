import type { Meta, StoryObj } from "@storybook/react";

import { Dialog } from "../../components/Dialog";

const meta = {
  title: "Overlays/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  args: {
    open: true,
    title: "Dialog title",
    children: "Dialog content",
    actions: <button type="button">Close</button>,
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from "../../components/Toast";

const meta = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: {
    title: "Saved",
    description: "Changes updated",
    action: <button type="button">Undo</button>,
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

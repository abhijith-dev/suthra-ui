import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "../../components/Alert";

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    title: "Warning",
    description: "Check form fields",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import { TimePicker } from "../../components/TimePicker";

const meta = {
  title: "Forms/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
  args: {
    label: "Time",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

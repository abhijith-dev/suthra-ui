import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "../../components/DatePicker";

const meta = {
  title: "Forms/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  args: {
    label: "Date",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

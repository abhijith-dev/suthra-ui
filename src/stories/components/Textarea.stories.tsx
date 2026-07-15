import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "../../components/Textarea";

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    label: "Description",
    placeholder: "Type here",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

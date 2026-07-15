import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from "../../components/RadioGroup";

const meta = {
  title: "Forms/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    name: "plan",
    options: [
      { label: "Free", value: "free" },
      { label: "Pro", value: "pro" }
    ],
    defaultValue: "free",
    variant: "normal",
    size: "md"
  }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
